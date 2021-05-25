import { firestore } from "$services/firebaseAdmin";
import type { EndpointOutput, Request } from "@sveltejs/kit";
import type { Article, ArticlePreview } from "$types";
import linkPreview from "link-preview-js";

export async function post({ body }: Omit<Request, 'body'> & { body: Article }): Promise<EndpointOutput> {
    try {
        const { userId, venueId, href, datetime, preview } = body;
        const ref = await firestore.collection('articles').add({
            userId,
            venueId,
            href,
            datetime,
            title: preview.title,
            image: preview.images[0],
            description: preview.description            
        });
        //console.log("Added doc " + ref.id);
        return {
            body: {
                id: ref.id
            }
        }
    } catch (err) {
        return {
            body: {
                errors: err
            }
        }
    }
}

export async function get({ query }: Request): Promise<EndpointOutput> {
    try {
        const venueId = query.get('venueId');
        //console.log(venueId);
        const snapshot = await firestore.collection('articles').where('venueId', '==', venueId).get();
        //console.log("Snapshot length: " + snapshot.docs.length);
        let articles: Article[] = [];
        for (let doc of snapshot.docs) {
            let article = doc.data() as Article;
            //console.log(article);
            article.datetime = new Date(article.datetime);            
            articles.push(article);
        }
        //console.log(articles.length);
        return {
            body: articles
        }
    } catch (err) {
        console.log(err);
        return {
            status: 500,
            body: {
                errors: err
            }
        }
    }
}