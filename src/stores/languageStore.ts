import { persistentAtom } from '@nanostores/persistent';
import { computed } from 'nanostores';
import { translations, type LanguageCode } from '../utils/translations';

export type { LanguageCode };

// Persistent language store with default fallback to English
export const currentLanguage = persistentAtom<LanguageCode>('language', 'en', {
  encode: JSON.stringify,
  decode: (str) => {
    try {
      const parsed = JSON.parse(str);
      // Validate that the parsed language exists in our translations
      return parsed in translations ? parsed : 'en';
    } catch {
      return 'en';
    }
  }
});

// Computed store for current translations
export const currentTranslations = computed(currentLanguage, (lang) => {
  return translations[lang] || translations.en;
});

// Helper function to change language
export function setLanguage(lang: LanguageCode) {
  if (lang in translations) {
    currentLanguage.set(lang);
  }
}

// Helper function to get current language
export function getCurrentLanguage(): LanguageCode {
  return currentLanguage.get();
}