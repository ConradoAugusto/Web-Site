import ContatoBanner from "../../assets/contato-banner.jpg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import RouteWrapper from "../../../components/RouteWrapper";
import Form from "../../../components/Form";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const ContactPage = () => {
  const rota = localStorage.getItem("currentPath");
  return (
    <>
      <RouteWrapper
        title={"Contato"}
        canonical={"https://example.com/contato"}
        description={"Entre em contato conosco"}
      ></RouteWrapper>
      <WhatsAppIcon />
      <section className={styles.sectionForm}>
        <div className={styles.container}>
          <div className={`${styles.portal}`}>
            <img src={ContatoBanner} alt="Portal de gestao Acme" />
          </div>
          <Link className={`${styles.close}`} to={rota}>
            <strong>X</strong>
          </Link>
          <section className={styles.sectionForms}>
            <div id="formHub" className="secondary-bg text-white">
              <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
                <div className={styles.formPadding}>
                  <Form />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
