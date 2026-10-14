import Swal from "sweetalert2";
import styles from "./style.module.scss";
import Transparência from "../../assets/suportPage/Transparência.png";
import Flexibilidade from "../../assets/suportPage/Flexibilidade.png";
import Serviços from "../../assets/suportPage/Serviços.png";
import arrow from "../../assets/arrow.svg";
import {
  IconMoneybag,
  IconHeartHandshake,
  IconPhoneIncoming,
  IconUserSquareRounded,
} from "@tabler/icons-react";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { NumbersCounters } from "../../../components/NumbersCounters";
import CommentCarousel from "../../../components/CommentCarousel";
import { useEffect, useRef, useState } from "react";
import { TagSection } from "../../../components/buttons/TagSection";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import RouteWrapper from "../../../components/RouteWrapper";
import Form from "../../../components/Form";
import FormSuporte from "../../../components/FormSuporte";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const SuporteOperacional = () => {
  const contatoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1150);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <RouteWrapper
        title={"Suporte Operacional – Acme"}
        canonical={"https://example.com/suporte-operacional"}
        description={
          "Deixe o suporte operacional com a gente! Oferecemos soluções rápidas e eficientes, sem compromissos forçados, com total transparência e flexibilidade. Com o GSDC, você tem controle total sobre os chamados da sua equipe, acompanhando o progresso em tempo real."
        }
      ></RouteWrapper>
      <DefaultTemplate>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section className={`${styles.header} secondary-bg  `}>
          <div className="container fadeTopSlow">
            <h1 className="title one text-white mt-5 mb-3">
              Suporte <br />
              <span className="primary">Operacional Acme</span>
            </h1>
          </div>
        </section>

        <section className={`${styles.sectionSuport} bg-white`}>
          <div className="d-flex container">
            <div className={styles.divSupport}>
              <div className={`${styles.foque} fadeLeftSlow`}>
                <div className="d-flex flex-column" style={{ gap: "2rem" }}>
                  <h5 className="paragraph text-24px bold">
                    Foque na <span className="textLight">estratégia</span> e
                    deixe o suporte{" "}
                    <span className="textLight">operacional</span> conosco!
                  </h5>
                  <p className="paragraph">
                    Oferecemos{" "}
                    <span className="paragraph medium">
                      atendimento com soluções rápidas
                    </span>
                    , práticas e eficientes no universo dos ERP's e sem
                    compromissos forçados. Aqui você encontra transparência,
                    flexibilidade e o nosso diferencial, a gestão controle total
                    sobre suas requisições,{" "}
                    <span className="paragraph medium">
                      GSDC - Gestão Service Desk do Cliente
                    </span>
                    , com o GSDC toda a{" "}
                    <span className="paragraph medium">
                      gestão de chamados da sua equipe estará na palma da sua
                      mão
                    </span>
                    , sendo possível a sua validação e visualização do progresso
                    em tempo real.
                  </p>
                </div>

                <div
                  className={`d-flex flex-row gap-5 align-items-stretch ${styles.cardsNumbers}`}
                >
                  <div
                    className={`mw-auto bg-transparent border border-1 pt-2 px-3 ${styles.cards}`}
                  >
                    <h2 className="title one secondary montserrat">85%</h2>
                    <p className="paragraph text-20px gray-9">
                      Net Promoter Score
                    </p>
                  </div>
                  <div
                    className={`mw-auto bg-transparent border border-1 pt-2 px-3 ${styles.cards}`}
                  >
                    <h2 className="title one  secondary montserrat">+ 60</h2>
                    <p className="paragraph text-20px gray-9">
                      Empresas atendidas
                    </p>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.form_container} d-flex flex-column justify-content-center bg-white fadeRightSlow`}
              >
                <div style={{ zIndex: 99 }}>
                  <div className={styles.containerFormFirst}>
                    <section ref={contatoRef} className={styles.sectionForms}>
                      <div>
                        <div className="containerd-flex flex-column align-items-center justify-content-center">
                          <FormSuporte />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CarrosselLogosConsultoria
            className={"border-0 bg bg-transparent fadeTopSlow"}
          />
        </section>

        <section className={styles.sectionServices}>
          <div className="container" style={{ gap: "88px" }}>
            <div className="d-flex flex-column align-items-center gap-3 fadeRightSlow">
              <span className="paragraph tag">// A ACME OFERECE</span>
              <h4 className="title three text-center w-75">
                Serviços personalizados com cobrança justa e{" "}
                <span className="textLight">transparente</span>
              </h4>
              <p className="paragraph text-24px text-center">
                Acreditamos que a prestação de serviço tem 3 pilares
                fundamentais:
                <span className="paragraph text-24px medium">
                  {" "}
                  <br /> Flexibilidade, Transparência e Serviço de Qualidade
                </span>
              </p>
            </div>
            <div className="d-flex flex-column" style={{ gap: "82px" }}>
              {isMobile ? (
                <>
                  {/* Versão mobile */}

                  <div className={`${styles.cardMobile} fadeLeftSlow`}>
                    <div className={`${styles.textInfo} `}>
                      <div className={styles.frameParent}>
                        <div className={styles.wrapper}>
                          <TagSection content={"GARANTIMOS"} />
                        </div>
                        <div className={styles.title}>
                          <div className="title four lineHeight">
                            Flexibilidade Total
                          </div>
                          <div className="paragraph text-16px montserrat">
                            <span>
                              Cada tarefa ou projeto é cuidadosamente avaliado e
                              tudo é feito sob medida, nosso compromisso é
                              garantir que você tenha a melhor experiência e
                              consiga evoluir e automatizar cada vez mais seus
                              processos!
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph text-16px d-flex gap-4 text-start ">
                        <img src={arrow} alt="icone de seta" /> Não exigimos
                        quantidade mínima de horas contratadas.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center w-100 ">
                      <img
                        className="img-fluid"
                        src={Transparência}
                        alt="foto de um consultor"
                      />
                    </div>
                  </div>

                  <div className={`${styles.cardMobile} fadeLeftSlow `}>
                    <div className={styles.textInfo}>
                      <div className={styles.frameParent}>
                        <div className={styles.wrapper}>
                          <TagSection content={"ENTREGAMOS"} />
                        </div>
                        <div className={styles.title}>
                          <div className="title four lineHeight">
                            Transparência Absoluta
                          </div>
                          <div className="paragraph text-16px montserrat">
                            <span>
                              Desde o primeiro contato, você tem clareza sobre
                              como será feita a cobrança, garantindo que você
                              tenha exatamente o que contratou. Utilizamos uma
                              metodologia clara para mensurar o trabalho
                              necessário e manter você informado sobre cada
                              etapa do processo.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="paragraph text-16px d-flex gap-4 text-start ">
                          <img src={arrow} alt="icone de seta" /> Serviços de
                          validação documental e homologação assistida
                        </p>
                        <p className="paragraph text-16px d-flex gap-4 text-start ">
                          <img src={arrow} alt="icone de seta" /> Serviços de
                          validação documental e homologação assistida
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <img
                        className="img-fluid"
                        src={Flexibilidade}
                        alt="foto de um consultor"
                      />
                    </div>
                  </div>

                  <div className={`${styles.cardMobile} fadeRightSlow `}>
                    <div className={styles.textInfo}>
                      <div className={styles.frameParent}>
                        <div className={styles.wrapper}>
                          <TagSection content={"PROMOVEMOS"} />
                        </div>
                        <div className={styles.title}>
                          <div className="title four lineHeight">
                            Serviços de Qualidade
                          </div>
                          <div>
                            <p className="paragraph">
                              Contamos com{" "}
                              <p className="paragraph bold">
                                profissionais capacitados, experientes Em
                                sistemas de gestão empresarial
                              </p>
                              , oriundos de setores de gestão e RH, garantindo a
                              empatia necessária para{" "}
                              <p className="paragraph bold">
                                atuar em cada processo com o cliente
                              </p>
                              , estabelecendo grande organização e precisão de
                              prazos e expectativas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph text-16px d-flex gap-4 text-start ">
                        <img src={arrow} alt="icone de seta" /> Não exigimos
                        quantidade mínima de horas contratadas.
                      </p>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <img
                        className="img-fluid"
                        src={Serviços}
                        alt="foto de um consultor"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Versão web */}
                  <div
                    className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4 gap-4  fadeLeftSlow`}
                    style={{ padding: "32px" }}
                  >
                    <img
                      className="img-fluid position-relative"
                      src={Transparência}
                      alt="foto de um consultor"
                      style={{ top: "31px", left: "-30px" }}
                    />
                    <div>
                      <div style={{ marginBottom: "18px" }}>
                        <span className="paragraph tag">// GARANTIMOS</span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            Flexibilidade Total
                          </h3>
                          <p className="paragraph text-20px">
                            Cada tarefa ou projeto é cuidadosamente avaliado e
                            tudo é feito sob medida, Nosso compromisso é
                            garantir que você tenha a melhor experiencia e
                            consiga evoluir e automatizar cada vez mais seus
                            processos!
                          </p>
                        </div>
                      </div>
                      <p className="paragraph text-20px d-flex gap-4 align-items-center">
                        <img src={arrow} alt="icone de seta" /> Não exigimos
                        quantidade mínima de horas contratadas.
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${styles.servicesItemRight} d-flex align-items-center rounded-4 gap-4 fadeRightSlow`}
                    style={{ padding: "28px 32px" }}
                  >
                    <div>
                      <div style={{ marginBottom: "18px" }}>
                        <span className="paragraph tag">// ENTREGAMOS</span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            Transparência Absoluta
                          </h3>
                          <p className="paragraph text-20px">
                            Desde o primeiro contato, você tem clareza sobre
                            como será feita a cobrança, garantindo que você
                            tenha exatamente o que contratou. Utilizamos uma
                            metodologia clara para mensurar o trabalho
                            necessário e manter você informado sobre cada etapa
                            do processo.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="paragraph text-20px d-flex gap-4 align-items-center">
                          <img src={arrow} alt="icone de seta" /> Serviços de
                          validação documental e homologação assistida.
                        </p>
                        <p className="paragraph text-20px d-flex gap-4 align-items-center">
                          <img src={arrow} alt="icone de seta" /> Práticas
                          claras e descomplicadas.
                        </p>
                      </div>
                    </div>
                    <img
                      className="img-fluid position-relative"
                      src={Flexibilidade}
                      alt="foto de um consultor"
                      style={{ top: "-29px", right: "-50px" }}
                    />
                  </div>

                  <div
                    className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4 gap-4  fadeLeftSlow`}
                    style={{ padding: "0 32px" }}
                  >
                    <img
                      className="img-fluid position-relative"
                      src={Serviços}
                      alt="foto de um consultor"
                      style={{ top: "9px", left: "-30px" }}
                    />
                    <div>
                      <div style={{ marginBottom: "18px" }}>
                        <span className="paragraph tag">// PROMOVEMOS</span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            Serviços de Qualidade
                          </h3>
                          <div>
                            <p className="paragraph">
                              Contamos com{" "}
                              <b className="paragraph semiBold">
                                profissionais capacitados, experientes Em
                                sistemas de gestão empresarial
                              </b>
                              , oriundos de setores de gestão e RH, garantindo a
                              empatia necessária para{" "}
                              <b className="paragraph semiBold">
                                atuar em cada processo com o cliente
                              </b>
                              , estabelecendo grande organização e precisão de
                              prazos e expectativas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph text-20px d-flex gap-4 align-items-center">
                        <img src={arrow} alt="icone de seta" /> Não exigimos
                        quantidade mínima de horas contratadas.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="d-flex secondary-bg rounded-4 fadeBottomSlow">
              <div
                className="d-flex flex-column justify-content-center"
                style={{ padding: " 32px" }}
              >
                <div
                  className={`${styles.contentEficiencia} d-flex justify-content-center gap-5`}
                  style={{ marginBottom: "36px" }}
                >
                  <h2 className="paragraph text-36px text-white bold lineHeight">
                    Eficiência que acompanha o ritmo do seu{" "}
                    <span className="textDark">crescimento</span>.
                  </h2>
                  <p className="paragraph text-white lineHeight">
                    Embasados nos 3 pilares, criamos um modelo{" "}
                    <span className="paragraph medium">promocional</span> para
                    sua empresa
                  </p>
                </div>
                <div
                  className={styles.eficiencia}
                  style={{ gap: "24px", marginBottom: "2rem" }}
                >
                  <div className={styles.card}>
                    <div className="d-flex flex-column ">
                      <div>
                        <IconMoneybag stroke={2} size={36} color="#20A37F" />
                      </div>
                      <p className="paragraph text-20px medium cardT">
                        Modelo de cobrança flexível
                      </p>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className="d-flex flex-column">
                      <div>
                        <IconPhoneIncoming
                          stroke={2}
                          size={36}
                          color="#20A37F"
                        />
                      </div>
                      <p className="paragraph text-20px medium cardT">
                        Sem imposição de quantidade mínima de chamados
                      </p>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className="d-flex flex-column">
                      <div>
                        <IconHeartHandshake
                          stroke={2}
                          size={36}
                          color="#20A37F"
                        />
                      </div>
                      <p className="paragraph text-20px medium cardT">
                        Cada projeto é tratado como único
                      </p>
                    </div>
                  </div>

                  <div className={styles.card}>
                    <div className="d-flex flex-column">
                      <div>
                        <IconUserSquareRounded
                          stroke={2}
                          size={36}
                          color="#20A37F"
                        />
                      </div>
                      <p className="paragraph text-20px medium cardT">
                        Abordagem focada no que realmente importa para você
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.buttonCta} d-flex align-items-center gap-5`}
                >
                  <p className="paragraph text-white lineHeight">
                    Contamos com profissionais de suporte altamente
                    especializados em sistemas de gestão empresarial, além de
                    equipes dedicadas nas áreas de gestão, comercial e
                    coordenação, para acompanhar cada etapa da sua experiência
                    com nossos serviços e produtos.
                  </p>
                  <ButtonPrimary
                    className={`faleconosco paragraph bold linkNavbar noWrap ${styles.button}`}
                    content={"Solicitar teste grátis"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <NumbersCounters />

        <CommentCarousel />

        <section ref={contatoRef} className={styles.sectionForms}>
          <div id="formHub" className="secondary-bg text-white">
            <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
              <Form />
            </div>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>;
