import { TimelineItem } from "../../TimelineItem/TimelineItem";

const timelineData = [
  {
    id: "pmc-experience",
    date: "jul de 2023 - o momento",
    locationAndJobType: "Houston, Texas, Estados Unidos · Remota",
    title: "Full Stack Engineer",
    companyName: "PMC Group One",
    titleHref: "https://www.pmcgroupone.com/",
    paragraphs: [],
    order: "left-timeline",
  },
  {
    id: "paipe-experience",
    date: "abr de 2023 - jul de 2023",
    locationAndJobType: "Campo Bom, Rio Grande do Sul, Brasil · Remota",
    title: "Back End Developer",
    companyName: "Paipe.co",
    titleHref: "https://paipe.co/",
    paragraphs: [
      'Desenvolvedor Back End na frente conhecida como "operação" ou "fábrica de software", responsável pelo desenvolvimento sob demanda de software para terceiros, incluindo aplicações para controle financeiro utilizadas pela empresa parceira Calçados Beira Rio, uma empresa global com mais de 40 anos de presença, atendendo a uma extensa base de clientes.',
      "- Trabalhar no desenvolvimento de aplicações para controle financeiro utilizados pela empresa parceira Calçados Beira Rio, empresa com presença global, atendendo uma extensa base de clientes e em atividade por mais de 40 anos.",
      "- Contribuir com a equipe realizando pair programming e code reviews regularmente.",
      "- Testar de forma unitária, integrada e end-to-end as aplicações desenvolvidas.",
      "- Refatorar códigos legados de outras aplicações internas da empresa, com o objetivo de melhorar a qualidade e tornar a manutenção do código mais ágil e fácil. Além de antes da refatoração adicionar testes automatizados na aplicação para garantir que o comportamento se mantenha da forma adequada.",
    ],
    order: "right-timeline",
  },
  {
    id: "field-control-tech-lead-experience",
    date: "jul de 2022 - mar de 2023",
    locationAndJobType: "São José do Rio Preto, São Paulo, Brasil · Remota",
    title: "Tech Lead",
    companyName: "Field Control",
    titleHref: "https://fieldcontrol.com.br/",
    paragraphs: [
      "Lider técnico na frente encarregada por desenvolver novas funcionalidades para os principais produtos da empresa e também realizar melhorias técnicas como, por exemplo, performance e qualidade do código.",
      "- Prezar pela previsibilidade dos prazos, qualidade nas entregas e seguir boas práticas do mercado no que diz respeito ao software. Aplicando aos projetos: Design Patterns, Princípios SOLID e melhorias na Arquitetura do software.",
      "- Contribuir com a evolução de colegas de equipe realizando pair programming frequentemente.",
      "- Desenvolver novas funcionalidades que incluem desde o backend até o frontend e até mesmo aplicações móveis.",
      "- Desenvolver funcionalidades para exportação de dados em Excel e PDF que rodam na AWS Lambda, com filas Amazon SQS, garantindo performance, disponibilidade e cobertura de testes unitários e integrados. Utilizadas por clientes como a Europ Assistance Brasil.",
    ],
    order: "left-timeline",
  },
  {
    id: "field-control-fullstack-experience",
    date: "set de 2021 - jul de 2022",
    locationAndJobType: "São José do Rio Preto, São Paulo, Brasil · Remota",
    title: "Fullstack Developer",
    titleHref: "https://fieldcontrol.com.br/",
    companyName: "Field Control",
    paragraphs: [
      "- Receber itens do backlog referentes a novas funcionalidades, entender como solucionar o problema e implementar desde a API que será consumida (servidor), até a interface (frontend).",
      "- Desenvolver relatórios para que os gestores possam analisar os dados da sua empresa referente aos orçamentos gerados e também aos veículos utilizados na empresa. Desde as buscas no SQL até a exibição dos gráficos com filtros no Angular.",
      "- Realizar reviews minuciosos para garantir a qualidade esperada em cada entrega e após isso realizar deploy das alterações realizadas para milhares de clientes no software principal.",
      "- Desenvolver funcionalidades no aplicativo do gestor, aplicação mobile na qual os usuários podem realizar o gerenciamento de suas equipes externas e criar ordens de serviço.",
      "- Testar cada alteração realizada no software de forma unitária e integrada utilizando Jest, além de testar as interfaces de forma end-to-end utilizando Cypress.",
    ],
    order: "left-timeline",
  },
  {
    id: "field-control-internship-experience",
    date: "jun de 2021 - set de 2021",
    locationAndJobType: "São José do Rio Preto, São Paulo, Brasil · Remota",
    title: "Web developer · estágio",
    companyName: "Field Control",
    titleHref: "https://fieldcontrol.com.br/",
    paragraphs: [
      "- Desenvolver o frontend de uma página de relatórios responsiva para milhares de clientes utilizada para a visualização das informações de serviços anteriormente executados por empresas, além de criar estilos apropriados para impressão da página.",
      "- Manutenção de funcionalidades na principal aplicação da empresa, um aplicativo mobile para gestão de equipes externas que realizam ordens de serviços.",
      "- Plataforma web corporativa para milhares de usuários que tem como usuários os gestores das empresas.",
      "- APIs Restful, tanto internas para suprir as demandas anteriores, quanto externas para integração de clientes comos Postos Ipiranga.",
    ],
    order: "left-timeline",
  },
  {
    id: "ifsul-experience",
    date: "jul de 2021 - dez de 2022",
    locationAndJobType: "Bagé, Rio Grande do Sul, Brasil · Híbrida",
    title: "Bolsista de iniciação tecnológica",
    companyName: "IFSUL - Instituto Federal Sul-rio-grandense",
    titleHref: "https://www.ifsul.edu.br/",
    paragraphs: [
      "- Identificar possíveis melhorias no processo educacional do campus e região, propor soluções e desenvolvê-las com qualidade e agilidade na entrega.",
      "- Desenvolver material educacional sobre html, css e fundamentos web. Conteúdo utilizado em aulas para turmas entre o 7° ano do ensino fundamental até o 2° ano do ensino médio.",
      "- Desenvolver uma aplicação sobre os animais da Região Sul do Brasil. Com o objetivo de facilitar as aulas sobre o tema e tornar o conteúdo mais relevante.",
    ],
    order: "right-timeline",
  },
];

export const ExperiencesSection = () => {
  return (
    <section
      id="experiences"
      className="text-black lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-6 bg-[#091a41] text-white"
    >
      <h2 className="text-3xl text-center font-semibold md:mb-6">
        Experiências
      </h2>
      <div className="scroll-container">
        {timelineData.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};
