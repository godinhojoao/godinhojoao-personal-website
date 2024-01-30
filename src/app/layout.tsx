import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joao Godinho - Developer",
  description:
    "I'm a Fullstack Software Engineer crafting end-to-end solutions with expertise in backend, frontend, and automations.",
  keywords:
    "fullstack developer, web developer, Joao Godinho, godinhojoao, developer portfolio, nodejs developer, desenvolvedor, desenvolvedor web, desenvolvedor fullstack, desenvolvedor bagé, joao godinho bage",
  creator: "Joao Godinho",
  publisher: "Joao Godinho",
  metadataBase: new URL("https://godinhojoao.com/"),
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth scroll-auto h-full">
      <body className={`${inter.className} scroll-smooth h-full`}>
        <Header />
        <main style={{ overflowX: "hidden" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
