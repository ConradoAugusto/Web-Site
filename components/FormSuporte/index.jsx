import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Swal from "sweetalert2";
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

const FormSuporte = () => {
  const formRefSuport = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    empresa: "",
    email: "",
    phone: "",
    sms_consent: false,
  });

  useEffect(() => {
    // Carregar scripts e estilos intl-tel-input
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

    // Cleanup scripts on unmount if needed (optional)
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

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
    if (!formData.firstname.trim()) {
      showAlert("Por favor, preencha o campo Nome.");
      return;
    }

    if (!formData.empresa.trim()) {
      showAlert("Por favor, preencha o campo Empresa.");
      return;
    }

    // Valida Email (campo vazio)
    if (!formData.email.trim()) {
      showAlert("Por favor, preencha o campo Email.");
      return;
    }

    // Valida Email (domínio inválido)
    if (validateEmail(formData.email.trim())) {
      showAlert("Por favor, insira um e-mail corporativo.");
      return;
    }

    // Valida Telefone
    if (!formData.phone.trim()) {
      showAlert("Por favor, preencha o campo Telefone.");
      return;
    }

    // Valida consentimento sms
    if (!formData.sms_consent) {
      showAlert("Você deve concordar com o consentimento para continuar.");
      return;
    }

    try {
      await createLead({
        nome: formData.firstname,
        empresa: formData.empresa,
        email: formData.email,
        telefone: formData.phone,
        interesse: "Formulário: Suporte Operacional",
      });

      navigate("/agradecimento");
    } catch (error) {
      showAlert("Não foi possível enviar o formulário. Tente novamente.");
    }
  };

  return (
    <form
      className="form _dark"
      ref={formRefSuport}
      noValidate
      onSubmit={handleSubmit}
    >
      <div className={styles.formContainer}>
        <div className="d-flex justify-content-center">
          <h2 className="title five lineHeight">
            Teste um mês <span className="textLight">sem compromisso!</span>
          </h2>
        </div>

        <div>
          <div className="d-flex justify-content-center">
            <h3 className="paragraph formVendas lineHeight">
              Insira suas informações abaixo para conversar com um consultor no
              WhatsApp.
            </h3>
          </div>
        </div>

        <div className="w-100 ">
          <label
            htmlFor="firstname"
            className="form-label paragraph text-16px bold"
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
            className="form-label paragraph text-16px bold"
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
            className="form-label paragraph text-16px bold"
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
              onChange={handleChange}
              onBlur={handleEmailBlur}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="form-label paragraph text-16px bold"
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
            <div className="paragraph formVendas">
              Ao enviar este formulário, você concorda em receber comunicações
              de marketing da Acme por e-mail, telefone ou outros meios
              informados. O consentimento não é uma condição para contratação de
              serviços. Você pode cancelar o recebimento a qualquer momento.
              Para mais informações, consulte nossa{" "}
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
  );
};

export default FormSuporte;
