
const ContactForm = () => {
  // Se você quiser manter o formulário funcional, pode reaproveitar formData/useState.
  // No exemplo abaixo eu removi o formulário e deixei apenas os cartões de contato.

  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3" style={{ width: 64, height: 64, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <i className="bi bi-envelope" style={{ fontSize: '1.5rem' }}></i>
            </div>
            <h1 className="fw-bolder">Entre em contato</h1>
          </div>

          {/* cartões de contato */}
          <div className="row gx-5 justify-content-center mb-5">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 72, height: 72, background: '#7c4dff' }}>
                    <i className="bi bi-envelope" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title fw-bold text-white">Email</h5>
                  <a className="card-text text-decoration-none text-purple mt-2" href="mailto:leonardonehara@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#9b59ff' }}>
                    leonardonehara@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 72, height: 72, background: '#7c4dff' }}>
                    <i className="bi bi-github" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title fw-bold text-white">GitHub</h5>
                  <a className="card-text text-decoration-none mt-2" href="https://github.com/LeonardoNehara" target="_blank" rel="noopener noreferrer" style={{ color: '#9b59ff' }}>
                    github.com/LeonardoNehara
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 text-center shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: 72, height: 72, background: '#7c4dff' }}>
                    <i className="bi bi-linkedin" style={{ fontSize: '1.5rem', color: 'white' }}></i>
                  </div>
                  <h5 className="card-title fw-bold text-white">LinkedIn</h5>
                  <a className="card-text text-decoration-none mt-2" href="https://www.linkedin.com/in/leonardo-nehara-6a54221b5/" target="_blank" rel="noopener noreferrer" style={{ color: '#9b59ff' }}>
                    in/leonardo-nehara-6a54221b5/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* caixa de texto tipo CTA abaixo, estilo similar à imagem */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded-3" style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(155,89,255,0.2)', color: '#505050' }}>
                <p className="mb-0 text-center" style={{ lineHeight: 1.6 }}>
                  Estou aberta a novas oportunidades e adoraria ouvir sobre seu projeto. Sinta-se à vontade para entrar em contato!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
