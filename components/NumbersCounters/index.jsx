import styles from "./style.module.scss";
import { TagSection } from "../buttons/TagSection";
import { useEffect, useState } from "react";
import { Numbers } from "../Numbers";

export const NumbersCounters = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={styles.sectionServices} style={{ marginTop: "-37px" }}>
      <div className="container mt-88 fadeTopSlow two" style={{ gap: "88px" }}>
        <div
          className="d-flex flex-column"
          style={{ marginBottom: "64px", gap: "82px" }}
        >
          {isMobile ? (
            <>
              <div className={styles.medialSection}>
                <div className={styles.titleMiddleSection}>
                  <div className={styles.solutions}>
                    <TagSection content={"NÚMEROS"} />
                    <h2 className="title three text-center lineHeight secondary w-80">
                      Nossos números refletem a solidez e a qualidade dos nossos
                      serviços
                    </h2>
                  </div>
                </div>
                <div className={styles.informativeCards}>
                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:200;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium">
                        <Numbers
                          number={138}
                          delayAnimation={50}
                          delay={0.1}
                          text={"Clientes"}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Confiam na expertise da Acme para alcançar o máximo
                        desempenho.
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:400;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium d-flex">
                        +{" "}
                        <Numbers
                          number={12.131}
                          delayAnimation={50}
                          text={"Vidas"}
                          delay={0.1}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Processadas, garantindo a eficiência e a segurança das
                        informações dos nossos clientes.
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:600;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium">
                        {" "}
                        <Numbers
                          number={667}
                          delayAnimation={50}
                          delay={0.1}
                          text={"Projetos"}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Concluídos com sucesso, consolidando nossa posição como
                        referência em soluções de gestão empresarial.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.medialSection}>
                <div className={styles.titleMiddleSection}>
                  <div className={styles.solutions}>
                    <span className="paragraph tag">// NÚMEROS</span>
                    <h2 className="title three text-center lineHeight secondary w-80">
                      Nossos números refletem a solidez e a qualidade dos nossos
                      serviços
                    </h2>
                  </div>
                </div>
                <div className={styles.informativeCards}>
                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:100;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium">
                        <Numbers
                          number={200}
                          delayAnimation={50}
                          delay={0.1}
                          text={"Clientes"}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Confiam na expertise da Acme para alcançar o máximo
                        desempenho.
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:400;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium d-flex">
                        +{" "}
                        <Numbers
                          number={20000}
                          delayAnimation={50}
                          text={"Vidas"}
                          delay={0.1}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Processadas, garantindo a eficiência e a segurança das
                        informações dos nossos clientes.
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${styles.cards} uk-animation-slide-bottom-medium`}
                    uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay:900;"
                  >
                    <div className={styles.textInput}>
                      <h2 className="title three medium">
                        {" "}
                        <Numbers
                          number={800}
                          delayAnimation={50}
                          delay={0.1}
                          text={"Projetos"}
                        />{" "}
                      </h2>
                      <div className={styles.simplifiqueAsRotinas}>
                        Concluídos com sucesso, consolidando nossa posição como
                        referência em soluções de gestão empresarial.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
