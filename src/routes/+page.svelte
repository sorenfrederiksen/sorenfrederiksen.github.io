<script>
	import Counter from './Counter.svelte';
	import Button from '../components/Button.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import townHall from '$lib/images/town-hall.svg';
	import Glass from 'svelte-awesome/icons/glass';
	import './styles.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>søren michael frederiksen</h1>

	<figure>
		<img src={townHall} alt="GitHub" />
		<figcaption>
			<span class="figcaption-main">Copenhagen town hall</span>
			<span class="figcaption-subtitle">
				Where my grandparents married on October 6, 1945, a few months after the war.
			</span>
		</figcaption>
	</figure>

	<!--
	<Button
		variant="primary"
		on:dblclick={() => console.log('fuck')}
		icon={{ data: Glass, position: 'inline-start' }}
	>
		poo
	</Button>
	-->
</section>

<style>
	section {
		--color-background-roof-copper: #bbd6a5;
		--color-background-brick-brown: #69402b;
		--color-background-golden-details: #daa02e;

		--color-text-main: #fff;

		display: grid;

		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-template-areas:
			'title title title title'
			'. . . .'
			'. . . .'
			'building building building building'
			'building building building building'
			'building building building building';

		height: 100vh;

		background-color: var(--color-background-brick-brown);
		background-size: 100% 100%;
		background-position: 0px 0px;
		background-image: linear-gradient(23deg, #4a2c1b 0%, #69402b 100%);
		color: var(--color-text-main);

		padding: 1.5rem;
	}

	h1 {
		font-weight: 200;
		font-size: 3rem;
		line-height: 1;
		font-variation-settings: 'wght' 300;

		grid-area: title;
		margin: 0;
		text-transform: lowercase;
	}

	figure {
		grid-area: building;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: end;
		margin: 0;
	}

	figure img {
		max-width: 100%;
		max-height: 100%;
		display: block;
	}

	figcaption {
		display: flex;
		position: absolute;
		flex-direction: column;
		left: 100%;
		top: 0;
		width: 24ch;
		transform: translateX(-100%);
		text-align: end;
	}

	.figcaption-main {
		font-weight: bold;
	}

	.figcaption-subtitle {
		opacity: 0.8;
	}

	@media screen and (min-width: 500px) {
		section {
			padding: 2rem;
		}

		h1 {
			font-size: calc(5rem + 1vw);
		}
	}

	@media screen and (min-width: 620px) {
		section {
			grid-template-columns: repeat(8, 1fr);
			grid-template-rows: repeat(6, 1fr);
			grid-template-areas:
				'title title title title title . . .'
				'title title title title title . . .'
				'. . . . building building building building'
				'. . . . building building building building'
				'. . . . building building building building'
				'. . . . building building building building';
		}

		h1 {
		}

		figcaption {
			left: -1rem;
			top: initial;
			bottom: 0;
			width: 24ch;
			transform: translateX(-100%);
			text-align: end;
		}
	}

	@media screen and (min-width: 1024px) {
		section {
			padding: 2rem;
		}

		h1 {
			font-size: calc(5rem + 2.75vw);
		}
	}
</style>
