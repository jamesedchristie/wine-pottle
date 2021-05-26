<!-- ****** Client-side Logic ****** -->
<script lang="ts">
	import type { CloudinaryImage } from '$types';

	export let image: CloudinaryImage;
</script>

<!-- ****** Markup ****** -->
<a href={image.secure_url} target="_blank">
	<div class="imageCard">
		<div class="image">
			<img
				src={`https://res.cloudinary.com/dkj7bctqg/image/upload/c_fill,w_300,h_300/v1621853195/${image.public_id}`}
				alt={image.context?.caption || image.public_id}
			/>
		</div>
		<div class="imageInfo">
			<strong>{image.context?.poster || 'User'}</strong>
			<p>{image.context?.caption || 'Caption'}</p>
		</div>
	</div>
</a>

<!-- ****** Styling ****** -->
<style>
	.imageCard {
		width: 300px;
		height: 400px;
		border: 1px solid black;
		border-radius: 10px;
		overflow: hidden;
		box-shadow: 2px 2px 10px grey;
		transition: box-shadow 0.25s ease 0s;
	}
	.imageCard:hover {
		box-shadow: 1px 1px 5px grey;
	}
	.image {
		height: 300px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.imageInfo {
		padding: 10px;
	}
</style>
