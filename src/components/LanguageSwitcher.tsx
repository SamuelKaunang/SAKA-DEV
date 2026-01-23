import { useStore } from '@nanostores/react';
import { languageStore } from '../stores/languageStore';

export default function LanguageSwitcher() {
  const language = useStore(languageStore);

  const toggleLanguage = () => {
    languageStore.set(language === 'en' ? 'id' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="bg-white border-4 border-black shadow-hard-sm px-3 py-1 font-black text-sm uppercase hover:bg-black hover:text-white transition-colors flex items-center gap-2 cursor-pointer neo-brutal-btn"
    >
      <span className={language === 'id' ? 'text-[#ea2a33]' : ''}>ID</span>
      <span>/</span>
      <span className={language === 'en' ? 'text-[#ea2a33]' : ''}>EN</span>
    </button>
  );
}
