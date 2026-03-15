<script lang="ts">
	import Hero_Section from '../components/Hero_Section.svelte';
	import Card_Benefice from '../components/Card_Benefice.svelte';
	import Container from '../components/Container.svelte';
	import { langue } from '$lib/stores/etat_global';

	const benefices = [
		{ 
			titreFr: 'Transferts Instantanés', 
			titreEn: 'Instant Transfers', 
			descFr: 'Envoyez de l’argent à vos proches en quelques secondes, sans frais cachés.', 
			descEn: 'Send money to your loved ones in seconds, with no hidden fees.',
			icone: '⚡' 
		},
		{ 
			titreFr: 'Paiement de Factures', 
			titreEn: 'Bill Payments', 
			descFr: 'Payez vos factures d’électricité, d’eau et plus encore directement depuis l’app.', 
			descEn: 'Pay your electricity, water bills and more directly from the app.',
			icone: '📑' 
		},
		{ 
			titreFr: 'Sécurité Maximale', 
			titreEn: 'Maximum Security', 
			descFr: 'Vos transactions sont protégées par les standards de sécurité les plus élevés.', 
			descEn: 'Your transactions are protected by the highest security standards.',
			icone: '🛡️' 
		}
	];
</script>

<Hero_Section />

<section class="py-24 bg-surface dark:bg-zinc-950 transition-colors duration-500">
	<Container>
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-gt-walsheim font-bold text-primary dark:text-surface mb-6">
				{$langue === 'fr' ? 'Pourquoi choisir Wave ?' : 'Why choose Wave?'}
			</h2>
			<p class="text-text-secondary dark:text-zinc-400 max-w-2xl mx-auto text-lg">
				{$langue === 'fr' 
					? 'Une expérience bancaire simplifiée, conçue pour votre quotidien numérique.' 
					: 'A simplified banking experience, designed for your digital daily life.'}
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each benefices as benefice, i (benefice.titreFr)}
				<Card_Benefice 
					titre={$langue === 'fr' ? benefice.titreFr : benefice.titreEn}
					description={$langue === 'fr' ? benefice.descFr : benefice.descEn}
					icone={benefice.icone}
					index={i}
				/>
			{/each}
		</div>
	</Container>
</section>
