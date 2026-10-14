import styles from "./style.module.scss";
import { ArrowLeftRight } from "lucide-react";

export default function Integracoes() {
  const cardsExtras = [
    "ADP",
    "SAP",
    "Oracle HCM",
    "Outros (Via API)",
  ];

  return (
    <div>
      <div className={styles.diagramContainer}>
        <div className={styles.card}>
          <h3>TOTVS</h3>
          <p>RM & Protheus</p>
        </div>
        <div className={styles.card}>
          <h3>LG</h3>
          <p>Lugar de Gente</p>
        </div>
        <div className={styles.cardCentral}>
          <div className={styles.circle}>
            <h3>API</h3>
            <ArrowLeftRight color="#ffffff" size={32} />
            <p>Acme</p>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <h3>Sênior</h3>
            <p>Sistemas</p>
          </div>
        </div>
        <div>
          <div className={styles.card}>
            <h3>Parceiro</h3>
            <p>Gestão</p>
          </div>
        </div>
      </div>

      <div className="row g-3 justify-content-center mt-4">
        {cardsExtras.map((item, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <div className="border rounded py-3 fw-semibold text-muted bg-white shadow-sm">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
