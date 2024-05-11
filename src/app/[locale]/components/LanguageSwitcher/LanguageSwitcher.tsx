import Image from "next/image";
import Link from "next/link";

type LanguageSwitcherProps = {
  locale: "en" | "pt";
  flagImageAltText: string;
};

export const LanguageSwitcher = ({
  locale,
  flagImageAltText,
}: LanguageSwitcherProps) => {
  const isLocaleEnUS = locale === "en";

  return (
    <div className="mt-10 flex items-center justify-center">
      <Link
        href={`/pt`}
        className={`text-md mr-5 font-bold ${
          isLocaleEnUS
            ? "text-[#fff]"
            : "bg-gradient-to-r text-transparent bg-clip-text from-green-500 via-yellow-400 to-blue-600"
        } transition-all hover:scale-105`}
      >
        pt-BR
      </Link>

      <Link
        href={`${isLocaleEnUS ? "/pt" : "/en"}`}
        className="transition-all hover:scale-110"
      >
        <Image
          src={`/images/${isLocaleEnUS ? "en" : "pt"}.png`}
          height={80}
          width={80}
          className="w-10 h-9 rounded-full"
          style={{ objectFit: "fill" }}
          alt={flagImageAltText}
        />
      </Link>

      <Link
        href={`/en`}
        className={`text-md ml-5 font-bold ${
          isLocaleEnUS
            ? "bg-gradient-to-r text-transparent bg-clip-text from-red-600 via-white to-blue-600"
            : "text-[#fff]"
        } transition-all hover:scale-105`}
      >
        en-US
      </Link>
    </div>
  );
};
