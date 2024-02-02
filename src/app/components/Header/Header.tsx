"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("/home");
  const navLinks = [
    { path: "home", label: "Home" },
    { path: "about", label: "Sobre" },
    { path: "experiences", label: "Experiências" },
    { path: "contacts", label: "Contatos" },
    { path: "blog", label: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const aboutOffset = document.getElementById("about")?.offsetTop;
      const experiencesOffset = document.getElementById("experiences")?.offsetTop;
      const contactOffset = document.getElementById("contacts")?.offsetTop;
      const blogOffset = document.getElementById("blog")?.offsetTop;

      if (aboutOffset && scrollPosition < aboutOffset - 60) { return setActiveLink("/home"); }
      else if (experiencesOffset && scrollPosition < experiencesOffset - 60) { return setActiveLink("/about"); }
      else if (contactOffset && scrollPosition < contactOffset - 60) { return setActiveLink("/experiences"); }
      else if (blogOffset && scrollPosition < blogOffset - 60) { return setActiveLink("/contacts"); }
      else { return setActiveLink("/blog");};
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-5 w-full" style={{ zIndex: 999 }}>
      <nav
        className="mx-auto py-3 px-3 rounded-full bg-[#02002670]"
        style={{
          backdropFilter: "blur(20px) saturate(1.7)",
          boxShadow: "-1px 0px 14px 0px #004fff36",
          width: "max-content",
        }}
      >
        <ul className="flex items-center space-x-1 sm:space-x-4 justify-evenly w-full">
          {navLinks.map((link) => {
            return (
              <li key={link.path}>
                <Link
                  href={`/#${link.path}`}
                  className={`hover:text-white py-2 px-2 sm:px-4 rounded-full transition-all duration-500 ${
                    activeLink === `/${link.path}`
                      ? "text-white bg-[#1244b1]"
                      : "text-[#a9c2f7]"
                  }`}
                  onClick={() => setActiveLink(`/${link.path}`)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
