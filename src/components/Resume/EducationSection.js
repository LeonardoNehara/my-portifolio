import EducationCard from './EducationCard';

const educationList = [
  {
    date: '2022 - 2024',
    school: 'Faculdade Alfa Umuarama',
    location: 'Umuarama, PR',
    degree: "Tecnólogo",
    area: 'Sistemas para Internet',
    description: 'O Tecnólogo em Sistemas para internet poderá atuar como Front-end Developer Back-end Developer , Desenvolvedor Mobile, Desenvolvedor de Jogos para Internet e Gestor ou Desenvolvedor de Comércio Eletrônico, além de poder cuidar da Manutenção, Atualização e Segurança de Sistemas Web.'
  },
  {
    date: '2018 - 2021',
    school: 'UNIPAR',
    location: 'Umuarama, PR',
    degree: 'Bacharel',
    area: 'Administração',
    description: 'Com foco na administração estratégica de pequenas à grandes empresas, o curso de Administração da Unipar oportuna aos acadêmicos o contato com diversas áreas desta ciência que busca direções assertivas para os negócios.'
  }
];

const EducationSection = () => (
  <section>
    <h2 className="text-secondary fw-bolder mb-4">Formação</h2>
    {educationList.map((edu, i) => (
      <EducationCard key={i} {...edu} />
    ))}
  </section>
);

export default EducationSection;
