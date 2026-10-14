import { useState, useEffect, useRef } from "react";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";
import Swal from "sweetalert2";
import { fetchRoleta, updateRoleta } from "../../src/api.js";
import { avisarCtaBlog } from "../../src/blogEngajamento.js";

const WhatsAppForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [whatsData, setWhatsData] = useState({
    firstname: "",
    assunto: "",
  });

  const [comercial, setComercial] = useState("00000000000");

  const formRef = useRef(null);

  const getComercialNumber = async () => {
    try {
      const roleta = await fetchRoleta();
      let valorEnviarPara = roleta[0]["valor"];
      valorEnviarPara = valorEnviarPara === 0 ? 1 : 0;
      await updateRoleta(valorEnviarPara);
      const telefone = valorEnviarPara === 0 ? "00000000000" : "00000000000";
      setComercial(telefone);
    } catch (error) {
      console.error("Erro ao buscar o valor da roleta:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!whatsData.firstname.trim()) {
      showAlert("Por favor, preencha o campo Nome.");
      return;
    }
    if (!whatsData.assunto.trim()) {
      showAlert("Por favor, preencha o campo Assunto.");
      return;
    }
    const message = `Olá, meu nome é ${whatsData.firstname}, e estou entrando em contato por meio do site para solicitar mais informações sobre o seguinte assunto: ${whatsData.assunto}.`;
    const whatsappUrl = `https://wa.me/+55${comercial}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
    // Num artigo do blog, conta como clique no CTA (no resto do site não faz nada).
    avisarCtaBlog(whatsappUrl);
    await getComercialNumber();
  };

  useEffect(() => {
    getComercialNumber();
  }, []);

  // Função de alerta
  const showAlert = (message) => {
    Swal.fire({
      title: "Atenção!",
      html: `<p>${message}</p>`,
      showConfirmButton: false,
      showCancelButton: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWhatsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função que fecha o formulário quando clica fora
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowForm(false); // Fecha o formulário
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Ícone de WhatsApp ou botão de fechar */}
      <a
        href="javascript:void(0)"
        onClick={() => setShowForm(!showForm)}
        className="d-flex align-items-center justify-content-center position-fixed text-white rounded-circle"
        style={iconStyle}
        aria-label={showForm ? "Fechar Formulário" : "Contact us on WhatsApp"}
      >
        {showForm ? (
          <IconX size={30} color="white" /> // Botão de fechar
        ) : (
          <IconBrandWhatsapp size={30} color="white" /> // Ícone de WhatsApp
        )}
      </a>

      {/* Formulário */}
      {showForm && (
        <div ref={formRef} className="chat-form" style={formStyle}>
          <form onSubmit={handleSubmit}>
            <label className="w-100">
              Nome: <span className="text-danger">*</span>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Digite seu nome"
                required
                className="form-control"
                value={whatsData.firstname}
                onChange={handleChange}
              />
            </label>

            <label className="w-100">
              Assunto: <span className="text-danger">*</span>
              <input
                type="text"
                id="assunto"
                name="assunto"
                placeholder="Digite o assunto"
                required
                className="form-control"
                value={whatsData.assunto}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Ir para o WhatsApp</button>
          </form>
        </div>
      )}

      <style jsx>{`
        .d-flex {
          display: flex;
        }
        .align-items-center {
          align-items: center;
        }
        .justify-content-center {
          justify-content: center;
        }
        .position-fixed {
          position: fixed;
        }
        .text-white {
          color: white;
        }
        .rounded-circle {
          border-radius: 50%;
        }
        .chat-form {
          position: fixed;
          bottom: 100px;
          right: 20px;
          background-color: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 300px;
          z-index: 1001;
        }
        .chat-form input {
          width: 100%;
          padding: 10px;
          margin: 5px 0;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .chat-form button {
          width: 100%;
          padding: 10px;
          background-color: #21b88f;
          border: none;
          color: white;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }
        .chat-form button:hover {
          background-color: #128c7e;
        }
      `}</style>
    </div>
  );
};

const iconStyle = {
  bottom: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  zIndex: "1000",
  cursor: "pointer",
  transition: ".4s",
  backgroundColor: "#21b88f",
};

const formStyle = {
  position: "fixed",
  bottom: "100px",
  right: "20px",
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  width: "300px",
  zIndex: "1001",
};

export default WhatsAppForm;
