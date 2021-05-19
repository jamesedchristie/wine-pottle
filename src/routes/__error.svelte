<script context="module" lang="ts">
    import type { ErrorLoad } from "@sveltejs/kit";
	export const load: ErrorLoad = ({ error, status }) => {
		return {
			props: {
				error: `${status}: ${error.message}`
			}
		};
	};
</script>

<script lang="ts">
    export let error: string;
</script>

<h1>Oooops! Looks like something went wrong.</h1>
<p>{error}</p>