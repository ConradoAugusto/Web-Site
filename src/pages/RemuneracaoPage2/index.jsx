import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import imgHomeHero from "../../assets/remuneracao/hero.png";
import imgHomeHeroMb from "../../assets/remuneracao/heroMb.png";
import posição from "../../assets/remuneracao/posicao.png";
import hierarquia from "../../assets/remuneracao/hierarquia.png";
import aprovacao from "../../assets/remuneracao/aprovacao.png";
import requisicao from "../../assets/remuneracao/requisicao.png";
import salarial from "../../assets/remuneracao/salarial.png";
import { TagSection } from "../../../components/buttons/TagSection";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/arrow.svg";
import RouteWrapper from "../../../components/RouteWrapper";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import PositionManagementDiagram from "../../../components/PositionManagementDiagram";
import { NumbersRemuneracao } from "../../../components/NumbersRemuneracao";
import FormRemuneracao from "../../../components/FormRemuneracao";

export const RemuneracaoPage2 = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);
  const [padding, setPadding] = useState(
    window.innerWidth < 768 ? "48px 26px" : "50px"
  );
  const contatoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
      setPadding(window.innerWidth < 768 ? "48px 26px" : "50px");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textos = ["Inovação", "Tecnologia", "Eficiência"];
  const [textoAtual, setTextoAtual] = useState(0);
  const [animacao, setAnimacao] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimacao(true);

      setTimeout(() => {
        setTextoAtual((prevTexto) => (prevTexto + 1) % textos.length);
        setAnimacao(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
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

  const anoInicial = 2009;
  const anoAtual = new Date().getFullYear();
  const ano = anoAtual - anoInicial;

  return (
    <>
      <RouteWrapper
        title={"Remuneração Inteligente"}
        canonical={"https://example.com/remuneracao-inteligente"}
        description={
          "Conectamos a estratégia financeira à realidade do RH através de uma interface intuitiva e poderosa."
        }
      ></RouteWrapper>
      <DefaultTemplate className={styles.homePage}>
        <OffCanvasContato />
        <WhatsAppIcon />

        <section id="top" className={`${styles.heroSection}`}>
          <div className={styles.heroPadding}>
            <div
              className={`${styles.heroContainer} container  d-flex flex-row justify-content-between`}
            >
              <div className={`${styles.heroContentBox} fadeLeftSlow`}>
                <div className={`${styles.heroText}`}>
                  <TagSection
                    className="text-start text-white"
                    content="Novo Módulo 2.0 Disponível"
                  />
                  <h1 className="title text-white one d-flex flex-column lineHeight-56">
                    Plataforma de Remuneração
                    <span className="primary">
                      Transforme sua Estratégia Salarial
                    </span>
                    em Vantagem Competitiva.
                  </h1>
                  <p className="paragraph secondary text-white lineHeight">
                    Abandone as planilhas complexas. Centralize tabelas
                    salariais, gestão de posições, hierarquia e requisições em
                    uma plataforma única, segura e auditável.
                  </p>
                  <ButtonPrimary
                    className="faleconosco paragraph bold responsiveContent text-center"
                    href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                    type="button"
                    content={"Agendar Demonstração"}
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
          </div>
        </section>

        <section style={{ padding: "0px 0px 64px 0px" }}>
          <div className="container" style={{ gap: "18px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow three pt-5`}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"O que oferecemos"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center ">
                  Funcionalidades Principais
                </h2>
                <p
                  className={`${styles.acreditamos} paragraph secondary lineHeight text-center`}
                >
                  Uma suíte completa projetada para transformar o RH operacional
                  em estratégico.
                </p>
              </div>
            </div>
            <div className={`${styles.divServices}`}>
              <div style={{ gap: "88px" }}>
                <div className={styles.itensRemuneracao}>
                  {isMobile ? (
                    <>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow three mb-5">
                          <img
                            className="img-fluid Larger shadow"
                            src={salarial}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div className="mt-5">
                          <div className="d-flex flex-column gap-3 fadeRightSlow three">
                            <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                              Criação de Tabela Salarial
                            </h2>
                            <p className="paragraph text-start lineHeight-32 ">
                              Defina tabelas salariais robustas e vincule-as
                              diretamente aos atributos da posição. Isso garante
                              consistência salarial em toda a organização e
                              facilita atualizações em massa.
                            </p>
                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Atualização global e dinâmica de salários
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Vinculação automática por cargo/nível
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Histórico completo de alterações
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow four  mb-5">
                          <img
                            className="img-fluid Larger shadow"
                            src={posição}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column lineHeight gap-4 fadeRightSlow four">
                            <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                              Gestão de Posição
                            </h2>
                            <p className="paragraph  lineHeight">
                              Gerencie "Cadeiras" independentes dos ocupantes.
                              Controle vagas, orçamentos e atributos da posição
                              de forma estratégica.
                            </p>
                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Headcount vs. Budget
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Herança
                                de Atributos
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Gestão
                                de Vagas
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow three mb-5">
                          <img
                            className="img-fluid Larger shadow"
                            src={hierarquia}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column gap-3 fadeRightSlow three">
                            <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                              Hierarquia
                            </h2>
                            <p className="paragraph text-start lineHeight-32 ">
                              Estruture visualmente a cadeia de comando da
                              empresa. Defina gestores, subordinados e visualize
                              o organograma completo.
                            </p>
                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Organograma Interativo
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Gestão
                                de Spans
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Histórico de Estrutura
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow four  mb-5">
                          <img
                            className="img-fluid Larger shadow"
                            src={requisicao}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column lineHeight gap-4 fadeRightSlow four">
                            <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                              Criação de Requisição
                            </h2>
                            <p className="paragraph  lineHeight">
                              Centralize solicitações de pessoal (Admissão,
                              Promoção, Mérito) com formulários personalizados e
                              validação na origem.
                            </p>
                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Formulários Dinâmicos
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Anexos e
                                Justificativas
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Validação de Regras
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow four  mb-5">
                          <img
                            className="img-fluid Larger shadow"
                            src={aprovacao}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column lineHeight gap-4 fadeRightSlow four">
                            <h2 className="paragraph text-20px semiBold lineHeight-32">
                              Fluxo de Aprovação Dinâmico
                            </h2>
                            <p className="paragraph  lineHeight">
                              Dê adeus aos e-mails perdidos. O motor de workflow do Portal encaminha automaticamente cada requisição para os aprovadores corretos baseando-se em regras de negócio.
                            </p>
                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Aprovação multinível e por alçadas
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> SLA e
                                controle de prazos
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Notificações automáticas
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
                        className={`${styles.servicesItemLeft} d-flex align-items-center mt-4 rounded-4`}
                      >
                        <div className="d-flex flex-column gap-3  fadeLeftSlow two">
                          <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                            Criação de Tabela Salarial
                          </h2>
                          <p className="paragraph lineHeight-32">
                            Defina tabelas salariais robustas e vincule-as
                            diretamente aos atributos da posição. Isso garante
                            consistência salarial em toda a organização e
                            facilita atualizações em massa.
                          </p>
                          <div>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" />{" "}
                              Atualização global e dinâmica de salários
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> Vinculação
                              automática por cargo/nível
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> Histórico
                              completo de alterações
                            </p>
                          </div>
                        </div>
                        <img
                          className="img-fluid Larger shadow w-50 fadeRightSlow two"
                          src={salarial}
                          alt="foto de um consultor"
                        />
                      </div>
                      <div
                        className={`${styles.servicesItemLeft} d-flex w-100 align-items-center rounded-4`}
                      >
                        <img
                          className="img-fluid Larger shadow w-50 fadeLeftSlow three"
                          src={posição}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 fadeRightSlow four">
                              <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                                Gestão de Posição
                              </h2>
                              <p className="paragraph  lineHeight-32">
                                Gerencie "Cadeiras" independentes dos ocupantes.
                                Controle vagas, orçamentos e atributos da
                                posição de forma estratégica.
                              </p>
                              <div>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Headcount vs. Budget
                                </p>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Herança de Atributos
                                </p>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" /> Gestão
                                  de Vagas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4`}
                      >
                        <div className="d-flex flex-column gap-3  fadeLeftSlow two">
                          <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                            Hierarquia
                          </h2>
                          <p className="paragraph lineHeight-32">
                            Estruture visualmente a cadeia de comando da
                            empresa. Defina gestores, subordinados e visualize o
                            organograma completo.
                          </p>
                          <div>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" />{" "}
                              Organograma Interativo
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> Gestão de
                              Spans
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> Histórico
                              de Estrutura
                            </p>
                          </div>
                        </div>
                        <img
                          className="img-fluid Larger shadow w-50 fadeRightSlow two"
                          src={hierarquia}
                          alt="foto de um consultor"
                        />
                      </div>
                      <div
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4`}
                      >
                        <img
                          className="img-fluid Larger Larger shadow w-50 fadeLeftSlow three"
                          src={requisicao}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 fadeRightSlow four">
                              <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                                Criação de Requisição
                              </h2>
                              <p className="paragraph  lineHeight-32">
                                Centralize solicitações de pessoal (Admissão,
                                Promoção, Mérito) com formulários personalizados
                                e validação na origem.
                              </p>
                              <div>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Formulários Dinâmicos
                                </p>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" /> Anexos
                                  e Justificativas
                                </p>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Validação de Regras
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles.servicesItemLeft} d-flex align-items-center rounded-4`}
                      >
                        <div className="d-flex flex-column gap-3  fadeLeftSlow two">
                          <h2 className="title secondary three d-flex flex-column lineHeight text-start">
                            Fluxo de Aprovação Dinâmico
                          </h2>
                          <p className="paragraph lineHeight-32">
                            Dê adeus aos e-mails perdidos. O motor de workflow
                            do Portal encaminha automaticamente cada requisição
                            para os aprovadores corretos baseando-se em regras
                            de negócio.
                          </p>
                          <div>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> Aprovação
                              multinível e por alçadas
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" /> SLA e
                              controle de prazos
                            </p>
                            <p className="paragraph d-flex gap-4 text-start ">
                              <img src={arrow} alt="icone de seta" />{" "}
                              Notificações automáticas
                            </p>
                          </div>
                        </div>
                        <img
                          className="img-fluid Larger shadow w-50 fadeRightSlow two"
                          src={aprovacao}
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

        <section
          id="ecosystem"
          className="py-5 bg-light position-relative overflow-hidden"
        >
          <div className="container position-relative" style={{ zIndex: 10 }}>
            <div
              className="text-center mx-auto mb-5"
              style={{ maxWidth: "900px" }}
            >
              <TagSection className="text-start" content="Conectividade" />

              <h2 className="title secondary four d-flex flex-column lineHeight ">
                Integração Nativa com seu ERP de Folha
              </h2>

              <p className="paragraph secondary lineHeight">
                O Portal RH não trabalha isolado. Nossa API robusta garante que
                as movimentações aprovadas reflitam automaticamente na sua folha
                de pagamento, eliminando o retrabalho manual e erros de
                digitação.
              </p>
            </div>
            <PositionManagementDiagram />
          </div>
        </section>

        <NumbersRemuneracao />

        <section ref={contatoRef} className={styles.sectionForms}>
          <div id="formHub" className=" text-white">
            <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
              <FormRemuneracao />
            </div>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};
