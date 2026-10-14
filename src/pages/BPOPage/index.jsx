import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import imgHomeHero from "../../assets/heroBPO.png";
import imgHomeHeroMb from "../../assets/heroBPO-.png";
import GLPI from "../../assets/GLPI.svg";
import boss from "../../assets/boss.png";
import { TagSection } from "../../../components/buttons/TagSection";
import {
  IconTimelineEvent,
  IconTargetArrow,
  IconCoinOff,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CommentCarousel from "../../../components/CommentCarousel";
import { NumbersCounters } from "../../../components/NumbersCounters";
import CarrosselServicos from "../../../components/CarrosselServicos";
import { ConteConosco } from "../../../components/ConteConosco";
import RouteWrapper from "../../../components/RouteWrapper";
import Form from "../../../components/Form";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import CalculadoraEmpresa from "../../../components/CalculadoraEmpresa";

export const BPOPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  const contatoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const anoInicial = 2009;
  const anoAtual = new Date().getFullYear();
  const ano = anoAtual - anoInicial;

  return (
    <>
      <RouteWrapper
        title={"BPO Folha de Pagamento – Acme"}
        canonical={"https://example.com/bpo-folha-de-pagamento"}
        description={
          "A Acme oferece soluções completas de BPO Folha de Pagamento, otimizando processos e aumentando a eficiência operacional da gestão de folha, garantindo precisão e agilidade para a sua empresa."
        }
      ></RouteWrapper>
      <DefaultTemplate className={styles.homePage}>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section id="top" className={`${styles.heroSection}`}>
          <div
            className={`${styles.heroContainer} container  d-flex flex-row justify-content-between`}
          >
            <div className={`${styles.heroContentBox} fadeLeftSlow`}>
              <div className={`${styles.heroText} `}>
                <TagSection
                  className="text-start"
                  content="BPO DE FOLHA DE PAGAMENTO"
                />
                <h1 className="title secondary one d-flex flex-column  lineHeight">
                  Simplificando os{" "}
                  <div>
                    <span className="textLight">processos</span> do seu RH
                  </div>
                </h1>
                <p className="paragraph secondary lineHeight">
                  Reduza até 30% dos custos administrativos e simplifique sua
                  gestão de RH.
                  <span className="paragraph semiBold lineHeight">
                    Cuidamos da folha para que seu time cuide do futuro.
                  </span>
                </p>
                <ButtonPrimary
                  className="faleconosco paragraph bold responsiveContent text-center"
                  href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                  type="button"
                  content={"Fale com consultor"}
                />
              </div>

              <div className={`${styles.box} webV `}>
                <div className={styles.cardsBox}>
                  <div>
                    <h4 className="title four semiBold lineHeight ">+120</h4>
                    <p className="politicas">Clientes atendidos</p>
                  </div>
                </div>
                <div className={styles.cardsBox}>
                  <div>
                    <h4 className="title four semiBold lineHeight  ">
                      +20.000
                    </h4>
                    <p className="politicas">Vidas processadas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.heroImage} fadeBottomSlow`}>
              <img
                className={`${styles.rosquinha}`}
                src={imgHomeHero}
                alt="circulo"
              />
            </div>
            <div
              className={`${styles.box} gap-4 mobiV flex-row justify-content-around align-items-center fadeBottomSlow`}
            >
              <div
                className={`${styles.cardsBox} d-flex align-items-center justify-content-center`}
              >
                <div>
                  <h4 className="title four semiBold lineHeight text-center  ">
                    +120
                  </h4>
                  <p className="politicas">Clientes atendidos</p>
                </div>
              </div>
              <div
                className={`${styles.cardsBox} d-flex align-items-center justify-content-center`}
              >
                <div>
                  <h4 className="title four semiBold lineHeight text-center ">
                    +20.000
                  </h4>
                  <p className="politicas">Vidas processadas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.heroSectionMbImg} fadeBottomSlow`}>
          <div className={styles.heroImageMb}>
            <img
              className={`${styles.rosquinha}`}
              src={imgHomeHeroMb}
              alt="circulo"
            />
          </div>
        </section>

        <div id="clientes">
          <CarrosselLogosConsultoria className={"border border-0"} />
        </div>

        <section
          className="secondary-bg fadeLeftSlow"
          style={{ padding: "64px 0px", borderRadius: "0px 64px" }}
        >
          <div className="container" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div
                className={`${styles.text} uk-animation-slide-top-medium`}
                uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true; delay:100;"
              >
                <div className="d-flex w-100 justify-content-center">
                  <TagSection
                    className={"text-white"}
                    content={"FOCO EM RESULTADOS"}
                  />
                </div>
                <h2 className="title text-white three d-flex flex-column lineHeight text-center">
                  Deixe a folha de pagamento com quem entende
                </h2>
              </div>
            </div>
            <div
              className={`${styles.divServices} uk-animation-slide-left-medium`}
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay:100;"
            >
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100  mb-5">
                          <img
                            className="img-fluid"
                            src={GLPI}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex text-white flex-column lineHeight gap-4">
                            <p className="paragraph text-start lineHeight ">
                              Com nossa experiência de 15 anos em BPO, cuidamos
                              de toda a folha para que seu time foque no que
                              importa: estratégias e crescimento. Simplifique
                              processos e maximize a eficiência do seu RH.
                            </p>

                            <div>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Reduza
                                custos e ganhe mais tempo para o estratégico
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Gestão
                                completa e integrada da folha de pagamento
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Suporte
                                especializado para o RH se dedicar ao futuro da
                                empresa
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Proteção
                                completa dos dados para uma folha de pagamento
                                segura e confiável.
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
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4`}
                      >
                        <img
                          className="img-fluid"
                          src={GLPI}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4">
                              <p className="paragraph text-white lineHeight-32">
                                Com nossa experiência de 15 anos em BPO,
                                cuidamos de toda a folha para que seu time foque
                                no que importa: estratégias e crescimento.
                                Simplifique processos e maximize a eficiência do
                                seu RH.
                              </p>
                              <div>
                                <p className="paragraph text-white d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" /> Reduza
                                  custos e ganhe mais tempo para o estratégico
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" /> Gestão
                                  completa e integrada da folha de pagamento
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Suporte especializado para o RH se dedicar ao
                                  futuro da empresa
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Proteção completa dos dados para uma folha de
                                  pagamento segura e confiável.
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

        {/* <CalculadoraEmpresa /> */}

        <section style={{ padding: "64px 0px" }}>
          <div className="container" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow`}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"POR QUE A ACME?"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center">
                  Você foca nos negócios, nós cuidamos da folha
                </h2>
                <p
                  className={`${styles.acreditamos} paragraph secondary lineHeight`}
                >
                  Nosso serviço é focado na experiência de funcionários e na
                  agilidade dos processos
                </p>
              </div>
            </div>
          </div>
          <div className="container" style={{ gap: "28px" }}>
            <div className={styles.divCardServices}>
              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconTargetArrow
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Precisão e conformidade Total
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Realizamos uma gestão completa e segura da folha de
                        pagamento, garantindo conformidade com as normas
                        trabalhistas e tributárias brasileiras, e mantendo seu
                        negócio em conformidade com as mudanças regulatórias.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconCoinOff
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Redução de custos e eficiência operacional
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Reduzimos os custos administrativos e de RH, permitindo
                        que sua equipe de Recursos Humanos concentre-se em
                        atividades estratégicas, como desenvolvimento de
                        talentos e engajamento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconDeviceAnalytics
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Relatórios e análises personalizadas
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Com acesso a dados em tempo real, oferecemos relatórios
                        detalhados que ajudam a identificar tendências,
                        gerenciar a produtividade e tomar decisões baseadas em
                        dados, adaptados às necessidades específicas da sua
                        empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconTimelineEvent
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Integração com Sistemas de RH:
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Nosso serviço integra-se ao Portal RH Acme e aos
                        principais sistemas de gestão, proporcionando
                        visibilidade completa dos processos e um fluxo de
                        trabalho automatizado, com informações sempre
                        atualizadas e centralizadas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="secondary-bg fadeLeftSlow"
          style={{ padding: "64px 0px", borderRadius: "0px 64px" }}
        >
          <div className="container" style={{ gap: "64px" }}>
            <div
              className={`${styles.divServices} uk-animation-slide-left-medium`}
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay:100;"
            >
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      <div className={styles.solucoesText}>
                        <div
                          className={`${styles.text} uk-animation-slide-top-medium justify-content-center`}
                          uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true; delay:100;"
                        >
                          <div className="d-flex w-100 justify-content-center">
                            <TagSection
                              className={"text-white text-center"}
                              content={"O QUE OFERECEMOS"}
                            />
                          </div>
                          <h2 className="title text-white text-center three d-flex flex-column lineHeight">
                            Especialidades em BPO de Folha
                          </h2>
                        </div>
                      </div>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100  mb-5">
                          <img
                            className="img-fluid"
                            src={boss}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex text-white flex-column lineHeight gap-4">
                            <div>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Processamento completo de Folha de Pagamento
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Gestão
                                completa e integrada da folha de pagamento
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Suporte
                                especializado para o RH se dedicar ao futuro da
                                empresa
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Proteção
                                completa dos dados para uma folha de pagamento
                                segura e confiável.
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
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4`}
                      >
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4">
                              <div className={`${styles.solucoesText}`}>
                                <div
                                  className={`${styles.text} uk-animation-slide-top-medium align-items-start`}
                                  uk-scrollspy="cls: uk-animation-slide-top-medium; repeat: true; delay:100;"
                                >
                                  <div className="d-flex w-100">
                                    <TagSection
                                      className={"text-white text-start"}
                                      content={"O QUE OFERECEMOS"}
                                    />
                                  </div>
                                  <h2 className="title text-white three d-flex flex-column lineHeight">
                                    Especialidades em BPO de Folha
                                  </h2>
                                </div>
                              </div>
                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Processamento completo de Folha de
                                      Pagamento
                                    </span>
                                    <br />
                                    Cálculos precisos de salário, férias,
                                    rescisões, benefícios e demais obrigações
                                    trabalhistas.
                                  </div>
                                </p>
                              </div>

                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Cumprimento de obrigações legais
                                    </span>
                                    <br />
                                    Gerenciamento de FGTS, INSS, IRRF, CAGED,
                                    RAIS, entre outros, com total conformidade
                                    regulatória
                                  </div>
                                </p>
                              </div>

                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Atendimento personalizado e consultoria
                                      especializada
                                    </span>
                                    <br />
                                    Nossa equipe de especialistas em folha de
                                    pagamento está sempre disponível para
                                    suporte e consultoria, garantindo uma
                                    experiência sem complicações.
                                  </div>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          className="img-fluid"
                          src={boss}
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
          <div className="container " style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow`}>
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

        <ConteConosco />

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
