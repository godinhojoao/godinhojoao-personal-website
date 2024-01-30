import { SocialContacts } from "../../SocialContacts/SocialContacts";

export function ContactSection() {
  return (
    <section id="contacts" className="bg-white">
      <div className="relative isolate items-center justify-center overflow-hidden px-6 py-20 sm:px-16 lg:flex lg:gap-x-20 lg:px-24 lg:py-0 bg-[#fff]">
        <div className="mx-auto flex flex-col text-center lg:py-32  mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            <span className="text-[#004fff]">Informações de Contato</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-black">
            Fique à vontade para entrar em contato comigo por e-mail ou através
            das minhas redes sociais. Estou sempre aberto a conexões e
            colaborações significativas.
          </p>

          <SocialContacts useDarkIcons={true} />
        </div>
      </div>
    </section>
  );
}
