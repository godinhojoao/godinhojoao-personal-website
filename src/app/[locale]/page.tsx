import dynamic from "next/dynamic";
import { getLocale } from "next-intl/server";
import { getCurrentTranslations } from "./utils/getCurrentTranslations";
import { HomeSection } from "./components/PageSections/HomeSection/HomeSection";
import { AboutSection } from "./components/PageSections/AboutSection/AboutSection";
import { ExperiencesSection } from "./components/PageSections/ExperiencesSection/ExperiencesSection";
import { ContactSection } from "./components/PageSections/ContactSection/ContactSection";
import { fetchStaticData } from "./fetchStaticData";

const DynamicBlogSection = dynamic(
  () => import("./components/PageSections/BlogSection/BlogSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default async function Page() {
  const locale = await getLocale();
  const translations = await getCurrentTranslations(locale);
  const blogPosts = await fetchStaticData.blogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joao Godinho Jardim",
    // logo: "https://godinhojoao.com/godinhojoao-logo.jpeg",
    url: "https://godinhojoao.com/",
    sameAs: [
      "https://www.linkedin.com/in/joaogodinhoo/",
      "https://github.com/godinhojoao",
      "https://dev.to/godinhojoao",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "personal",
      email: "godinhojoao2003@gmail.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HomeSection translations={translations.Main.Home} />

      <AboutSection translations={translations.Main.About} />

      <ExperiencesSection translations={translations.Main.Experiences} />

      <ContactSection translations={translations.Main.Contacts} />

      <DynamicBlogSection
        blogPosts={blogPosts}
        translations={translations.Main.Blog}
      />
    </>
  );
}
