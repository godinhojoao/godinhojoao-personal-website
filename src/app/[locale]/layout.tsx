import Link from "next/link";
import { redirect } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Inter } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { getCurrentTranslations } from "./utils/getCurrentTranslations";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("title"),
    description: t("description"),
    keywords:
      "fullstack developer, web developer, Joao Godinho, godinhojoao, developer portfolio, nodejs developer, desenvolvedor, desenvolvedor web, desenvolvedor fullstack, desenvolvedor bagé, joao godinho bage",
    creator: "Joao Godinho",
    publisher: "Joao Godinho",
    metadataBase: new URL("https://godinhojoao.com/"),
    icons: ["/favicon.ico"],
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locales = ["en", "pt"];
  if (!locales.includes(locale)) return redirect("/en");
  const htmlLang = locale === "en" ? "en-US" : "pt-BR";
  const currentTranslations = await getCurrentTranslations(locale);
  return (
    <html lang={htmlLang} className="scroll-smooth scroll-auto h-full">
      <body className={`${inter.className} scroll-smooth h-full`}>
        <Header translations={currentTranslations.Header} locale={locale} />
        <main style={{ overflowX: "hidden" }}>{children}</main>
        <Footer translations={currentTranslations.Footer} />
      </body>
    </html>
  );
}
