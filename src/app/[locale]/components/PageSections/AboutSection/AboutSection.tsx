import Image from "next/image";
import { Slider } from "../../Slider/Slider";
import Link from "next/link";

type AboutSectionProps = {
  translations: {
    welcome: string;
    aboutMe: string;
    mySkills: string;
    education: string;
    computerScience: string;
    informaticsTechnician: string;
  };
};

export const AboutSection = ({ translations }: AboutSectionProps) => {
  const images = [
    {
      src: "/icons/technologies/nestjs.svg",
      alt: "NestJS",
      name: "NestJS",
      url: "https://nestjs.com/",
    },
    {
      src: "/icons/technologies/node.svg",
      alt: "Node.js",
      name: "Node.js",
      url: "https://nodejs.org/",
    },
    {
      src: "/icons/technologies/mongodb.svg",
      alt: "MongoDB",
      name: "MongoDB",
      url: "https://www.mongodb.com/",
    },
    {
      src: "/icons/technologies/postgresql.svg",
      alt: "PostgreSQL",
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
    },
    {
      src: "/icons/technologies/typescript.svg",
      alt: "TypeScript",
      name: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      src: "/icons/technologies/graphql.svg",
      alt: "GraphQL",
      name: "GraphQL",
      url: "https://graphql.org/",
    },
    {
      src: "/icons/technologies/aws.svg",
      alt: "AWS",
      name: "AWS",
      url: "https://aws.amazon.com/",
    },
    {
      src: "/icons/technologies/react.svg",
      alt: "React",
      name: "React",
      url: "https://reactjs.org/",
    },
    {
      src: "/icons/technologies/angular.svg",
      alt: "Angular",
      name: "Angular",
      url: "https://angular.io/",
    },
    {
      src: "/icons/technologies/next.svg",
      alt: "Next.js",
      name: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      src: "/icons/technologies/jest.svg",
      alt: "Jest",
      name: "Jest",
      url: "https://jestjs.io/",
    },
  ];

  return (
    <section
      id="about"
      className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-6"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-1/2 h-1/2 lg:w-4/12">
          <Image
            src="/images/myself.jpeg"
            height={80}
            width={80}
            layout="responsive"
            className="w-full h-full clip-hexagon"
            alt="Joao Godinho"
            loading="lazy"
          />
        </div>

        <div className="w-full lg:w-9/12 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            <span className="text-[#004fff]">{translations.welcome}</span>
          </h2>
          <p className="font-normal text-md text-justify leading-6 text-gray-600">
            {translations.aboutMe}
          </p>
        </div>
      </div>

      <h3 className="mt-6 mb-2 text-[#004fff] font-extrabold">
        {translations.education}
      </h3>
      <ul className="ml-6 mt-2 list-disc font-normal text-md text-justify leading-6 text-gray-600">
        <li>
          {translations.computerScience}.{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://portal.ufpel.edu.br/"
            className="
        mb-3 text-[#004fff] text-base md:text-lg h-full flex items-center underline pr-1
        cursor-pointer hover:text-[#004fff] hover:bg-[#2b6dff] hover:bg-opacity-20 transition-all
      "
            style={{ width: "fit-content" }}
          >
            UFPel - Universidade Federal de Pelotas
          </Link>
        </li>
        <li className="mb-2">
          {translations.informaticsTechnician}.{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.bage.ifsul.edu.br/"
            className="
        mb-3 text-[#004fff] text-base md:text-lg h-full flex items-center underline pr-1
        cursor-pointer hover:text-[#004fff] hover:bg-[#2b6dff] hover:bg-opacity-20 transition-all
      "
            style={{ width: "fit-content" }}
          >
            IFSul - Instituto Federal Sul-rio-grandense Campus Bagé
          </Link>
        </li>
      </ul>

      <h3 className="mt-6 text-[#004fff] font-extrabold">
        {translations.mySkills}
      </h3>
      <Slider images={images} />
    </section>
  );
};
