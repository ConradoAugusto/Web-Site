import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

import cliente02 from "../../src/assets/logos/support/cliente-02.png";
import cliente03 from "../../src/assets/logos/support/cliente-03.png";
import cliente07 from "../../src/assets/logos/support/cliente-07.png";
import cliente09 from "../../src/assets/logos/support/cliente-09.png";
import cliente12 from "../../src/assets/logos/support/cliente-12.png";
import cliente16 from "../../src/assets/logos/support/cliente-16.png";
import cliente06 from "../../src/assets/logos/support/cliente-06.png";
import cliente26 from "../../src/assets/logos/support/cliente-26.png";
import cliente21 from "../../src/assets/logos/support/cliente-21.webp";
import cliente14 from "../../src/assets/logos/support/cliente-14.png";


export const CarrosselLogosConsultoria = ({className}) => {
  const empresas = [cliente02, cliente03, cliente07, cliente09, cliente12,cliente14, cliente16,cliente21, cliente06, cliente26];
  const logosSlideRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationIntervalRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosSlideRef.current;

    // Verificação se o logosSlide é um elemento válido
    if (logosSlide) {
      const checkWrapCondition = () => {
        const isWrapped = logosSlide.scrollWidth > logosSlide.clientWidth;
        setShouldAnimate(isWrapped);
      };

      const resizeObserver = new ResizeObserver(() => {
        checkWrapCondition();
      });

      resizeObserver.observe(logosSlide);

      // Limpar o observador quando o componente desmontar
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    const logosSlide = logosSlideRef.current;

    if (shouldAnimate && logosSlide) {
      const handleAnimation = () => {
        logosSlide.scrollLeft += 1;

        if (logosSlide.scrollLeft >= logosSlide.scrollWidth / 2) {
          logosSlide.scrollLeft = 0;
        }
      };

      animationIntervalRef.current = setInterval(handleAnimation, 30);

      return () => {
        clearInterval(animationIntervalRef.current);
      };
    } else if (logosSlide) {
      clearInterval(animationIntervalRef.current);
    }
  }, [shouldAnimate]);

  return (
    <section className={styles.carrosselWrapper}>
      <div className={`${styles.carrossel} ${className} fadeBottomSlow`} >
        <div className={styles.logosContainer} ref={logosSlideRef}>
          {shouldAnimate
            ? empresas
                .concat(empresas)
                .map((logoSrc, index) => (
                  <img
                    key={index}
                    src={logoSrc}
                    alt={`Logo da empresa ${index}`}
                    className={styles.logo}
                  />
                ))
            : empresas.map((logoSrc, index) => (
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
