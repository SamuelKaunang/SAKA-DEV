import { atom } from 'nanostores';

export type Language = 'en' | 'id';

export const languageStore = atom<Language>('id');
