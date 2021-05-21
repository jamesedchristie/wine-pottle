# Wine Pottle

_**Under Construction**_

A social media platform for people in the wine trade, with channels for individual venues or companies. Users with admin access for their organisation can compose and share articles, compile reading lists, approve new members, etc. All other users can write and comment on posts, and upload pictures to the gallery.

---

## Stack
### Svelte + SvelteKit + Firebase

---

Under construction using the SvelteKit public beta. SvelteKit is designed to optimise site performance, UX and SEO by utilising SSR wherever appropriate (e.g. on first page load) before hydrating back into a Svelte app in the browser. 

*.svelte files make up the client side app, although each page should also be able to be rendered server side. The SvelteKit router allows dynamic paramaters, which in this project allows the creation of a specific route path per venue (e.g. 'routes/venues/[venue]/posts'). That path also has its own nested layout.

*.js or *.ts files within the routes directory are endpoints with corresponding HTTP methods, while hooks.ts contains middleware functions.

Firebase is being used for Auth and a Firestore database. Auth is done server side using the JavaScript SDK v9-beta, while database access is handled server side in endpoints using the Node 'firebase-admin' SDK.

Image hosting is provided by Cloudinary, and user upload is done client-side using their API v2.

## TODO
A lot. First and foremost, deploy to either Vercel or Netlify using their SvelteKit adapters.
