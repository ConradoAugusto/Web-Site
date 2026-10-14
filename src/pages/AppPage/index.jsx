import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import imgHomeHero from "../../assets/PortalImg/app/app.svg";
import imgHomeHeroMb from "../../assets/PortalImg/app/app.svg";
import portalApp from "../../assets/PortalImg/app/portalApp.svg";
import app from "../../assets/PortalImg/app/hand.svg";
import { TagSection } from "../../../components/buttons/TagSection";
import {
  IconUserHeart,
  IconSubtask,
  IconTarget,
  IconComet,
  IconSettingsAutomation,
  IconBrain,
  IconShield,
} from "@tabler/icons-react";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CommentCarousel from "../../../components/CommentCarousel";

import { NumbersCounters } from "../../../components/NumbersCounters";
import CarrosselServicos from "../../../components/CarrosselServicos";
import { AgendeUmaDemo } from "../../../components/AgendeUmaDemo";
import RouteWrapper from "../../../components/RouteWrapper";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import Form from "../../../components/Form";
import { Helmet } from "react-helmet";

export const AppPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);
  const contatoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isMobileHome, setIsMobileHome] = useState(window.innerWidth < 768);
  const [imgSrc, setImgSrc] = useState(
    isMobileHome ? imgHomeHeroMb : imgHomeHero
  );

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileHome(isMobile);
      setImgSrc(isMobile ? imgHomeHeroMb : imgHomeHero);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <RouteWrapper
        title={"Controle de Ponto – Acme"}
        canonical={"https://example.com/controle-de-ponto"}
        description={
          "A Acme oferece soluções completas em Controle de Ponto RH, proporcionando ferramentas eficientes para a gestão de jornada e redução de custos operacionais. Nossa plataforma permite um acompanhamento preciso do horário dos colaboradores, garantindo conformidade com a legislação trabalhista e eliminando riscos de multas."
        }
      ></RouteWrapper>
      <Helmet>
        <title>Controle de Ponto – Acme</title>
        <meta
          name="description"
          content="Especialistas em RH e Departamento Pessoal com atuação em todo o Brasil. Oferecemos terceirização de folha de pagamento, Ponto, E-Social e Portal Web, além de implantação, manutenção, auditoria trabalhista e gestão de benefícios."
        />
      </Helmet>
      <DefaultTemplate className={styles.homePage}>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section id="top" className={`${styles.heroSection}`}>
          <div
            className={`${styles.heroContainer} container  d-flex flex-row justify-content-between`}
          >
            <div className={`${styles.heroContentBox} fadeLeftSlow`}>
              <div className={`${styles.heroText}`}>
                <TagSection className="text-start" content="SOLUÇÃO COMPLETA" />
                <h1 className="title secondary one d-flex flex-column  lineHeight">
                  <span> Controle de Ponto </span>
                  <span className="textLight">Integrado e Simples</span>
                  <span>com o Portal RH</span>
                </h1>
                <p className="paragraph secondary lineHeight">
                  Tenha em mãos uma solução intuitiva e completa para gerenciar
                  e integrar o ponto eletrônico diretamente ao seu ERP. Diga
                  adeus à burocracia e ganhe mais eficiência operacional!
                </p>
                <ButtonPrimary
                  className="faleconosco paragraph bold responsiveContent text-center"
                  href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                  type="button"
                  content={"Fale com consultor"}
                />
              </div>
            </div>
            <div className={`${styles.heroImage} fadeRightSlow`}>
              <img
                className={`${styles.rosquinha}`}
                src={imgSrc}
                alt="circulo"
              />
            </div>
          </div>
        </section>

        <div id="clientes">
          <CarrosselLogosConsultoria className={"border border-0"} />
        </div>

        <section
          className="degradeGreen-bg"
          style={{ padding: "64px 0px", borderRadius: "0px 64px" }}
        >
          <div className="container" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow`}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection
                    className={"text-white"}
                    content={"NOSSO SERVIÇO"}
                  />
                </div>
                <h2 className="title text-white three d-flex flex-column lineHeight text-center">
                  Por que escolher o Controle de Ponto do Portal RH?
                </h2>
              </div>
            </div>
            <div className={`${styles.divServices}`}>
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100  mb-5 fadeLeftSlow">
                          <img
                            className="img-fluid"
                            src={portalApp}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex text-white flex-column lineHeight gap-4 fadeLeftSlow">
                            <p className="paragraph text-start lineHeight ">
                              Elimine retrabalhos e garanta uma comunicação
                              perfeita entre o módulo de ponto e seu sistema de
                              gestão. Todos os dados são automaticamente
                              sincronizados, otimizando o fechamento da folha e
                              relatórios gerenciais.
                            </p>

                            <div>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Integração completa com a plataforma da sua
                                empresa.
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Otimize
                                Otimize a gestão de jornadas de trabalho com o
                                módulo de controle de ponto do Portal RH.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Versão web */}
                      <div
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4 `}
                      >
                        <img
                          className="img-fluid fadeBottomSlow"
                          src={portalApp}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4">
                              <p className="paragraph text-white lineHeight-32 fadeBottomSlow">
                                Elimine retrabalhos e garanta uma comunicação
                                perfeita entre o módulo de ponto e seu sistema
                                de gestão. Todos os dados são automaticamente
                                sincronizados, otimizando o fechamento da folha
                                e relatórios gerenciais.
                              </p>
                              <div>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Integração completa com a plataforma da sua
                                  empresa.
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Otimize a gestão de jornadas de trabalho com o
                                  módulo de controle de ponto do Portal RH.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container fadeBottomSlow">
          <div className={styles.informativeCards}>
            <div className={`${styles.cards} fadeBottomSlow`}>
              <div className={styles.icon}>
                <IconSettingsAutomation size={36} color="#118a6b" stroke={2} />
              </div>
              <div className={styles.textInput}>
                <div className={styles.gestoDeRh}>Gestão Automatizada</div>
                <div className={styles.simplifiqueAsRotinas}>
                  Importação automática de marcações do relógio de ponto.
                  Cálculos automáticos de horas extras, banco de horas e
                  jornadas. Ajustes simplificados diretamente no sistema, com
                  registros auditáveis.
                </div>
              </div>
            </div>
            <div className={`${styles.cards} fadeBottomSlow`}>
              <div className={styles.icon}>
                <IconBrain size={36} color="#118a6b" stroke={2} />
              </div>
              <div className={styles.textInput}>
                <div className={styles.gestoDeRh}>Facilidade de Uso</div>
                <div className={styles.simplifiqueAsRotinas}>
                  A interface simples e funcional permite que gestores e
                  colaboradores acompanhem registros de ponto, ajustes e
                  espelhos com facilidade.
                </div>
              </div>
            </div>
            <div className={`${styles.cards} fadeBottomSlow`}>
              <div className={styles.icon}>
                <IconShield size={36} color="#118a6b" stroke={2} />
              </div>
              <div className={styles.textInput}>
                <div className={styles.gestoDeRh}>
                  Acesso Seguro e Personalizado
                </div>
                <div className={styles.simplifiqueAsRotinas}>
                  Ofereça diferentes níveis de acesso para administradores e
                  colaboradores, garantindo segurança e compliance com a
                  legislação trabalhista.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles.solucoesApp} degradeGreen-bg`}
          style={{ padding: "64px 0px", borderRadius: "0px 64px" }}
        >
          <div className="container" style={{ gap: "64px" }}>
            <div className={`${styles.divServices}`}>
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "30px" }}>
                  {isMobile ? (
                    <>
                      <div className={styles.solucoesText}>
                        <div
                          className={`${styles.text}  justify-content-center fadeLeftSlow`}
                        >
                          <div className="d-flex w-100 justify-content-center">
                            <TagSection
                              className={"text-white text-center"}
                              content={"O QUE OFERECEMOS"}
                            />
                          </div>
                          <h2 className="title text-white text-center three d-flex flex-column lineHeight">
                            Como funciona a Alocação de Profissionais
                          </h2>
                        </div>
                      </div>
                      {/* Versão mobile */}
                      <div>
                        <div className="d-flex justify-content-center w-100  mb-5 fadeLeftSlow">
                          <img
                            className={`${styles.cardMobile} img-fluid fadeBottomSlow`}
                            src={imgHomeHeroMb}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex text-white flex-column lineHeight gap-4">
                            <div>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start fadeLeftSlow">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Espelho de Ponto Online
                                  </span>
                                  <br />
                                  Visualize, edite e aprove os registros de
                                  ponto com apenas alguns cliques.
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start fadeLeftSlow">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Acompanhamento em Tempo Real
                                  </span>
                                  <br />
                                  Monitore marcações e ajustes de ponto em tempo
                                  real, de qualquer dispositivo.
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start fadeLeftSlow">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Alertas e Notificações
                                  </span>
                                  <br />
                                  Receba lembretes de ajustes pendentes ou
                                  inconsistências nos registros
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start fadeLeftSlow">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Relatórios Personalizados
                                  </span>
                                  <br />
                                  Gere relatórios detalhados para auditorias,
                                  análise de produtividade e fechamento de
                                  folha.
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start fadeLeftSlow">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Adequação à Legislação
                                  </span>
                                  <br />
                                  Garanta conformidade com as normas
                                  trabalhistas e proteja sua empresa contra
                                  penalidades.
                                </div>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Versão web */}
                      <div
                        className={`${styles.servicesItemLeft} ${styles.hand} d-flex align-items-center rounded-4 fadeBottomSlow`}
                      >
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4">
                              <div className={`${styles.solucoesText}`}>
                                <div
                                  className={`${styles.text}  align-items-start`}
                                >
                                  <div className="d-flex w-100">
                                    <TagSection
                                      className={
                                        "text-white textLight text-start"
                                      }
                                      content={"FUNCIONALIDADES"}
                                    />
                                  </div>
                                  <h2 className="title text-white four d-flex flex-column lineHeight">
                                    Módulo de Controle de Ponto
                                  </h2>
                                </div>
                              </div>
                              <div>
                                <div className="d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white paragraph text-20px mb-2 ">
                                      Espelho de Ponto Online
                                    </span>
                                    <p className="paragraph lineHeight mb-0">
                                      {" "}
                                      Visualize, edite e aprove os registros de
                                      ponto com apenas alguns cliques.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white paragraph text-20px mb-2">
                                      Acompanhamento em Tempo Real
                                    </span>
                                    <p className="paragraph lineHeight mb-0">
                                      Monitore marcações e ajustes de ponto em
                                      tempo real, de qualquer dispositivo.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div className="d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white paragraph text-20px mb-2">
                                      Alertas e Notificações
                                    </span>
                                    <p className="paragraph lineHeight mb-0">
                                      Receba lembretes de ajustes pendentes ou
                                      inconsistências nos registros
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <p className="  d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white paragraph text-20px mb-2">
                                      Relatórios Personalizados
                                    </span>
                                    <p className="paragraph lineHeight mb-0">
                                      Gere relatórios detalhados para
                                      auditorias, análise de produtividade e
                                      fechamento de folha.
                                    </p>
                                  </div>
                                </p>
                              </div>

                              <div>
                                <p className=" d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white paragraph text-20px mb-2">
                                      Adequação à Legislação
                                    </span>
                                    <p className="paragraph lineHeight mb-0">
                                      {" "}
                                      Garanta conformidade com as normas
                                      trabalhistas e proteja sua empresa contra
                                      penalidades.
                                    </p>
                                  </div>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className={`${styles.handImg}`}
                          src={app}
                          alt="foto de um consultor"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0px" }}>
          <div className="container" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow`}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"VANTAGENS"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center">
                  Você foca no crescimento, nós fornecemos os especialistas
                </h2>
              </div>
            </div>
            <div className={`${styles.divServices}`}></div>
          </div>
          <div className="container" style={{ gap: "28px" }}>
            <div className={styles.divCardServices}>
              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconComet
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Agilidade nos processos
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Evite integrações manuais e retrabalhos com um fluxo de
                        informações contínuo entre o controle de ponto e o ERP.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconTarget
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Maior precisão no fechamento de folha
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Elimine erros na apuração de jornadas, aumentando a
                        confiança nos cálculos finais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconSubtask
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Conformidade trabalhista
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Mantenha todos os registros devidamente armazenados e
                        prontos para auditorias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconUserHeart
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Satisfação dos colaboradores
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Ofereça transparência nos registros e acesso facilitado
                        ao histórico de marcações.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AgendeUmaDemo />

        <section style={{ padding: "64px 0px" }}>
          <div className="container fadeBottomSlow" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} `}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"NOSSAS SOLUÇÕES"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center">
                  Integramos gestão e tecnologia para otimizar a dinâmica dos
                  negócios
                </h2>
              </div>
            </div>
          </div>

          <div style={{ gap: "28px" }}>
            <CarrosselServicos />
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
