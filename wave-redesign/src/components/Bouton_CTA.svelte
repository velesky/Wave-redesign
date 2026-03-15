<script lang="ts">
	import { motion } from 'framer-motion';

	interface Props {
		texte: string;
		lien?: string;
		type?: 'button' | 'submit';
		classe?: string;
		onclick?: () => void;
	}

	let { texte, lien = '', type = 'button', classe = '', onclick }: Props = $props();

	const variants = {
		initial: { scale: 1 },
		hover: { 
			scale: 1.05,
			backgroundColor: 'var(--color-accent)', // Orange énergie
			boxShadow: 'var(--shadow-medium)'
		},
		tap: { scale: 0.95 }
	};
</script>

{#if lien}
	<motion.a
		href={lien}
		class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-surface font-gt-walsheim text-lg transition-colors duration-300 min-h-[44px] {classe}"
		initial="initial"
		whileHover="hover"
		whileTap="tap"
		{variants}
	>
		{texte}
	</motion.a>
{:else}
	<motion.button
		{type}
		class="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-surface font-gt-walsheim text-lg transition-colors duration-300 min-h-[44px] {classe}"
		{onclick}
		initial="initial"
		whileHover="hover"
		whileTap="tap"
		{variants}
	>
		{texte}
	</motion.button>
{/if}

<style>
	/* Styles locaux si nécessaire, mais Tailwind v4 gère l'essentiel */
</style>
