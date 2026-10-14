import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import error from "../../assets/404.webp";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const handleFocus = (event) => {
    event.target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.errorImg} src={error} alt="" />
        <p>Página não encontrada</p>
        <a
          href="#"
          tabIndex={0}
          className="btn faleconosco bold paragraph bold"
          onClick={() => navigate("/")}
          onFocus={handleFocus}
        >
          Voltar a página inicial
        </a>
      </div>
    </main>
  );
};
