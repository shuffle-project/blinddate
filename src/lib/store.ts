// only for the user test so the welcome modal doesn't appear again when
// coming back from a sim-game sub page

import { writable } from 'svelte/store';

export const welcomeTextShown = writable(false);
