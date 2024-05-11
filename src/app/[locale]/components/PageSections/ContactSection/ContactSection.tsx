import { SocialContacts } from "../../SocialContacts/SocialContacts";

type ContactSectionProps = {
  translations: {
    infos: string;
    contactMe: string;
  };
};

export function ContactSection({ translations }: ContactSectionProps) {
  return (
    <section id="contacts" className="bg-white">
      <div className="relative isolate items-center justify-center overflow-hidden px-6 py-20 sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-0 bg-[#fff]">
        <div className="mx-auto flex flex-col text-center lg:py-32  mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            <span className="text-[#004fff]">{translations.infos}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            {translations.contactMe}
          </p>

          <SocialContacts useDarkIcons={true} />
        </div>
      </div>
    </section>
  );
}
