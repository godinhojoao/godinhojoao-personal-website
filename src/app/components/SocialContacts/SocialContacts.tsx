import Image from "next/image";
import Link from "next/link";

type SocialContactsProps = {
  useDarkIcons?: boolean;
};

export function SocialContacts({ useDarkIcons }: SocialContactsProps) {
  const socialMediaLinks = [
    {
      url: "https://github.com/godinhojoao",
      src: useDarkIcons
        ? "/icons/github-dark-icon.svg"
        : "/icons/github-light-icon.svg",
      alt: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/joaogodinhoo/",
      src: useDarkIcons
        ? "/icons/linkedin-dark-icon.svg"
        : "/icons/linkedin-light-icon.svg",
      alt: "LinkedIn",
    },
    {
      url: "https://dev.to/godinhojoao",
      src: useDarkIcons
        ? "/icons/devto-dark-icon.svg"
        : "/icons/devto-light-icon.svg",
      alt: "DevTo",
    },
    {
      url: "mailto: godinhojoao2003@gmail.com",
      src: useDarkIcons
        ? "/icons/email-dark-icon.svg"
        : "/icons/email-light-icon.svg",
      alt: "Email",
    },
  ];

  return (
    <ul className="mt-10 bg-[] py-1 px-2 border rounded-full flex justify-around items-center mx-auto w-80 shadow-md group">
      {socialMediaLinks.map((link, index) => (
        <li key={index} className="animate-scale drop-shadow-on-hover">
          <Link href={link.url} target="_blank">
            <Image
              src={link.src}
              height={30}
              width={30}
              className="w-[2rem] h-[2rem] sm:w-[2.4rem] sm:h-[2.4rem] transition-transform transform hover:scale-110"
              alt={link.alt}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
