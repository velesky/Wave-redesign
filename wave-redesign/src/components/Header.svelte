<script lang="ts">
	import { darkMode, langue } from '$lib/stores/etat_global';
	import Container from './Container.svelte';
	import Bouton_CTA from './Bouton_CTA.svelte';
	import { motion, AnimatePresence } from 'framer-motion';

	let menuOuvert = $state(false);

	const basculerMenu = () => {
		menuOuvert = !menuOuvert;
	};

	const basculerDarkMode = () => {
		darkMode.update(v => !v);
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark');
		}
	};

	const liensNavigation = [
		{ fr: 'Particuliers', en: 'Personal', href: '#' },
		{ fr: 'Business', en: 'Business', href: '/fr/business' },
		{ fr: 'Carrières', en: 'Careers', href: '/fr/careers' },
		{ fr: 'À propos', en: 'About', href: '/fr/about' }
	];
</script>

<header class="fixed top-0 left-0 w-full z-50 bg-surface/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-border dark:border-zinc-800 shadow-sm transition-colors duration-300">
	<Container classe="py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 group">
			<div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
				<span class="text-2xl">🐧</span>
			</div>
			<span class="text-2xl font-gt-walsheim text-primary dark:text-surface uppercase tracking-tighter">Wave</span>
		</a>

		<!-- Navigation Desktop -->
		<nav class="hidden md:flex items-center gap-8">
			{#each liensNavigation as lien (lien.fr)}
				<a 
					href={lien.href} 
					class="text-text-primary dark:text-surface font-medium hover:text-cta transition-colors duration-200"
				>
					{$langue === 'fr' ? lien.fr : lien.en}
				</a>
			{/each}

			<!-- Toggle Dark Mode -->
			<button 
				onclick={basculerDarkMode}
				class="p-2 rounded-lg bg-border/50 dark:bg-zinc-800 text-primary dark:text-accent hover:scale-110 transition-all"
				aria-label="Changer le thème"
			>
				{#if $darkMode}
					☀️
				{:else}
					🌙
				{/if}
			</button>

			<Bouton_CTA texte={$langue === 'fr' ? 'Ouvrir un compte' : 'Open account'} classe="text-sm px-6 py-2" />
		</nav>

		<!-- Menu Hamburger Mobile -->
		<button 
			class="md:hidden p-2 text-primary" 
			onclick={basculerMenu}
			aria-label="Ouvrir le menu"
		>
			<div class="w-6 h-0.5 bg-current mb-1.5 transition-all {menuOuvert ? 'rotate-45 translate-y-2' : ''}"></div>
			<div class="w-6 h-0.5 bg-current mb-1.5 transition-all {menuOuvert ? 'opacity-0' : ''}"></div>
			<div class="w-6 h-0.5 bg-current transition-all {menuOuvert ? '-rotate-45 -translate-y-2' : ''}"></div>
		</button>
	</Container>

	<!-- Menu Mobile Overlay -->
	<AnimatePresence>
		{#if menuOuvert}
			<motion.div 
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -20 }}
				class="absolute top-full left-0 w-full bg-surface border-b border-border md:hidden shadow-xl"
			>
				<nav class="flex flex-col p-6 gap-4">
					{#each liensNavigation as lien (lien.fr)}
						<a 
							href={lien.href} 
							class="text-xl font-medium text-text-primary border-b border-border/50 pb-2"
							onclick={() => menuOuvert = false}
						>
							{$langue === 'fr' ? lien.fr : lien.en}
						</a>
					{/each}
					<div class="mt-4">
						<Bouton_CTA texte={$langue === 'fr' ? 'Télécharger Wave' : 'Download Wave'} classe="w-full" />
					</div>
				</nav>
			</motion.div>
		{/if}
	</AnimatePresence>
</header>
