import { SocialContacts } from "../../SocialContacts/SocialContacts";
import "./HomeSection.css";

export const HomeSection = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  const YEARS_DEVELOPING = CURRENT_YEAR - 2019;
  const YEARS_DEVELOPING_PROFESSIONALLY = CURRENT_YEAR - 2021;
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
              Olá! Eu sou o <span className="text-[#004fff]">João Godinho</span>
              , Desenvolvedor de Software.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white">
              Desenvolvedor Web apaixonado por código há mais de{" "}
              {YEARS_DEVELOPING} anos, sendo {YEARS_DEVELOPING_PROFESSIONALLY}{" "}
              deles profissionalmente. Atuo em todo o espectro do
              desenvolvimento, do frontend ao backend, além de automatizar
              relatórios e tarefas repetitivas com scripts. Minha missão é
              solucionar problemas por meio do software.
            </p>

            <SocialContacts />
          </div>
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
