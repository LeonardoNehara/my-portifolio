import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          
          {/* COPYRIGHT */}
          <div className="col-auto">
            <div className="small m-0">
              &copy; {new Date().getFullYear()} Leonardo Ferreira
            </div>
          </div>

          {/* REDES SOCIAIS */}
          <div className="col-auto d-flex align-items-center">
            <a
              href="https://github.com/LeonardoNehara"
              className="text-muted mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-nehara-6a54221b5/"
              className="text-muted mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:leonardonehara@gmail.com"
              className="text-muted mx-2"
            >
              <FaEnvelope size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
