import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Initialise GSAP avec le plugin ScrollTrigger.
 * Configure également les paramètres globaux pour la performance mobile.
 */
export const initGSAP = () => {
	gsap.registerPlugin(ScrollTrigger);

	// Optimisation : Rafraîchir ScrollTrigger lors du redimensionnement
	ScrollTrigger.config({
		autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load,resize'
	});

	// Désactiver sur les appareils très lents si nécessaire via media query
	const isLowEnd = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	
	if (isLowEnd) {
		ScrollTrigger.getAll().forEach(t => t.disable());
	}
};

/**
 * Raccourci pour créer une animation de reveal au scroll
 * @param {string} selector - Le sélecteur de l'élément à animer
 */
export const revealOnScroll = (selector) => {
	gsap.from(selector, {
		scrollTrigger: {
			trigger: selector,
			start: 'top 85%',
			toggleActions: 'play none none reverse'
		},
		y: 50,
		opacity: 0,
		duration: 0.8,
		ease: 'power3.out'
	});
};
