import { atom } from 'nanostores';

export type Language = 'en' | 'id';

export const languageStore = atom<Language>('en'); // Default to English as per recent request, but user asked for switch
