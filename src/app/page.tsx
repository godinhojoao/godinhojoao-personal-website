import dynamic from "next/dynamic";
import { HomeSection } from "./components/PageSections/HomeSection/HomeSection";
import { AboutSection } from "./components/PageSections/AboutSection/AboutSection";
import { ExperiencesSection } from "./components/PageSections/ExperiencesSection/ExperiencesSection";
import { ContactSection } from "./components/PageSections/ContactSection/ContactSection";
const DynamicBlogSection = dynamic(
  () => import("./components/PageSections/BlogSection/BlogSection"),
  {
    loading: () => <p>Loading...</p>,
  }
);
import { fetchStaticData } from "./fetchStaticData";

export default async function Page() {
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

      <HomeSection />

      <AboutSection />

      <ExperiencesSection />

      <ContactSection />

      <DynamicBlogSection blogPosts={blogPosts} />
    </>
  );
}
