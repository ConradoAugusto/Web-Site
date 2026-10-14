import styles from "./style.module.scss";
import error from "../../assets/mascote.gif";
import { Link } from "react-router-dom";

export const EnvioDoForm = () => {
  const rota = localStorage.getItem("currentPath");
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.errorImg} src={error} alt="" />
        <h1 className="title five text-center">
          Obrigado por enviar suas informações.
        </h1>
        <p className="paragraph inputText text-center">
          Um consultor entrará em contato o mais breve possível.
        </p>
        <Link to={rota}>
          <a className="btn faleconosco" href="javascript:void(0)">OK</a>
        </Link>
      </div>
    </main>
  );
};
