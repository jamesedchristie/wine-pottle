<!-- ****** Client-side Logic ****** -->
<script lang="ts">
    import type { Venue } from "$types";
    export let venue: Venue;
    export let linkMode: 'enter' | 'join';
</script>

<!-- ****** Markup ****** -->
<a href={linkMode === 'enter' ? `venues/enter?venueId=${venue.id}&route=${venue.route}` : `/venues/join?venue=${venue.id}`}>
    <div class="venueCard">
        <div class="venueImage">								
            <img 
            src={venue.venueImageId 
            ? `https://res.cloudinary.com/dkj7bctqg/image/upload/v1621853195/${venue.venueImageId}`
            : 'https://res.cloudinary.com/dkj7bctqg/image/upload/c_crop,h_300,w_300,x_256,y_284/v1621857774/WinePottle/wine-bar-default.jpg'}
            alt={venue.name}             
            />								
        </div>							
        <div class="venueInfo">
            <h4>{venue.name}</h4>
            <p>{venue.description || ""}</p>
        </div>
    </div>
</a>

<!-- ****** Styling ****** -->
<style>
    .venueCard {
		width: 300px;
        height: 450px;
		border: 1px solid black;
		border-radius: 10px;
        overflow: hidden;
		box-shadow: 2px 2px 10px grey;
		transition: box-shadow 0.25s ease 0s;
	}
	.venueCard:hover {
		box-shadow: 1px 1px 5px grey;
	}
    .venueImage {
        height: 70%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
	.venueInfo {
		padding: 10px
	}
    h4 {
        font-size: 18px;
    }
</style>