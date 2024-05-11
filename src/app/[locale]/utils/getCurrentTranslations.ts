import englishTranslations from "../../../../translations/en.json";
import portugueseTranslations from "../../../../translations/pt.json";

async function getCurrentTranslations(locale: string) {
  const currentTranslations =
    locale === "en" ? englishTranslations : portugueseTranslations;
  return currentTranslations;
}

export { getCurrentTranslations }