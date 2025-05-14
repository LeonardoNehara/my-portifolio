import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/index.css'; // Opcional: para customizações adicionais de estilo

const About = () => {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">Sobre mim</span>
              </h2>
              <p className="lead fw-light mb-4">
                Sou desenvolvedor Web Full Stack e ajudo crescer marcas e negócios
              </p>
              <p className="text-muted">
                Transformo ideias em experiências digitais envolventes, conectando pessoas e negócios por meio de soluções que encantam e entregam valor."
              </p>
              <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="https://www.instagram.com/leonardonehara/">
                  <i className="bi bi-instagram"></i>
                </a>
                <a className="text-gradient" href="https://www.linkedin.com/in/leonardo-nehara-6a54221b5/">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="https://github.com/LeonardoNehara">
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;