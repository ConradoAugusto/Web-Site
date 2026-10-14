import styles from "./style.module.scss";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import hero_bcg from "../../src/assets/hero_bcg.png";
import logo from "../../src/assets/logo1.webp";
import Offcanvas from "../../src/assets/Offcanvas.webp";
import { Link } from "react-router-dom";

export const OffCanvasContato = () => {
  return (
    <div
      className={`${styles.offcanvas} offcanvas offcanvas-end`}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <img className={styles.imgOffcanvas} src={Offcanvas} alt="" />

      <div className={styles.headerOffcanvas}>
        <div className={styles.logoOffcanvas}>
          <img src={logo} alt="logo acme" />
        </div>
        <a
          href="javascript:void(0)"
          tabIndex={0}
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          X
        </a>
      </div>
      <div className={`${styles.offcanvasBody} offcanvas-body`}>
        <div className={styles.contato}>
          <h2 className="paragraph acordion primary">Contatos</h2>
          <p className="bold">Cidade A - UF</p>
          <p className="secondary">
            <IconMapPin stroke={2} size={20} className="primary" />{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rua Exemplo, 100 – Sala 1 - Bairro
              Centro
            </a>
          </p>
          <p className="bold">Cidade B - UF</p>
          <p className="secondary">
            <IconMapPin stroke={2} size={20} className="primary" />{" "}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rua Exemplo, 200 - Centro
            </a>
          </p>
          <p className="secondary">
            <IconMail stroke={2} size={20} className="primary" />{" "}
            <a href="mailto:contato@example.com">contato@example.com</a>
          </p>
        </div>
        <div className={styles.cta}>
          <ButtonPrimary
            className={`${styles.btn} paragraph bold linkNavbar noWrap`}
            content={"Fale com consultor"}
          />
        </div>
        <div className={styles.redesSociais}>
          <Link
            to={"https://www.linkedin.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin stroke={2} />
          </Link>
          <Link
            to={"https://www.instagram.com/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram stroke={2} />
          </Link>
        </div>
      </div>
      <img className={styles.imgOffcanvasLine} src={hero_bcg} alt="" />
    </div>
  );
};
