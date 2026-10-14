import styles from "./style.module.scss";

import cliente02 from "../../src/assets/logos/SESMT/cliente-02.png";
import cliente03 from "../../src/assets/logos/SESMT/cliente-03.png";
import cliente07 from "../../src/assets/logos/SESMT/cliente-07.png";
import cliente09 from "../../src/assets/logos/SESMT/cliente-09.png";
import cliente12 from "../../src/assets/logos/SESMT/cliente-12.png";
import cliente14 from "../../src/assets/logos/SESMT/cliente-14.png";
import cliente16 from "../../src/assets/logos/SESMT/cliente-16.png";
import cliente06 from "../../src/assets/logos/SESMT/cliente-06.png";
import cliente26 from "../../src/assets/logos/SESMT/cliente-26.png";
import cliente21 from "../../src/assets/logos/SESMT/cliente-21.webp";

export const CarrosselLogosSESMT = () => {
  const empresas = [
    cliente02,
    cliente03,
    cliente07,
    cliente06,
    cliente12,
    cliente14,
    cliente16,
    cliente09,
    cliente21,
    cliente26,
  ];

  return (
    <section className={`${styles.carrosselWrapper} `}>
      <div className={`${styles.carrossel} fadeBottomSlow container`}>
        <h2 className={`${styles.title} title three secondary text-center`}>Clientes</h2>
        <div className={styles.logosContainer}>
          {empresas.map((logoSrc, index) => (
            <img
              key={index}
              src={logoSrc}
              alt={`Logo da empresa ${index}`}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
