<script lang="ts">
	import Container from './Container.svelte';
	import { langue } from '$lib/stores/etat_global';
	import { motion } from 'framer-motion';

	let sectionOuverte = $state(null);

	const basculerSection = (section: string) => {
		sectionOuverte = sectionOuverte === section ? null : section;
	};

	const sections = [
		{
			titre: 'Produit',
			en: 'Product',
			liens: [
				{ fr: 'Compte personnel', en: 'Personal account', href: '#' },
				{ fr: 'Wave Business', en: 'Wave Business', href: '#' },
				{ fr: 'Tarifs', en: 'Pricing', href: '#' }
			]
		},
		{
			titre: 'Société',
			en: 'Company',
			liens: [
				{ fr: 'À propos', en: 'About us', href: '#' },
				{ fr: 'Carrières', en: 'Careers', href: '#' },
				{ fr: 'Sécurité', en: 'Security', href: '#' }
			]
		},
		{
			titre: 'Légal',
			en: 'Legal',
			liens: [
				{ fr: 'Conditions générales', en: 'Terms & Conditions', href: '#' },
				{ fr: 'Confidentialité', en: 'Privacy Policy', href: '#' },
				{ fr: 'Avis de cookies', en: 'Cookie Policy', href: '#' }
			]
		}
	];
</script>

<footer class="bg-primary text-surface py-12 md:py-20 mt-auto">
	<Container>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-12">
			<!-- Branding & App Stores -->
			<div class="flex flex-col gap-6">
				<div class="flex items-center gap-2">
					<span class="text-3xl">🐧</span>
					<span class="text-2xl font-gt-walsheim uppercase tracking-tighter">Wave</span>
				</div>
				<p class="text-surface/70 text-sm max-w-[200px]">
					{$langue === 'fr' 
						? 'Le moyen le plus simple et le moins cher d’envoyer et de recevoir de l’argent.' 
						: 'The simplest and cheapest way to send and receive money.'}
				</p>
				<div class="flex gap-4">
					<div class="w-28 h-10 bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20 hover:bg-surface/20 cursor-pointer transition-colors">
						<span class="text-xs">App Store</span>
					</div>
					<div class="w-28 h-10 bg-surface/10 rounded-lg flex items-center justify-center border border-surface/20 hover:bg-surface/20 cursor-pointer transition-colors">
						<span class="text-xs">Google Play</span>
					</div>
				</div>
			</div>

			<!-- Sections Footer -->
			{#each sections as section}
				<div class="border-b border-surface/10 md:border-b-0 pb-4 md:pb-0">
					<!-- Titre Section Mobile Accordion -->
					<button 
						class="flex items-center justify-between w-full md:cursor-default"
						onclick={() => basculerSection(section.titre)}
					>
						<h4 class="font-gt-walsheim text-lg uppercase tracking-wider mb-0 md:mb-6">
							{$langue === 'fr' ? section.titre : section.en}
						</h4>
						<span class="md:hidden text-2xl transition-transform {sectionOuverte === section.titre ? 'rotate-45' : ''}">+</span>
					</button>

					<!-- Liens Section -->
					<ul class="flex flex-col gap-3 mt-4 md:mt-0 overflow-hidden transition-all duration-300 {sectionOuverte === section.titre || 'hidden md:flex' ? 'max-h-60' : 'max-h-0'}">
						{#each section.liens as lien}
							<li>
								<a href={lien.href} class="text-surface/60 hover:text-surface transition-colors">
									{$langue === 'fr' ? lien.fr : lien.en}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<!-- Copyright -->
		<div class="mt-16 pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface/40">
			<p>&copy; 2026 Wave Mobile Money. Tous droits réservés.</p>
			<div class="flex gap-6">
				<a href="#" class="hover:text-surface">Twitter</a>
				<a href="#" class="hover:text-surface">Facebook</a>
				<a href="#" class="hover:text-surface">Instagram</a>
			</div>
		</div>
	</Container>
</footer>
