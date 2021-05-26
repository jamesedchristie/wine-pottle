/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { FirebaseApp } from '@firebase/app';
import type { Auth } from '@firebase/auth';
import type { FirebaseFirestore } from '@firebase/firestore';

type FirebaseStore = {
	firebase: FirebaseApp;
	auth: Auth;
	firestore: FirebaseFirestore;
};

type firebaseUser = firebase.default.auth.UserCredential;

type WinePottleUser = {
	id: string;
	name: string;
	email: string;
};

type Venue = {
	id: string;
	name: string;
	route: string;
	owner?: string;
	venueImageId?: string;
	description?: string;
};

type VenueSecret = {
	password: string;
} & Venue;

type UVM = {
	id: string;
	venueId: string;
	userId: string;
};

type Post = {
	id?: string;
	author: string;
	title: string;
	content: string;
	datetime: Date;
	userId: string;
	venueId: string;
};

type CloudinaryImage = {
	public_id: string;
	width: number;
	height: number;
	created_at: string;
	tags: Array<string>;
	secure_url: string;
};

type GetLinkPreviewResponse = {
	url: string;
	title: string;
	siteName: string | undefined;
	description: string | undefined;
	mediaType: string;
	contentType: string | undefined;
	images: string[];
	videos: {
		url: string | undefined;
		secureUrl: string | null | undefined;
		type: string | null | undefined;
		width: string | undefined;
		height: string | undefined;
	}[];
	favicons: string[];
}

type Article = {
	id?: string;
	userId: string;
	venueId: string;
	datetime: Date;
	href: string;
	title?: string;
	description?: string;
	image?: string;
};

type NewArticleData = {
	userId: string;
	venueId: string;
	href: string;
	datetime: string;
};

type WineList = {
	userId: string;
	poster: string;
	venueId: string;
	href: string;
	listVenueName: string;
	note: string;
	datetime: Date;
};
