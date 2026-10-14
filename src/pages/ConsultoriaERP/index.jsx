import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import imgHero from "../../assets/consultoria/image.png";
import { TagSection } from "../../../components/buttons/TagSection";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import diferencial from "../../assets/consultoria/foto-dev.png";
import expertise from "../../assets/consultoria/foto-devs-pc.png";
import timeEmpresa from "../../assets/consultoria/foto-equipe.png";
import imageConfianca from "../../assets/consultoria/foto-maos.png";
import topology from "../../assets/consultoria/topology.svg";
import businessplan from "../../assets/consultoria/businessplan.svg";
import affiliate from "../../assets/consultoria/affiliate.svg";
import pig from "../../assets/consultoria/pig.svg";
import timeline from "../../assets/consultoria/timeline.svg";
import device from "../../assets/consultoria/device.svg";
import arrow from "../../assets/arrow.svg";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import CommentCarousel from "../../../components/CommentCarousel";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { NumbersCounters } from "../../../components/NumbersCounters";
import { ConteConosco } from "../../../components/ConteConosco";
import RouteWrapper from "../../../components/RouteWrapper";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import Form from "../../../components/Form";

export const ConsultoriaERP = () => {
  const contatoRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1150);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const anoInicial = 2009;
  const anoAtual = new Date().getFullYear();
  const ano = anoAtual - anoInicial;

  return (
    <>
      <RouteWrapper
        title={"Consultoria em ERP – Acme"}
        canonical={"https://example.com/consultoria-erp"}
        description={
          "A Acme oferece consultoria especializada, otimizando processos e impulsionando a eficiência operacional da sua empresa."
        }
      ></RouteWrapper>
      <DefaultTemplate>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section style={{ background: "#fafbfd" }}>
          <div className={styles.hero}>
            <div className=" d-flex justify-content-center align-items-center fadeLeftSlow">
              <div>
                <div>
                  <h1 className="paragraph tag text-start">
                    // SOLUÇÕES PARA SUA EMPRESA
                  </h1>
                  <h2 className="title lineHeight one secondary">
                    Consultoria especializada em
                  </h2>
                  <h2 className="title lineHeight one secondary textLight d-flex flex-column">
                    sistemas ERP <span>com a Acme</span>
                  </h2>
                  <p className="paragraph lineHeight-28">
                    Sua empresa merece um sistema de gestão que acompanhe seu
                    ritmo. A Acme te ajuda a
                    <span className="paragraph medium">
                      {" "}
                      extrair o máximo da sua solução de ERP.
                    </span>
                  </p>
                </div>
                <ButtonPrimary
                  className="faleconosco paragraph bold responsiveContent text-center"
                  href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                  type="button"
                  content={"Fale com consultor"}
                />
              </div>
            </div>
            <div className="w-100">
              <img
                className="img-fluid fadeRightSlow"
                src={imgHero}
                alt="Consultor Acme"
              />
            </div>
          </div>
        </section>

        <CarrosselLogosConsultoria />

        <section className={styles.sectionServices}>
          <div className="container" style={{ gap: "88px" }}>
            <div className="d-flex flex-column" style={{ gap: "82px" }}>
              {isMobile ? (
                <>
                  {/* Versão mobile */}
                  <div className={styles.cardMobile}>
                    <div className={styles.textInfo}>
                      <div className={`${styles.frameParent} fadeLeftSlow`}>
                        <div className={styles.wrapper}>
                          <TagSection content={"NOSSO DIFERENCIAL"} />
                        </div>
                        <div className={styles.title}>
                          <div className="title four lineHeight">
                            Soluções completas para sua empresa
                          </div>
                          <div className="paragraph text-16px montserrat gap-1">
                            <p
                              className="paragraph"
                              style={{ lineHeight: "24px" }}
                            >
                              Com mais de 10 anos de experiência e uma equipe
                              altamente especializada em TI e negócios, a
                              <span className="bold">
                                {" "}
                                Acme oferece soluções completas
                              </span>{" "}
                              em consultoria de sistemas de gestão empresarial,
                              impulsionando o crescimento e a
                              <span className="bold">
                                {" "}
                                eficiência do seu negócio.
                              </span>
                            </p>
                            <p
                              className="paragraph"
                              style={{ lineHeight: "24px" }}
                            >
                              Do diagnóstico à implementação, estamos ao seu
                              lado para
                              <span className="bold">
                                {" "}
                                garantir que seu ERP seja uma ferramenta
                                poderosa
                              </span>{" "}
                              de gestão e crescimento.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-100 ">
                      <img
                        className="img-fluid fadeLeftSlow"
                        src={diferencial}
                        alt="foto de um consultor"
                      />
                    </div>
                  </div>
                  <div className={styles.medialSection}>
                    <div className={styles.titleMiddleSection}>
                      <div className={`${styles.solutions} `}>
                        <span className="paragraph tag">
                          // A ACME OFERECE
                        </span>
                        <h2 className="title three text-center lineHeight secondary">
                          Benefícios que fazem a diferença
                        </h2>
                      </div>
                    </div>
                    <div className={`${styles.informativeCards} `}>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.topologyStarIcon}
                            alt=""
                            src={topology}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Gestão de RH completa
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Simplifique as rotinas de RH desde a admissão, como
                            folha de pagamento e benefícios.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={businessplan}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Redução de custos
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Automatize processos, elimine erros e impulsione a
                            produtividade da sua empresa.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={affiliate}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Decisões mais assertivas
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Relatórios analíticos em tempo real permitem
                            agilidade e assertividade na tomada de decisões
                            estratégicas
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={pig}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Controle financeiro completo
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Gerencie suas finanças com precisão, desde o Contas
                            a Pagar e receber até o fluxo de caixa.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.topologyStarIcon}
                            alt=""
                            src={timeline}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Processos integrados
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Conecte as diferentes áreas da sua empresa,
                            otimizando a comunicação e o fluxo de trabalho.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards}`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={device}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Sua empresa na palma da sua mão
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Acesse informações importantes de qualquer lugar, a
                            qualquer hora, com a mobilidade que você precisa.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.cardMobile} text-align-start fadeLeftSlow`}
                  >
                    <div className={styles.textInfo}>
                      <div className={styles.frameParent}>
                        <span className="d-flex paragraph tag justify-content-start mb-2">
                          // {ano} ANOS DE EXPERTISE
                        </span>
                        <div className={`${styles.title} mb-4 `}>
                          <div className="title four lineHeight">
                            Por que escolher a Acme?
                          </div>
                          <div className="paragraph text-16px montserrat justify-content-start">
                            <span>
                              Conte com a expertise de uma equipe com ampla
                              experiência em projetos de sistemas de gestão
                              empresarial e sólida atuação em negócios.
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="paragraph text-20px d-flex gap-4 align-items-start ">
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column d-flex gap-1"
                          style={{ textAlign: "start" }}
                        >
                          <span className="bold d-flex justify-content-start">
                            Atendimento dedicado
                          </span>
                          Receba um atendimento personalizado e dedicado às suas
                          necessidades específicas.
                        </div>
                      </p>
                      <p className="paragraph text-20px d-flex gap-4 align-items-start">
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-1"
                          style={{ textAlign: "start" }}
                        >
                          <span className="bold">Metodologia comprovada</span>{" "}
                          Implementamos soluções eficazes com base em uma
                          metodologia testada e aprovada.
                        </div>
                      </p>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <img
                        className="img-fluid"
                        src={expertise}
                        alt="foto de um consultor"
                      />
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
                      className="img-fluid fadeLeftSlow"
                      src={diferencial}
                      alt="foto de um consultor"
                    />
                    <div>
                      <div className="fadeRightSlow">
                        <span className="paragraph tag">
                          //NOSSO DIFERENCIAL
                        </span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold lineHeight mb-4">
                            Soluções completas para sua empresa
                          </h3>
                          <p
                            className="paragraph"
                            style={{ lineHeight: "24px" }}
                          >
                            Com mais de 10 anos de experiência e uma equipe
                            altamente especializada em TI e negócios, a
                            <span className="bold">
                              {" "}
                              Acme oferece soluções completas
                            </span>{" "}
                            em consultoria de sistemas de gestão empresarial,
                            impulsionando o crescimento e a
                            <span className="bold">
                              {" "}
                              eficiência do seu negócio.
                            </span>
                          </p>
                          <p
                            className="paragraph"
                            style={{ lineHeight: "24px" }}
                          >
                            Do diagnóstico à implementação, estamos ao seu lado
                            para
                            <span className="bold">
                              {" "}
                              garantir que seu ERP seja uma ferramenta poderosa
                            </span>{" "}
                            de gestão e crescimento.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.medialSection}>
                    <div
                      className={` ${styles.titleMiddleSection} fadeBottomSlow mb-4`}
                    >
                      <div className={`${styles.solutions}`}>
                        <span className="paragraph tag">
                          // A ACME OFERECE
                        </span>
                        <h2 className="title three text-center lineHeight secondary">
                          Benefícios que fazem a diferença
                        </h2>
                      </div>
                    </div>
                    <div className={styles.informativeCards}>
                      <div className={`${styles.cards} fadeBottomSlow`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.topologyStarIcon}
                            alt=""
                            src={topology}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Gestão de RH completa
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Simplifique as rotinas de RH desde a admissão, como
                            folha de pagamento e benefícios.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards} fadeBottomSlow`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={businessplan}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Redução de custos
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Automatize processos, elimine erros e impulsione a
                            produtividade da sua empresa.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards} fadeBottomSlow`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={affiliate}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Decisões mais assertivas
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Relatórios analíticos em tempo real permitem
                            agilidade e assertividade na tomada de decisões
                            estratégicas
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards} fadeBottomSlow`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={pig}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Controle financeiro completo
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Gerencie suas finanças com precisão, desde o Contas
                            a Pagar e receber até o fluxo de caixa.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards} fadeBottomSlow `}>
                        <div className={styles.icon}>
                          <img
                            className={styles.topologyStarIcon}
                            alt=""
                            src={timeline}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Processos integrados
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Conecte as diferentes áreas da sua empresa,
                            otimizando a comunicação e o fluxo de trabalho.
                          </div>
                        </div>
                      </div>
                      <div className={`${styles.cards} fadeBottomSlow`}>
                        <div className={styles.icon}>
                          <img
                            className={styles.businessplanIcon}
                            alt=""
                            src={device}
                          />
                        </div>
                        <div className={styles.textInput}>
                          <div className={styles.gestoDeRh}>
                            Sua empresa na palma da sua mão
                          </div>
                          <div className={styles.simplifiqueAsRotinas}>
                            Acesse informações importantes de qualquer lugar, a
                            qualquer hora, com a mobilidade que você precisa.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.servicesItemRight} d-flex align-items-center rounded-4 gap-4`}
                    style={{ padding: "28px 0px" }}
                  >
                    <div className="fadeLeftSlow">
                      <div style={{ marginBottom: "18px" }}>
                        <span className="paragraph tag">
                          // {ano} ANOS DE EXPERTISE
                        </span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            Por que escolher a Acme?
                          </h3>
                          <p className="paragraph text-20px">
                            Conte com a expertise de uma equipe com ampla
                            experiência em projetos de sistemas de gestão
                            empresarial e sólida atuação em negócios.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        <p className="paragraph text-20px d-flex gap-4 align-items-start">
                          <img src={arrow} alt="icone de seta" />
                          <div className="d-flex flex-column gap-2">
                            <span className="bold">Atendimento dedicado</span>
                            Receba um atendimento personalizado e dedicado às
                            suas necessidades específicas.
                          </div>
                        </p>
                        <p className="paragraph text-20px d-flex gap-4 align-items-start">
                          <img src={arrow} alt="icone de seta" />
                          <div className="d-flex flex-column gap-2">
                            <span className="bold">Metodologia comprovada</span>
                            Implementamos soluções eficazes com base em uma
                            metodologia testada e aprovada.
                          </div>
                        </p>
                      </div>
                    </div>
                    <img
                      className="img-fluid fadeRightSlow"
                      src={expertise}
                      alt="foto de um consultor"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
        {isMobile ? (
          <section id="web" className="fadeRightSlow">
            <div className={styles.sectionConfiancaMb}>
              <div className="container py-5">
                <div className="d-flex flex-column align-items-center">
                  <div
                    className={styles.sectionConfiancaTextMb}
                    style={{
                      maxWidth: "972px",
                      gap: "22px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span className="paragraph tag text-center textDark">
                      // CONFIANÇA E RESULTADOS
                    </span>
                    <h2 className="title three text-center lineHeight text-white">
                      Tenha a Acme como sua aliada na gestão empresarial.
                    </h2>
                  </div>
                </div>
                <div className={styles.sectionConfiancaCardsMb}>
                  <img
                    className={`${styles.imageIconMb} uk-animation-slide-left-medium`}
                    uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 500;"
                    alt="confiança no trabalho, dois empresários apertando as mãos"
                    src={imageConfianca}
                  />
                  <div>
                    <div className="d-flex flex-column gap-4 py-4">
                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-white-important text-20px bold">
                            Implantações
                          </h5>
                          <p className="paragraph text-white-important lineHeight-28 text-white-important">
                            Implantamos sistemas de gestão de forma eficiente,
                            com total integração aos seus processos.
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Atualizações
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Mantemos seu sistema sempre atualizado com as
                            versões mais recentes e novas funcionalidades do
                            ERP.
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Personalização
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Adaptamos o ERP às necessidades específicas da sua
                            empresa, criando soluções personalizadas
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Suporte especializado
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Sua empresar terá controle total das requisições com
                            nosso modelo flexível, adaptado às suas necessidades
                            e totalmente transparente, sem imposição de
                            quantidade mínima de chamados.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="d-flex  "
                      uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 200;"
                    >
                      <ButtonPrimary
                        className="faleconosco paragraph bold responsiveContent text-center"
                        rota="/suporte-operacional"
                        type="button"
                        content={"Suporte Acme"}
                        icon={<IconArrowNarrowRight stroke={2} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section
            id="mobile"
            className={`${styles.sectionConfianca} fadeRightSlow`}
          >
            <div className={styles.divConfianca}>
              <div className={`${styles.pad} container`}>
                <div className="d-flex flex-column align-items-center ">
                  <div className={styles.sectionConfiancaText}>
                    <span className="paragraph tag text-center textDark">
                      // CONFIANÇA E RESULTADOS
                    </span>
                    <h2 className="title three text-center lineHeight text-white breakConsultoria">
                      Tenha a Acme como sua aliada na gestão empresarial.
                    </h2>
                  </div>
                </div>
                <div className={styles.sectionConfiancaCards}>
                  <img
                    className={`${styles.imageIcon} `}
                    alt="confiança no trabalho, dois empresários apertando as mãos"
                    src={imageConfianca}
                  />
                  <div>
                    <div className="d-flex flex-column gap-4 py-4">
                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Implantações
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Implantamos sistemas de gestão de forma eficiente,
                            com total integração aos seus processos.
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Atualizações
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Mantemos seu sistema sempre atualizado com as
                            versões mais recentes e novas funcionalidades do
                            ERP.
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Personalização
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Adaptamos o ERP às necessidades específicas da sua
                            empresa, criando soluções personalizadas
                          </p>
                        </div>
                      </div>

                      <div className={`${styles.cardsConfianca}`}>
                        <img src={arrow} alt="icone de seta" />
                        <div
                          className="d-flex flex-column gap-2  "
                          style={{ marginTop: "-3px" }}
                        >
                          <h5 className="paragraph text-20px bold text-white-important">
                            Suporte especializado
                          </h5>
                          <p className="paragraph lineHeight-28 text-white-important">
                            Sua empresar terá controle total das requisições com
                            nosso modelo flexível, adaptado às suas necessidades
                            e totalmente transparente, sem imposição de
                            quantidade mínima de chamados.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex ">
                      <ButtonPrimary
                        className="faleconosco paragraph bold responsiveContent"
                        href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                        type="button"
                        rota="/suporte-operacional"
                        content={"Suporte Acme"}
                        icon={<IconArrowNarrowRight stroke={2} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className={styles.sectionServices}>
          <div className="container" style={{ gap: "88px" }}>
            <div className="d-flex flex-column" style={{ gap: "82px" }}>
              {isMobile ? (
                <>
                  {/* Versão mobile mudar */}
                  <div
                    className={`${styles.cardMobile} text-align-start fadeLeftSlow`}
                  >
                    <div className={styles.textInfo}>
                      <div className={styles.frameParent}>
                        <span className="d-flex paragraph tag justify-content-start mb-2">
                          //Acme
                        </span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            A parceria ideal para empresas
                          </h3>
                          <p className="paragraph text-20px text-start">
                            Com um time formado por{" "}
                            <b style={{ fontWeight: "500" }}>
                              profissionais altamente especializados
                            </b>{" "}
                            e com ampla experiência em sistemas de gestão, além
                            de expertise em áreas como gestão e RH, oferecemos
                            um atendimento próximo e empático,{" "}
                            <b style={{ fontWeight: "500" }}>
                              focado na construção de relações sólidas e
                              duradouras.
                            </b>
                            <br />
                            <br />
                            Organização, precisão e profundo conhecimento
                            técnico são os pilares da Acme. Entendemos as e
                            atuamos com máxima atenção em todas as etapas do
                            processo — do primeiro contato à entrega final do
                            projeto — sempre superando expectativas e cumprindo
                            prazos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center w-100">
                      <img
                        className="img-fluid"
                        src={timeEmpresa}
                        alt="foto de um consultor"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Versão web */}
                  <div
                    className={`${styles.servicesItemRight} d-flex align-items-center rounded-4 gap-4`}
                    style={{ padding: "28px 0px" }}
                  >
                    <div className="fadeLeftSlow">
                      <div style={{ marginBottom: "18px" }}>
                        <span className="paragraph tag">//ACME</span>
                        <div className="d-flex flex-column gap-2">
                          <h3 className="paragraph text-36px semiBold">
                            A parceria ideal para empresas
                          </h3>
                          <p className="paragraph text-20px">
                            Com um time formado por{" "}
                            <b style={{ fontWeight: "500" }}>
                              profissionais altamente especializados
                            </b>{" "}
                            e com ampla experiência em sistemas de gestão, além
                            de expertise em áreas como gestão e RH, oferecemos
                            um atendimento próximo e empático,{" "}
                            <b style={{ fontWeight: "500" }}>
                              focado na construção de relações sólidas e
                              duradouras.
                            </b>
                            <br />
                            <br />
                            Organização, precisão e profundo conhecimento
                            técnico são os pilares da Acme. Entendemos as e
                            atuamos com máxima atenção em todas as etapas do
                            processo — do primeiro contato à entrega final do
                            projeto — sempre superando expectativas e cumprindo
                            prazos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      className="img-fluid fadeRightSlow"
                      src={timeEmpresa}
                      alt="foto de um consultor"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <NumbersCounters />

        <ConteConosco />

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
