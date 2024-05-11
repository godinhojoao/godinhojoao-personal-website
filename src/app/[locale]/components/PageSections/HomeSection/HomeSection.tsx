import { LanguageSwitcher } from "../../LanguageSwitcher/LanguageSwitcher";
import { SocialContacts } from "../../SocialContacts/SocialContacts";
import "./HomeSection.css";

type HomeSectionProps = {
  translations: {
    hello: string;
    softwareDeveloper: string;
    yearsDeveloping: string;
    flagImageAltText: string;
  };
};

export const HomeSection = ({ translations }: HomeSectionProps) => {
  const CURRENT_YEAR = new Date().getFullYear();
  const YEARS_DEVELOPING = CURRENT_YEAR - 2019;
  const YEARS_DEVELOPING_PROFESSIONALLY = CURRENT_YEAR - 2021;
  const experienceDeveloping = translations.yearsDeveloping
    .replace("{YEARS_DEVELOPING}", YEARS_DEVELOPING.toString())
    .replace(
      "{YEARS_DEVELOPING_PROFESSIONALLY}",
      YEARS_DEVELOPING_PROFESSIONALLY.toString()
    );
  return (
    <section id="home" className="overflow-hidden bg-[#091a41]">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#003ec0] to-[#808cff] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse animate-home-background"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-4xl py-14 lg:py-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white sm:text-6xl">
              {translations.hello}{" "}
              <span className="text-[#004fff]">João Godinho</span>,{" "}
              {translations.softwareDeveloper}.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white">
              {experienceDeveloping}
            </p>

            <SocialContacts />
          </div>

          <LanguageSwitcher
            flagImageAltText={translations.flagImageAltText}
            locale={
              translations.softwareDeveloper.includes("Desenvolvedor")
                ? "pt"
                : "en"
            }
          />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#003ec0] to-[#808cff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse animate-home-background"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
