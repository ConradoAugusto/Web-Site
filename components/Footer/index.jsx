import styles from "./style.module.scss";
import LogoEmpresa from "../../src/assets/logo1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 200,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className={styles.footer}>
      <div
        className={`${styles.container} container form-group col-md-12 uk-animation-slide-left-medium`}
        data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 400;"
      >
        <div className={styles.content}>
          <div className={styles.infos}>
            <div className={styles.empresa}>
              <img onClick={() => navigate("/")} src={LogoEmpresa} alt="" />
              <p className="paragraph gray-7">
                “Nosso compromisso é com a excelência e a responsabilidade
                social em todas as nossas iniciativas.”
              </p>
            </div>
            <div className={styles.redesSociais}>
              <div className={styles.redesSociais}>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin stroke={2} color="#82848e" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram stroke={2} color="#82848e" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.navbar}>
            <div className={styles.itemOne}>
              <span className="paragraph bold gray-8">Produtos</span>
              <Link to={"/portalRh"} className="paragraph medium gray-8">
                Portal RH
              </Link>
              <Link
                to={"/controle-de-ponto"}
                className="paragraph medium gray-8"
              >
                App Controle de Ponto
              </Link>
            </div>
            <div className={styles.itemTwo}>
              <span className="paragraph bold gray-8">Recurso</span>
              <Link to={"/consultoria-erp"} className="paragraph medium gray-8">
                Consultoria em ERP
              </Link>
              <Link
                to={"/suporte-operacional"}
                className="paragraph medium gray-8"
              >
                Suporte Operacional
              </Link>
              <Link to={"/sst"} className="paragraph medium gray-8">
                SESMT
              </Link>
              <Link
                to={"/bpo-folha-de-pagamento"}
                className="paragraph medium gray-8"
              >
                BPO
              </Link>
              <Link to={"/body-shop"} className="paragraph medium gray-8">
                Body Shop
              </Link>
            </div>
            <div className={styles.itemThree}>
              <span className="paragraph bold gray-8">Empresa</span>
              <Link to="/sobre" className="paragraph medium gray-8">
                Sobre nós
              </Link>
              <Link
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="paragraph medium gray-8"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-100" />
        <div className={styles.copyrigh}>
          <div className={styles.contentCopyrigh}>
            <Link to={"/legal/termos-e-condicoes"} className="gray-8">
              Termos e condições
            </Link>
            <Link to={"/legal/politicas-de-privacidade"} className="gray-8">
              Politica de privacidade
            </Link>
          </div>
          <p className="gray-8">Copyright 2024 Acme</p>
        </div>
      </div>
    </section>
  );
};
