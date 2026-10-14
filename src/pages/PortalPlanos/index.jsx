import Planos from "../../assets/feira/planos.svg";
import PlanosMb from "../../assets/feira/planosMb.svg";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { useState, useEffect } from "react";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const PortalPlanos = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DefaultTemplate>
      <WhatsAppIcon />
      <img
        className="planos-img"
        src={isMobile ? PlanosMb : Planos}
        alt="Planos"
      />
      <div
        className="d-flex w-100 justify-content-center align-items-center p-5"
        style={{ background: isMobile ? "#CFD4E8" : "#F5F6FA" }}
      >
        <a
          className="faleconosco paragraph bold responsiveContent position-feira text-center"
          href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20planos."
          type="button"
          target="_blank"
        >
          Fale com consultor
        </a>
      </div>
    </DefaultTemplate>
  );
};
