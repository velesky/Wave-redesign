<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { motion } from 'framer-motion';
	import Container from './Container.svelte';
	import Bouton_CTA from './Bouton_CTA.svelte';
	import { langue } from '$lib/stores/etat_global';

	let heroRef: HTMLElement;
	let titleRef: HTMLElement;
	let textRef: HTMLElement;
	let imageRef: HTMLElement;

	onMount(() => {
		const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

		tl.from(titleRef, { y: 100, opacity: 0, skewY: 7, stagger: 0.2 })
		  .from(textRef, { y: 50, opacity: 0 }, '-=0.8')
		  .from(imageRef, { scale: 0.8, opacity: 0, rotate: -5 }, '-=1');
	});
</script>

<section bind:this={heroRef} class="relative pt-32 pb-20 overflow-hidden bg-surface dark:bg-zinc-950 transition-colors duration-500">
	<!-- Décoration de fond -->
	<div class="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
	
	<Container>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="flex flex-col gap-8">
				<div class="overflow-hidden">
					<h1 bind:this={titleRef} class="text-5xl md:text-7xl font-gt-walsheim font-bold text-primary dark:text-surface leading-tight tracking-tighter">
						{#if $langue === 'fr'}
							Le futur de la <span class="text-cta">Finance</span> est ici.
						{:else}
							The future of <span class="text-cta">Finance</span> is here.
						{/if}
					</h1>
				</div>

				<p bind:this={textRef} class="text-xl text-text-secondary dark:text-zinc-400 max-w-lg leading-relaxed">
					{#if $langue === 'fr'}
						Envoyez de l'argent, payez vos factures et gérez votre business instantanément, partout dans le monde.
					{:else}
						Send money, pay bills, and manage your business instantly, anywhere in the world.
					{/if}
				</p>

				<div class="flex flex-wrap gap-4 pt-4">
					<Bouton_CTA 
						texte={$langue === 'fr' ? 'Démarrer maintenant' : 'Get started'} 
						classe="px-8 py-4 text-lg shadow-xl shadow-cta/20"
					/>
					<button class="px-8 py-4 text-lg font-medium text-primary dark:text-surface border-2 border-border dark:border-zinc-800 rounded-full hover:bg-border/10 transition-all">
						{$langue === 'fr' ? 'En savoir plus' : 'Learn more'}
					</button>
				</div>
			</div>

			<!-- Visuel Hero -->
			<div bind:this={imageRef} class="relative group">
				<div class="absolute -inset-4 bg-gradient-to-tr from-cta to-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
				<div class="relative bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl overflow-hidden border border-border dark:border-zinc-800 aspect-square flex items-center justify-center p-12">
					<!-- Illustration Placeholder Premium -->
					<div class="w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-tr-[5rem] rounded-bl-[5rem] flex items-center justify-center relative">
						<span class="text-9xl filter drop-shadow-2xl animate-bounce">📱</span>
						<div class="absolute top-10 right-10 w-24 h-24 bg-cta/10 rounded-full blur-xl animate-pulse"></div>
						<div class="absolute bottom-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</section>

<style>
	h1 {
		perspective: 1000px;
	}
</style>
