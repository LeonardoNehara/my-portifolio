import React from 'react';
import '../styles/index.css';
import ProjectCard from '../components/Projects/ProjectCard';
import CallToAction from '../components/Projects/CallToAction';
import Project1 from '../assets/agendamento_barbearia.png';
import Project2 from '../assets/mafratintas.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Agendamento Barbearia',
      description: 'O sistema de agendamento para barbearia permite que os clientes realizem agendamentos de forma rápida e prática, O projeto foi desenvolvido utilizando PHP no backend e JavaScript, HTML e CSS e Bootstrap no frontend.',
      imageUrl: Project1,
      link:"https://leonardonehara.com/projects"
    },
    {
      title: 'Mafra Tintas',
      description: 'Site moderno e responsivo para uma loja de tintas, com foco na experiência do usuário e na apresentação dos produtos. O projeto inclui  página de produtos, e um layout visualmente atraente que destaca as cores e aplicações dos produtos.',
      imageUrl: Project2,
      link:"https://mafratintas.com"
    },
  ];

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <main className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    link={project.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CallToAction />
    </div>
  );
};

export default Projects;