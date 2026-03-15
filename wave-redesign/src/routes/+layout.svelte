<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '../components/Header.svelte';
	import Footer_Legal from '../components/Footer_Legal.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Wave - Le futur de la finance</title>
</svelte:head>

<div class="min-h-screen flex flex-col bg-surface dark:bg-zinc-950 transition-colors duration-500">
	<Header />
	
	<main class="flex-grow">
		{@render children()}
	</main>

	<Footer_Legal />
</div>
