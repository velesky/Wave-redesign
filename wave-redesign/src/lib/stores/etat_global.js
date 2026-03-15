import { writable } from 'svelte/store';

// État global de l'application
export const langue = writable('fr');
export const darkMode = writable(false);
export const pays = writable('CI'); // CI = Côte d'Ivoire par défaut
