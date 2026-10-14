import { ButtonPrimary } from "../buttons/ButtonPrimary";
import { TagSection } from "../buttons/TagSection";
import vector from "../../src/assets/consultoria/vector.png";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import arrow from "../../src/assets/arrow.svg";

export const ConteConosco = () => {
  const [padding, setPadding] = useState(
    window.innerWidth < 768 ? "48px 26px" : "50px"
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
      setPadding(window.innerWidth < 768 ? "48px" : "48px");
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
            <div>
              <TagSection className={"text-white"} content={"SOLUÇÕES"} />
              <div className="d-flex flex-column " style={{ gap: "16px" }}>
                <h2 className="title four lineHeight text-white">
                  Conte com a Acme para
                </h2>
                <div className="d-flex flex-column gap-3">
                  <div className="paragraph text-20px d-flex gap-4 align-items-start ">
                    <img
                      src={arrow}
                      alt="icone de seta"
                      style={{ filter: "brightness(100)" }}
                    />
                    <p className="paragraph text-white lineHeight-32 mb-0">
                      Implementação e customização de sistemas de gestão
                      empresarial.
                    </p>
                  </div>
                  <div className="paragraph text-20px d-flex gap-4 align-items-start ">
                    <img
                      src={arrow}
                      alt="icone de seta"
                      style={{ filter: "brightness(100)" }}
                    />
                    <p className="paragraph text-white lineHeight-32 mb-0">
                      Suporte técnico especializado para solucionar qualquer
                      dúvida ou problema.
                    </p>
                  </div>
                  <div className="paragraph text-20px d-flex gap-4 align-items-start ">
                    <img
                      src={arrow}
                      alt="icone de seta"
                      style={{ filter: "brightness(100)" }}
                    />
                    <p className="paragraph text-white lineHeight-32 mb-0">
                      Consultoria estratégica para otimizar suas plataformas de
                      gestão.
                    </p>
                  </div>
                  <div className="paragraph text-20px d-flex gap-4 align-items-start ">
                    <img
                      src={arrow}
                      alt="icone de seta"
                      style={{ filter: "brightness(100)" }}
                    />
                    <p className="paragraph text-white lineHeight-32 mb-0">
                      Capacitação da equipe em ferramentas de gestão.
                    </p>
                  </div>
                  <div className="paragraph text-20px d-flex gap-4 align-items-start ">
                    <img
                      src={arrow}
                      alt="icone de seta"
                      style={{ filter: "brightness(100)" }}
                    />
                    <p className="paragraph text-white lineHeight-32 mb-0">
                      BPO em Folha de pagamento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex  w-100">
            <div className={styles.cta}>
              <p
                className={`${styles.ctaText} paragraph text-20px lineHeight-32 text-white w-80 medium`}
              >
                Entre em contato agora e descubra como podemos ajudar sua
                empresa a alcançar todo o seu potencial.
              </p>
              <ButtonPrimary
                className="faleconosco paragraph bold responsiveContent height-fit-content  text-center"
                href="javascript:void(0)"
                type="button"
                content={"Fale com consultor"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
