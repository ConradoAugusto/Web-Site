import { ButtonPrimary } from "../buttons/ButtonPrimary";
import { TagSection } from "../buttons/TagSection";
import vector from "../../src/assets/consultoria/vector.png";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";

export const AgendeUmaDemo = () => {
  const [padding, setPadding] = useState(
    window.innerWidth < 768 ? "48px 26px" : "50px"
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
      setPadding(window.innerWidth < 768 ? "48px 26px" : "50px");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className={`${styles.sectionConteConosco} fadeTopSlow two
`}
    >
      <div className="container">
        <div
          className="d-flex gap-5 align-items-start"
          style={{
            padding: padding,
            borderRadius: "18px",
            position: "relative",
            background: `linear-gradient(46deg, #118A6B 0%, #272E48 71.47%)`,
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            flexDirection: "column",
          }}
        >
          <img
            className={styles.vectorIcon}
            src={vector}
            alt="vetor de formas circulares"
          />
          <div className={styles.divConteConosco}>
            <div className={styles.agendeUmDemo}>
              <div className="d-flex flex-column " style={{ gap: "16px" }}>
                <h2 className="title four lineHeight text-white">
                  Solicite uma demonstração gratuita!
                </h2>
                <p className="paragraph text-white lineHeight-32 mb-0">
                  Entre em contato agora mesmo para agendar uma demonstração e
                  conhecer todos os benefícios que o nosso módulo pode oferecer!
                </p>
              </div>
            </div>
           <div className={styles.ctaDemo}>
           <ButtonPrimary
                className="faleconosco paragraph bold responsiveContent height-fit-content  text-center"
                href="javascript:void(0)"
                type="button"
                content={"Agendar demonstração"}
              />
           </div>
          </div>
        </div>
      </div>
    </section>
  );
};
