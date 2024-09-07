import React, { useState } from "react";
import { FooterRodape } from "../styled";

export default function Rodape() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    motivo: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FooterRodape>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Conheça os nossos Diretores e CEOs</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/murilocordeirof/" target="_blank" rel="noreferrer">
                Ceo de Tecnologia: Murilo Cordeiro
              </a>
              <p>Especialista em inovação tecnológica, lidera a equipe com visão estratégica de futuro.</p>
              
            </li>

            <li>
              <a href="https://www.linkedin.com/in/ana-laura-torres-loureiro-b85ba1298/" target="_blank" rel="noreferrer">
                Ceo de Marketing e Relações Externas: Ana Laura Loureiro
              </a>
              <p>Responsável por conectar a empresa ao mercado global, com uma abordagem inovadora em marketing.</p>
              
            </li>

            <li>
              <a href="https://www.linkedin.com/in/vitor-augusto-4bb6a72b7/" target="_blank" rel="noreferrer">
                Diretor Geral de Tecnologia e Supervisor Geral: Vitor Augusto
              </a>
              <p>Coordena a equipe de desenvolvimento tecnológico, supervisionando grandes projetos estratégicos.</p>
              
            </li>

            <li>
              <a href="https://www.linkedin.com/in/geronimo-augusto-99643a2b8/" target="_blank" rel="noreferrer">
                Diretor Geral de Logística e Operações: Gerônimo Augusto
              </a>
              <p>Especialista em logística eficiente e operações, garantindo que todos os processos sejam otimizados.</p>
              <div className="logo-area">[Logo Aqui]</div>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
            <textarea
              name="motivo"
              placeholder="Motivo do contato"
              value={formData.motivo}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Olympia - @2024 - Todos os direitos reservados</p>
        <p>Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 00000-000 <br />
          <strong>Telefone:</strong> (11) 98765-4321</p>
      </div>
    </FooterRodape>
  );
}
