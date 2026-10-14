import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Numbers } from "../Numbers";
import fluxo from "../../src/assets/remuneracao/fluxo.svg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export const NumbersRemuneracao = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 1150);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // trava TOTAL do scroll (essencial no mobile)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [open]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <section className={styles.sectionServices}>
      <div className="container">
        <div className={styles.medialSection}>
          {/* TÍTULO */}
          <div className={styles.fluxoTitle}>
            <h2>Como funciona o módulo de Remuneração</h2>
            <p>
              Um processo estruturado para analisar, validar e aplicar políticas
              de remuneração de forma transparente e eficiente.
            </p>
          </div>

          {/* FLUXO + ÂNCORA DE ABRIR MODAL */}
          <div className={styles.fluxoContainer}>
            <a
              href="#"
              className={styles.expandBtn}
              aria-label="Ampliar fluxograma"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              ⤢
            </a>

            <object
              type="image/svg+xml"
              data={fluxo}
              className={styles.fluxoSVG}
            />
          </div>

          {/* MODAL */}
          {open && (
            <div className={styles.modalOverlay} onClick={() => setOpen(false)}>
              <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
              >
                {/* FECHAR */}
                <a
                  href="#"
                  className={styles.closeBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                >
                  ✕
                </a>

                <TransformWrapper
                  initialScale={1}
                  minScale={1}
                  maxScale={4}
                  centerOnInit
                  wheel={{ step: 0.15 }}
                  pan={{ disabled: false }}
                  pinch={{ disabled: false }}
                  doubleClick={{ disabled: true }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <>
                      {/* ZOOM WEB (ÂNCORAS) */}
                      {!isMobile && (
                        <div className={styles.zoomControls}>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              zoomIn();
                            }}
                          >
                            ＋
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              zoomOut();
                            }}
                          >
                            －
                          </a>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              resetTransform();
                            }}
                          >
                            ⤾
                          </a>
                        </div>
                      )}

                      <div className={styles.zoomWrapper}>
                        <TransformComponent
                          wrapperStyle={{
                            width: "100%",
                            height: "100%",
                            touchAction: "none",
                          }}
                          contentStyle={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <object
                            type="image/svg+xml"
                            data={fluxo}
                            className={styles.fluxoSVGModal}
                          />
                        </TransformComponent>
                      </div>
                    </>
                  )}
                </TransformWrapper>
              </div>
            </div>
          )}

          {/* NUMBERS (MANTIDOS) */}
          <div className={styles.informativeCards}>
            <div className={styles.cards}>
              <div className={styles.textInput}>
                <h2 className="title one bold d-flex">
                  +{" "}
                  <Numbers
                    number={40}
                    delayAnimation={50}
                    delay={0.1}
                    text="%"
                  />
                </h2>
                <div className={styles.simplifiqueAsRotinas}>
                  Agilidade nas Aprovações
                </div>
              </div>
            </div>

            <div className={styles.cards}>
              <div className={styles.textInput}>
                <h2 className="title one bold d-flex">
                  <Numbers
                    number={100}
                    delayAnimation={50}
                    delay={0.1}
                    text="%"
                  />
                </h2>
                <div className={styles.simplifiqueAsRotinas}>
                  Conformidade com o Budget
                </div>
              </div>
            </div>

            <div className={styles.cards}>
              <div className={styles.textInput}>
                <h2 className="title one bold">Zero</h2>
                <div className={styles.simplifiqueAsRotinas}>
                  Dependência de Excel
                </div>
              </div>
            </div>
          </div>
          {/* FIM NUMBERS */}
        </div>
      </div>
    </section>
  );
};
