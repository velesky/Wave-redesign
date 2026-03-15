<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		classe?: string;
	}

	let { children, classe = '' }: Props = $props();
</script>

<div class="max-w-[1200px] mx-auto px-4 md:px-8 {classe}">
	{@render children()}
</div>
