import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { createLead } from "../../src/api";

const freeEmailDomains = [
  "gmail.com",
  "gmail.com.br",
  "yahoo.com",
  "yahoo.com.br",
  "hotmail.com",
  "hotmail.com.br",
  "outlook.com",
  "outlook.com.br",
  "live.com",
  "live.com.br",
  "aol.com",
  "aol.com.br",
  "icloud.com",
  "icloud.com.br",
  "zoho.com",
  "zoho.com.br",
  "mail.com",
  "mail.com.br",
  "oul.com",
  "oul.com.br",
  "bol.com.br",
  "r7.com",
  "r7.com.br",
  "ymail.com",
];

function validateEmail(email) {
  if (!email.includes("@")) return false;
  const domain = email.split("@")[1].toLowerCase();
  return freeEmailDomains.includes(domain);
}

const FormSESMT = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    empresa: "",
    email: "",
    phone: "",
    "field[12]": "",
    sms_consent: false,
    page_url: "SESMT",
    "field[11]": "",
  });

  const [showTextarea, setShowTextarea] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      if (value.startsWith("+55")) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: "+55" + value.replace(/\D/g, ""),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  // Exibe o campo "Descrição" quando a solução selecionada for "Outro"
  const handleSolutionChange = (e) => {
    const { value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      "field[12]": value,
    }));

    if (value === "Outro") {
      setShowTextarea(true); // Exibe o campo de descrição
    } else {
      setShowTextarea(false); // Oculta o campo de descrição
      setFormData((prevData) => ({ ...prevData, "field[11]": "" })); // Limpa a descrição
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const showAlert = (message) => {
      Swal.fire({
        title: "Atenção!",
        html: `
      <p>${message}</p>
      <div style="display: flex; justify-content: center; align-items: center; margin-top: 20px;">
        <a href="javascript:void(0)" 
           type="button" 
           id="custom-ok" 
           class="faleconosco d-flex align-items-center justify-content-center" 
           style="cursor: pointer; padding: 8px 16px; border-radius: 4px; background-color: #118A6B; color: white; text-decoration: none;">
          OK
        </a>
      </div>
    `,
        showConfirmButton: false,
        showCancelButton: false,
        didOpen: () => {
          // Aqui pegamos o botão customizado "OK" e adicionamos o evento de fechamento
          const customOk = Swal.getHtmlContainer().querySelector("#custom-ok");
          customOk.addEventListener("click", () => {
            Swal.close(); // Fecha o alerta quando o botão é clicado
          });
        },
      });
    };

    // Validação Nome
    if (!formData.firstname.trim()) {
      showAlert("Por favor, preencha o campo Nome.");
      return;
    }

    if (!formData.empresa.trim()) {
      showAlert("Por favor, preencha o campo Empresa.");
      return;
    }

    if (!formData.email.trim()) {
      showAlert("Por favor, preencha o campo Email.");
      return;
    }

    if (validateEmail(formData.email.trim())) {
      showAlert("Por favor, insira um e-mail corporativo.");
      return;
    }

    if (!formData.phone.trim()) {
      showAlert("Por favor, preencha o campo Telefone.");
      return;
    }

    if (!formData["field[12]"]) {
      showAlert("Por favor, selecione uma opção.");
      return;
    }

    if (formData["field[12]"] === "Outro" && !formData["field[11]"].trim()) {
      showAlert("Por favor, descreva a solução no campo 'Outro'.");
      return;
    }

    if (!formData.sms_consent) {
      showAlert("Você deve concordar com o consentimento para continuar.");
      return;
    }

    const solucao =
      formData["field[12]"] === "Outro"
        ? formData["field[11]"]
        : formData["field[12]"];

    try {
      await createLead({
        nome: formData.firstname,
        empresa: formData.empresa,
        email: formData.email,
        telefone: formData.phone,
        interesse: `Formulário: SESMT | ${solucao}`,
      });

      navigate("/agradecimento");
    } catch (error) {
      showAlert("Não foi possível enviar o formulário. Tente novamente.");
    }
  };

  return (
    <>
      <form
        className="form _dark mt-4 mb-4"
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={styles.formContainer}>
          <div className="d-flex justify-content-center">
            <h2 className="text-center title one">
              <span className="text-white">
                Automatize processos e tenha mais tempo para
              </span>{" "}
              <span className={`${styles.greenColor}`}>
                focar no que realmente importa.
              </span>
            </h2>
          </div>

          <div>
            <div className="d-flex flex-column justify-content-start">
              <p className="paragraph text-20px text-white text-center">
                Identifique as vulnerabilidades do seu negócio antes que se
                tornem um problema. Descubra como podemos ajudá-lo a fortalecer
                sua empresa e otimizar sua gestão.
              </p>
            </div>
          </div>

          <div className="w-100 ">
            <label
              htmlFor="firstname"
              className="form-label paragraph text-16px text-white"
            >
              Nome<span className="field-required">*</span>
            </label>
            <div>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Digite seu primeiro nome"
                required
                className="form-control"
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-100 ">
            <label
              htmlFor="empresa"
              className="form-label paragraph text-16px text-white"
            >
              Empresa<span className="field-required">*</span>
            </label>
            <div>
              <input
                type="text"
                id="empresa"
                name="empresa"
                placeholder="Digite o nome da empresa"
                required
                className="form-control"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="form-label paragraph text-16px text-white"
            >
              Email Corporativo<span className="field-required">*</span>
            </label>
            <div className="_field-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Digite seu email corporativo"
                required
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="form-label paragraph text-16px text-white"
            >
              Telefone<span className="field-required">*</span>
            </label>
            <div className="_field-wrapper">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+55"
                required
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="_full_width">
            <label
              htmlFor="field9"
              className="form-label paragraph text-16px text-white"
            >
              Nossas soluções*
            </label>
            <div className="_field-wrapper">
              <select
                name="field[12]"
                id="field[12]"
                className="form-select"
                required
                value={formData["field[12]"]}
                onChange={handleSolutionChange}
              >
                <option hidden>Selecione</option>
                <option value="Auditoria">Auditoria</option>
                <option value="PCMSO">PCMSO</option>
                <option value="PPRA/PGR">PPRA/PGR</option>
                <option value="LTCAT">LTCAT</option>
                <option value="Treinamentos">Treinamentos</option>
                <option value="Laudos Técnicos">Laudos Técnicos</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
          </div>

          {showTextarea && (
            <div>
              <label
                htmlFor="descricaoOutro"
                className="form-label paragraph text-16px text-white"
              >
                Descrição da solução que está procurando
              </label>
              <textarea
                id="descricaoOutro"
                name="field[11]"
                placeholder="Descreva a solução"
                required
                className="form-control"
                value={formData["field[11]"]}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="sms_consent"
              className="d-flex align-items-start gap-2"
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="sms_consent"
                name="sms_consent"
                required
                checked={formData.sms_consent}
                onChange={handleChange}
              />
              <div className="paragraph formVendas text-white">
                Ao enviar este formulário, você concorda em receber comunicações
                de marketing da Acme por e-mail, telefone ou outros meios
                informados. O consentimento não é uma condição para contratação
                de serviços. Você pode cancelar o recebimento a qualquer
                momento. Para mais informações, consulte nossa{" "}
                <Link to="/legal/politicas-de-privacidade">
                  <span className={styles.greenColor}>
                    Política de Privacidade.
                  </span>
                </Link>
              </div>
            </label>
          </div>

          <div className="_button-wrapper _full_width d-flex justify-content-end">
            <a
              role="button"
              onClick={handleSubmit}
              className={`${styles.ctaActive} _submit  faleconosco`}
              type="submit"
            >
              Enviar
            </a>
          </div>

          <div className="_clear-element"></div>
        </div>

        <div className="form-thank-you" style={{ display: "none" }}></div>
      </form>
    </>
  );
};

export default FormSESMT;
