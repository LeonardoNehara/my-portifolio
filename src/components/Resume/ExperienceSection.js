import ExperienceCard from './ExperienceCard';
import curriculoPDF from '../../assets/curriculo.pdf';

const experiences = [
  {
    date: '2023 - 2024',
    title: 'Analista de sistemas',
    company: 'Resulta Soluções',
    location: 'Umuarama, PR',
    description: 'Responsável por entender as necessidades da empresa e transformá-las em soluções tecnológicas.'
  },
  {
    date: '2022 - 2023',
    title: 'Suporte de sistemas',
    company: 'AfaWork',
    location: 'Umuarama, PR',
    description: 'Analisa processos, levanta requisitos com os usuários, propõe melhorias e acompanha o desenvolvimento e a implementação de sistemas'
  }
];

const ExperienceSection = () => (
  <section>
    <div className="d-flex align-items-center justify-content-between mb-4">
      <h2 className="text-primary fw-bolder m-3">Experience</h2>
      <a className="btn btn-primary px-4 py-3" href={curriculoPDF} download>
        <div className="d-inline-block bi bi-download me-2"></div>
        Download Resume
      </a>
    </div>
    {experiences.map((exp, i) => (
      <ExperienceCard key={i} {...exp} />
    ))}
  </section>
);

export default ExperienceSection;
