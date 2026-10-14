import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import imgHomeHero from "../../assets/heroBody.png";
import imgHomeHeroMb from "../../assets/heroBody.png";
import bodyShop from "../../assets/bodyShopCard.png";
import boss from "../../assets/boss.png";
import { TagSection } from "../../../components/buttons/TagSection";
import {
  IconCoinOff,
  IconArrowsShuffle,
  IconEaseInOutControlPoints,
  IconGymnastics,
} from "@tabler/icons-react";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CommentCarousel from "../../../components/CommentCarousel";

import { NumbersCounters } from "../../../components/NumbersCounters";
import CarrosselServicos from "../../../components/CarrosselServicos";
import { ConteConosco } from "../../../components/ConteConosco";
import RouteWrapper from "../../../components/RouteWrapper";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import Form from "../../../components/Form";

export const BodyPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  const contatoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
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
        title={"Body Shop – Acme"}
        canonical={"https://example.com/body-shop"}
        description={
          "A Acme oferece soluções de Body Shop com mão de obra especializada sob demanda, otimizando sua equipe e reduzindo custos com pessoal em até 25%. Conte com profissionais altamente qualificados, gestão completa de desempenho e treinamento contínuo, promovendo eficiência e agilidade para a sua empresa."
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
              <div className={`${styles.heroText}`}>
                <TagSection
                  className="text-start"
                  content="BODY SHOP ACME"
                />
                <h1 className="title secondary one d-flex flex-column  lineHeight">
                  Especialistas para fortalecer seu{" "}
                  <div>
                    <span className="textLight">time</span>
                  </div>
                </h1>
                <p className="paragraph secondary lineHeight">
                  A solução ideal para empresas que precisam de expertise{" "}
                  <span className="paragraph semiBold lineHeight">
                    sem custos de contratação.
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
                    <h4 className="title four semiBold lineHeight ">+800</h4>
                    <p className="politicas">Projetos concluídos</p>
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
            <div className={`${styles.heroImage} fadeRightSlow`}>
              <img
                className={`${styles.rosquinha}`}
                src={imgSrc}
                alt="circulo"
              />
            </div>
            <div
              className={`${styles.box} gap-4 mobiV flex-row justify-content-around align-items-center`}
            >
              <div
                className={`${styles.cardsBox} d-flex align-items-center justify-content-center`}
              >
                <div>
                  <h4 className="title four semiBold lineHeight text-center  ">
                    +800
                  </h4>
                  <p className="politicas">Projetos concluídos</p>
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
                  O que é o Body Shop da Acme?
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
                            src={bodyShop}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex text-white flex-column lineHeight gap-4 fadeLeftSlow">
                            <p className="paragraph text-start lineHeight ">
                              Com o nosso serviço de Body Shop, sua empresa
                              conta com profissionais qualificados em sistemas
                              de gestão e folha de pagamento, integrados
                              diretamente ao time e sem necessidade de
                              contratação direta. Garanta expertise,
                              flexibilidade e eficiência nos seus processos com
                              profissionais que se adaptam perfeitamente às
                              necessidades da sua empresa.
                            </p>

                            <div>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Tenha
                                Especialistas em gestão e folha, quando você
                                precisar.
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Flexibilidade para ampliar sua equipe conforme
                                demanda
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Expertise e integração para otimizar processos e
                                garantir resultados
                              </p>
                              <p className="paragraph text-white d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Especialização em soluções empresariais, com
                                foco em eficiência e conformidade.
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
                          src={bodyShop}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4">
                              <p className="paragraph text-white lineHeight-32 fadeBottomSlow">
                                Com o nosso serviço de Body Shop, sua empresa
                                conta com profissionais qualificados em sistemas
                                de gestão e folha de pagamento, integrados
                                diretamente ao time e sem necessidade de
                                contratação direta. Garanta expertise,
                                flexibilidade e eficiência nos seus processos
                                com profissionais que se adaptam perfeitamente
                                às necessidades da sua empresa.
                              </p>
                              <div>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" /> Tenha
                                  Especialistas em gestão e folha, quando você
                                  precisar.
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Flexibilidade para ampliar sua equipe conforme
                                  demanda
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Expertise e integração para otimizar processos
                                  e garantir resultados
                                </p>
                                <p className="paragraph text-white d-flex gap-4 text-start fadeLeftSlow">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Especialização em soluções empresariais, com
                                  foco em eficiência e conformidade.
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
                    <IconCoinOff
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Redução de Custos
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Evite despesas com contratação, treinamento e encargos
                        trabalhistas, garantindo maior economia para sua
                        empresa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconArrowsShuffle
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Flexibilidade Total
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Profissionais alocados conforme a demanda, sem vínculos
                        de longo prazo, possibilitando um ajuste dinâmico nas
                        equipes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconEaseInOutControlPoints
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Elasticidade na Equipe
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Expanda ou reduza o número de profissionais de acordo
                        com o tamanho e a urgência de suas demandas, mantendo
                        sua operação sempre otimizada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.card} fadeBottomSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconGymnastics
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Agilidade e Expertise
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Profissionais com profundo conhecimento em sistemas ERPs
                        e folha de pagamento, prontos para implementar soluções
                        rapidamente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="degradeGreen-bg fadeLeftSlow"
          style={{ padding: "64px 0px", borderRadius: "0px 64px" }}
        >
          <div className="container" style={{ gap: "64px" }}>
            <div className={`${styles.divServices}`}>
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      <div className={styles.solucoesText}>
                        <div
                          className={`${styles.text}  justify-content-center`}
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
                              <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Análise das necessidades
                                  </span>
                                  <br />
                                  Identificamos o perfil ideal do profissional
                                  com base nas demandas específicas de sua
                                  empresa.
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Seleção e alocação
                                  </span>
                                  <br />
                                  Escolhemos os melhores especialistas para
                                  atuação temporária ou em projetos específicos.
                                </div>
                              </p>
                              <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                <img src={arrow} alt="icone de seta" />
                                <div className="d-flex flex-column text-white">
                                  <span className="bold text-white">
                                    Acompanhamento e resultados
                                  </span>
                                  <br />
                                  Monitoramos a performance e oferecemos suporte
                                  contínuo para garantir resultados de alta
                                  qualidade
                                </div>
                              </p>

                              <ButtonPrimary
                                className="faleconosco mt-4 mb-n5 paragraph bold height-fit-content  text-center"
                                href="javascript:void(0)"
                                type="button"
                                content={"Começe Agora"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Versão web */}
                      <div
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4 fadeBottomSlow`}
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
                                      className={"text-white text-start"}
                                      content={"O QUE OFERECEMOS"}
                                    />
                                  </div>
                                  <h2 className="title text-white three d-flex flex-column lineHeight">
                                    Como funciona a Alocação de Profissionais
                                  </h2>
                                </div>
                              </div>
                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Análise das necessidades
                                    </span>
                                    <br />
                                    Identificamos o perfil ideal do profissional
                                    com base nas demandas específicas de sua
                                    empresa.
                                  </div>
                                </p>
                              </div>

                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Seleção e alocação
                                    </span>
                                    <br />
                                    Escolhemos os melhores especialistas para
                                    atuação temporária ou em projetos
                                    específicos.
                                  </div>
                                </p>
                              </div>

                              <div>
                                <p className="paragraph text-20px d-flex gap-4 align-items-start">
                                  <img src={arrow} alt="icone de seta" />
                                  <div className="d-flex flex-column text-white">
                                    <span className="bold text-white">
                                      Acompanhamento e resultados
                                    </span>
                                    <br />
                                    Monitoramos a performance e oferecemos
                                    suporte contínuo para garantir resultados de
                                    alta qualidade
                                  </div>
                                </p>
                              </div>

                              <ButtonPrimary
                                className="faleconosco mt-4 paragraph bold text-white height-fit-content  text-center"
                                href="javascript:void(0)"
                                type="button"
                                content={"Começe Agora"}
                              />
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
