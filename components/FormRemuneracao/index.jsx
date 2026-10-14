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

const FormRemuneracao = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const utmTerm = params.get("utm_term") || params.get("keyword");

    const trackingData = [
      utmSource && `utm_source: ${utmSource}`,
      utmMedium && `utm_medium: ${utmMedium}`,
      utmCampaign && `utm_campaign: ${utmCampaign}`,
      utmTerm && `utm_term: ${utmTerm}`,
    ]
      .filter(Boolean)
      .join(" | ");

    if (trackingData) {
      setFormData((prev) => ({
        ...prev,
        "field[15]": trackingData,
      }));
    }
  }, []);

  const formRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    empresa: "",
    email: "",
    phone: "",
    "field[14]": "",
    subject: "Remuneração",
    "field[15]": "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/intlTelInput.min.js";
    script.async = true;
    document.body.appendChild(script);

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href =
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/css/intlTelInput.css";
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      page_url: window.location.href,
    }));
  }, []);

  const handleEmailBlur = () => {
    if (formData.email && validateEmail(formData.email)) {
      Swal.fire({
        title: "Atenção!",
        html: `
        <p>Por favor, insira um e-mail corporativo.</p>
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
          const customOk = Swal.getHtmlContainer().querySelector("#custom-ok");
          customOk.addEventListener("click", () => {
            Swal.close();
          });
        },
      });
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
        scrollbarPadding: false,
        didOpen: () => {
          document.body.style.overflow = "hidden";

          const customOk = Swal.getHtmlContainer().querySelector("#custom-ok");
          if (customOk) {
            customOk.addEventListener("click", (event) => {
              event.preventDefault();
              Swal.close();
            });
          }
        },
        willClose: () => {
          document.body.style.overflow = "";
        },
      });
    };

    // Valida Nome
    if (!formData.fullname.trim()) {
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

    if (!formData["field[14]"]) {
      showAlert("Por favor, selecione a quantidade de funcionários.");
      return;
    }

    try {
      await createLead({
        nome: formData.fullname,
        empresa: formData.empresa,
        email: formData.email,
        telefone: formData.phone,
        interesse: `Formulário: Remuneração | ${formData["field[14]"]}`,
      });

      navigate("/agradecimento");
    } catch (error) {
      showAlert("Não foi possível enviar o formulário. Tente novamente.");
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      page_url: window.location.href,
    }));
  }, []);

  return (
    <>
      <form
        className={`${styles.formRemu} form _dark mt-4 mb-4`}
        ref={formRef}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className={styles.formContainer}>
          <div className="d-flex justify-content-center">
            <h2 className={styles.title}>
              Pronto para profissionalizar sua Gestão de Remuneração?
            </h2>
          </div>

          <div>
            <div className="d-flex justify-content-center">
              <p className={styles.subTitle}>
                Agende uma conversa com nossos especialistas. Vamos mostrar como
                o módulo de Remuneração da Acme pode ser parametrizado para a
                realidade da sua empresa.
              </p>
            </div>
          </div>

          <div className="w-100 ">
            <label
              htmlFor="fullname"
              className="form-label paragraph bold text-16px "
            >
              Nome<span className="field-required">*</span>
            </label>
            <div>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Digite seu nome"
                required
                className="form-control"
                value={formData.fullname}
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
              />
            </div>
          </div>

          <div className="w-100 ">
            <label
              htmlFor="empresa"
              className="form-label paragraph bold text-16px "
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
                onChange={(e) =>
                  setFormData({ ...formData, empresa: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="form-label paragraph bold text-16px"
            >
              Email<span className="field-required">*</span>
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={handleEmailBlur}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="form-label paragraph bold text-16px "
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
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="field[14]"
              className="form-label paragraph bold text-16px"
            >
              Quantidade de funcionários
              <span className="field-required">*</span>
            </label>

            <div className="_field-wrapper">
              <select
                name="field[14]"
                id="field[14]"
                className="form-select"
                required
                value={formData["field[14]"]}
                onChange={(e) =>
                  setFormData({ ...formData, "field[14]": e.target.value })
                }
              >
                <option value="" hidden>
                  Selecione
                </option>
                <option value="1-50">1 a 50</option>
                <option value="51-100">51 a 100</option>
                <option value="101-200">101 a 200</option>
                <option value="201-300">201 a 300</option>
                <option value="301-400">301 a 400</option>
                <option value="401-500">401 a 500</option>
                <option value="Mais de 500">Mais de 500</option>
              </select>
            </div>
          </div>

          <input
            type="hidden"
            id="field[11]"
            name="field[11]"
            value="Remuneração"
          />

          <textarea
            id="field[15]"
            name="field[15]"
            value={formData["field[15]"]}
            hidden
            readOnly
          />

          <div className="_button-wrapper d-flex flex-column w-100 align-items-center _full_width d-flex justify-content-center">
            <a
              role="button"
              onClick={handleSubmit}
              className={`${styles.ctaActive} _submit  faleconosco`}
              type="submit"
            >
              Quero uma Demonstração
            </a>
            <p className="paragraph small mt-3">
              Não pedimos cartão de crédito. Demonstração sem compromisso.
            </p>
          </div>

          <div className="_clear-element"></div>
        </div>

        <div className="form-thank-you" style={{ display: "none" }}></div>
      </form>
    </>
  );
};

export default FormRemuneracao;
