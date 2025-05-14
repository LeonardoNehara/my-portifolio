import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação do envio (substitua por uma integração real)
    if (formData.name && formData.email && formData.phone && formData.message) {
      setSubmitted(true);
      setError(false);
      console.log("Dados enviados:", formData);
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <section className="py-5">
      <div className="container px-5">
        <div className="bg-light rounded-4 py-5 px-4 px-md-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
              <i className="bi bi-envelope"></i>
            </div>
            <h1 className="fw-bolder">Entre em contato</h1>
            <p className="lead fw-normal text-muted mb-0">Vamos trabalhar juntos!</p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name">Nome completo</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Endereço de e-mail</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="phone">Número de telefone</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: "10rem" }}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="message">Mensagem</label>
                </div>

                {/* Mensagens de sucesso/erro */}
                {submitted && (
                  <div className="text-center mb-3 fw-bolder text-success">
                    Envio do formulário realizado com sucesso!
                  </div>
                )}
                {error && (
                  <div className="text-center text-danger mb-3">
                    Por favor, preencha todos os campos corretamente.
                  </div>
                )}

                <div className="d-grid">
                  <button className="btn btn-dark btn-lg" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
