const c = [
	() => import("..\\..\\..\\src\\routes\\$layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\$error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\articles\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\reading\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\posts\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/articles/index.svelte
	[/^\/articles\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/gallery/index.svelte
	[/^\/gallery\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/reading/index.svelte
	[/^\/reading\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/posts/index.svelte
	[/^\/posts\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/auth/register.ts
	[/^\/auth\/register\/?$/],

	// src/routes/auth/logout.ts
	[/^\/auth\/logout\/?$/],

	// src/routes/auth/login.ts
	[/^\/auth\/login\/?$/]
];

export const fallback = [c[0](), c[1]()];