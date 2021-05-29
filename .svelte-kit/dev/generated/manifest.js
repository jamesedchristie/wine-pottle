const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\logout.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\create.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\join.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\__layout.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\articles\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\gallery\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\reading\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\lists\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\venues\\[venue]\\posts\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\login.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/articles/index.json.ts
	[/^\/articles\.json$/],

	// src/routes/articles/preview.ts
	[/^\/articles\/preview\/?$/],

	// src/routes/reading/index.json.ts
	[/^\/reading\.json$/],

	// src/routes/images/upload.ts
	[/^\/images\/upload\/?$/],

	// src/routes/images/venues/[venue].json.ts
	[/^\/images\/venues\/([^/]+?)\.json$/],

	// src/routes/logout.svelte
	[/^\/logout\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/venues/index.json.ts
	[/^\/venues\.json$/],

	// src/routes/venues/create.ts
	[/^\/venues\/create\/?$/],

	// src/routes/venues/create.svelte
	[/^\/venues\/create\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/venues/enter.ts
	[/^\/venues\/enter\/?$/],

	// src/routes/venues/leave.ts
	[/^\/venues\/leave\/?$/],

	// src/routes/venues/join.ts
	[/^\/venues\/join\/?$/],

	// src/routes/venues/join.svelte
	[/^\/venues\/join\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/venues/[id].json.ts
	[/^\/venues\/([^/]+?)\.json$/],

	// src/routes/venues/[venue]/index.svelte
	[/^\/venues\/([^/]+?)\/?$/, [c[0], c[6], c[7]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/venues/[venue]/articles/index.svelte
	[/^\/venues\/([^/]+?)\/articles\/?$/, [c[0], c[6], c[8]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/venues/[venue]/gallery/index.svelte
	[/^\/venues\/([^/]+?)\/gallery\/?$/, [c[0], c[6], c[9]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/venues/[venue]/reading/index.svelte
	[/^\/venues\/([^/]+?)\/reading\/?$/, [c[0], c[6], c[10]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/venues/[venue]/lists/index.svelte
	[/^\/venues\/([^/]+?)\/lists\/?$/, [c[0], c[6], c[11]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/venues/[venue]/posts/index.svelte
	[/^\/venues\/([^/]+?)\/posts\/?$/, [c[0], c[6], c[12]], [c[1]], (m) => ({ venue: d(m[1])})],

	// src/routes/lists/index.json.ts
	[/^\/lists\.json$/],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/posts/index.json.ts
	[/^\/posts\.json$/],

	// src/routes/users/create.ts
	[/^\/users\/create\/?$/],

	// src/routes/users/[id].json.ts
	[/^\/users\/([^/]+?)\.json$/],

	// src/routes/auth/createSession.ts
	[/^\/auth\/createSession\/?$/],

	// src/routes/auth/logout.ts
	[/^\/auth\/logout\/?$/],

	// src/routes/auth/login.ts
	[/^\/auth\/login\/?$/]
];

export const fallback = [c[0](), c[1]()];