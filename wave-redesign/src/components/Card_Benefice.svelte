<script lang="ts">
	import { motion } from 'framer-motion';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let { titre, description, icone, index } = $props();

	let cardRef: HTMLElement;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		
		gsap.from(cardRef, {
			scrollTrigger: {
				trigger: cardRef,
				start: 'top 90%',
				toggleActions: 'play none none reverse'
			},
			y: 50,
			opacity: 0,
			duration: 0.8,
			delay: index * 0.1,
			ease: 'back.out(1.7)'
		});
	});
</script>

<div 
	bind:this={cardRef}
	class="group p-8 bg-surface dark:bg-zinc-900 rounded-[2.5rem] border border-border dark:border-zinc-800 hover:border-cta dark:hover:border-cta transition-all duration-500 hover:shadow-2xl hover:shadow-cta/5 flex flex-col gap-6"
>
	<div class="w-16 h-16 bg-cta/10 text-cta rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
		{icone}
	</div>

	<h3 class="text-2xl font-gt-walsheim font-bold text-primary dark:text-surface leading-tight">
		{titre}
	</h3>

	<p class="text-text-secondary dark:text-zinc-400 leading-relaxed">
		{description}
	</p>

	<a href="#" class="mt-auto flex items-center gap-2 text-cta font-bold group/link">
		<span>Découvrir</span>
		<svg 
			class="w-5 h-5 transform group-hover/link:translate-x-2 transition-transform duration-300" 
			fill="none" 
			stroke="currentColor" 
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
		</svg>
	</a>
</div>
