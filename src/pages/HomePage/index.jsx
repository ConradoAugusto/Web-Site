import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import styles from "./style.module.scss";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import imgHomeHero from "../../assets/home.png";
import imgHomeHeroMb from "../../assets/homeMb.png";
import portal from "../../assets/portal.png";
import fotoPessoa4 from "../../assets/foto-pessoa-4.png";
import equipe from "../../assets/equipe.png";
import { TagSection } from "../../../components/buttons/TagSection";
import {
  IconLifebuoy,
  IconSettingsQuestion,
  IconUsersGroup,
  IconReceipt2,
  IconChartDots,
} from "@tabler/icons-react";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import { useEffect, useRef, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CommentCarousel from "../../../components/CommentCarousel";
import { NumbersCounters } from "../../../components/NumbersCounters";
import { ConteConosco } from "../../../components/ConteConosco";
import RouteWrapper from "../../../components/RouteWrapper";
import Form from "../../../components/Form";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const HomePage = () => {
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
        title={"Página inicial"}
        canonical={"https://example.com/"}
        description={
          "Somos especialistas em software de RH. Soluções eficientes para a gestão de recursos humanos."
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
                  <TagSection className="text-start" content="ACME" />
                  <h1 className="title secondary one d-flex flex-column lineHeight">
                    <span
                      id="text"
                      className={`textLight lineHeight ${
                        animacao ? "slide-out" : "slide-in"
                      }`}
                    >
                      {textos[textoAtual]}
                    </span>
                    <span className="lineHeight">é o que nos move</span>
                  </h1>
                  <p className="paragraph secondary lineHeight">
                    Unindo{" "}
                    <span className="paragraph semiBold lineHeight">
                      tecnologia, expertise em ERP
                    </span>{" "}
                    e soluções que simplificam a gestão e o dia a dia das
                    empresas.
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
          </div>
        </section>

        <div id="clientes" className="fadeBottomSlow">
          <CarrosselLogosConsultoria />
        </div>

        <section style={{ padding: "0px 0px 64px 0px" }}>
          <div className="container" style={{ gap: "64px" }}>
            <div className={styles.solucoesText}>
              <div className={`${styles.text} fadeBottomSlow three`}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"NOSSAS SOLUÇÕES"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center ">
                  Integramos gestão e tecnologia para otimizar a dinâmica dos
                  negócios
                </h2>
                <p
                  className={`${styles.acreditamos} paragraph secondary lineHeight`}
                >
                  Acreditamos que a prestação de serviço tem 3 pilares
                  fundamentais:{" "}
                  <span className="paragraph semiBold lineHeight">
                    Flexibilidade, Transparência e Serviço de Qualidade
                  </span>
                </p>
              </div>
            </div>
            <div className={`${styles.divServices}`}>
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow four  mb-5">
                          <img
                            className="img-fluid"
                            src={fotoPessoa4}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column lineHeight gap-4 fadeRightSlow four">
                            <p className="paragraph text-start lineHeight ">
                              Com mais de{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                {ano} anos de experiência
                              </span>
                              , a Acme é{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                referência em consultoria e soluções integradas
                                de tecnologia e gestão
                              </span>
                              . Somos parceiros estratégicos de empresas que
                              buscam{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                inovação, eficiência e redução de custos
                              </span>{" "}
                              para se manterem competitivas em um mercado em
                              constante mudança.
                            </p>

                            <div>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" />{" "}
                                Integradora de soluções, serviços completos e
                                customizados.
                              </p>
                              <p className="paragraph d-flex gap-4 text-start ">
                                <img src={arrow} alt="icone de seta" /> Foco em
                                gerar resultados concretos e duradouros.
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
                          className="img-fluid fadeLeftSlow three"
                          src={fotoPessoa4}
                          alt="foto de um consultor"
                        />
                        <div>
                          <div>
                            <div className="d-flex flex-column lineHeight-32 gap-4 fadeRightSlow four">
                              <p className="paragraph  lineHeight-32">
                                Com mais de{" "}
                                <span className="paragraph semiBold lineHeight-32">
                                  {ano} anos de experiência
                                </span>
                                , a Acme é{" "}
                                <span className="paragraph semiBold lineHeight-32">
                                  referência em consultoria e soluções
                                  integradas de tecnologia e gestão
                                </span>
                                . Somos parceiros estratégicos de empresas que
                                buscam{" "}
                                <span className="paragraph semiBold lineHeight-32">
                                  inovação, eficiência e redução de custos
                                </span>{" "}
                                para se manterem competitivas em um mercado em
                                constante mudança.
                              </p>
                              <div>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" />{" "}
                                  Integradora de soluções, serviços completos e
                                  customizados.
                                </p>
                                <p className="paragraph d-flex gap-4 text-start ">
                                  <img src={arrow} alt="icone de seta" /> Foco
                                  em gerar resultados concretos e duradouros.
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

        <section id="solucao">
          <div className="container" style={{ gap: "28px" }}>
            <div className={styles.divCardServices}>
              <div
                id="Consultoria"
                className={`${styles.card} fadeLeftSlow one`}
              >
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconLifebuoy
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Consultoria em ERP
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Maximize seu sistema com soluções personalizadas que
                        automatizam fluxos de trabalho, agilizam processos como
                        a folha de pagamento e melhoram a eficiência
                        operacional.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column" style={{ gap: "14px" }}>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Soluções sob
                      medida com customização de sistemas.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Automação de
                      processos essenciais.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Gestão mais
                      assertiva e otimizada.
                    </p>
                  </div>
                  <ButtonPrimary
                    className="faleconosco secondaryColor paragraph bold responsiveContent text-center"
                    rota="/consultoria-erp"
                    href="javascript:void(0);"
                    type="button"
                    content={"Saiba mais..."}
                  />
                </div>
              </div>

              <div id="Suporte" className={`${styles.card} fadeLeftSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconSettingsQuestion
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Suporte operacional
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Oferecemos atendimento ágil e eficiente no seu sistema
                        ERP. Com o GSDC (Gestão Service Desk do Cliente), você
                        controla suas requisições e acompanha o progresso em
                        tempo real.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column" style={{ gap: "14px" }}>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Atendimento ágil e
                      prático para suas necessidades.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Total
                      transparência e flexibilidade no suporte.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> GSDC: gestão de
                      chamados em tempo real.
                    </p>
                  </div>
                  <ButtonPrimary
                    className="faleconosco secondaryColor paragraph bold responsiveContent text-center"
                    rota="/suporte-operacional"
                    href="javascript:void(0);"
                    type="button"
                    content={"Saiba mais..."}
                  />
                </div>
              </div>

              <div id="BPO" className={`${styles.card} fadeLeftSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconUsersGroup
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        Body Shop – Mão de obra especializada sob demanda
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Reduza até 25% dos custos com pessoal através de mão de
                        obra especializada e gestão completa do desempenho e
                        treinamento contínuo.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column" style={{ gap: "14px" }}>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Profissionais sob
                      demanda altamente qualificados.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Redução de custos
                      trabalhistas.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Gerenciamento
                      contínuo de desempenho.
                    </p>
                  </div>
                  <ButtonPrimary
                    className="faleconosco secondaryColor paragraph bold responsiveContent text-center"
                    rota="/body-shop"
                    href="javascript:void(0);"
                    type="button"
                    content={"Saiba mais"}
                  />
                </div>
              </div>

              <div id="Body" className={`${styles.card} fadeLeftSlow`}>
                <div className="d-flex flex-column" style={{ gap: "40px" }}>
                  <div>
                    <IconReceipt2
                      stroke={2}
                      size={36}
                      color="#20A37F"
                      style={{ marginBottom: "24px" }}
                    />
                    <div className="d-flex flex-column gap-3">
                      <h3 className="paragraph text-20px semiBold lineHeight-32">
                        BPO de Folha de Pagamento
                      </h3>
                      <p className="mb-0 lineHeight-32">
                        Economize até 30% com a terceirização da folha de
                        pagamento. Eficiência, previsibilidade e cumprimento de
                        prazos, enquanto sua equipe foca no crescimento do
                        negócio.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-column" style={{ gap: "14px" }}>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Redução de até 30%
                      em custos de RH.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Melhoria contínua
                      dos processos financeiros.
                    </p>
                    <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                      <img src={arrow} alt="icone de seta" /> Conformidade e
                      transparência garantidas.
                    </p>
                  </div>
                  <ButtonPrimary
                    className="faleconosco secondaryColor paragraph bold responsiveContent text-center"
                    rota="/bpo-folha-de-pagamento"
                    href="javascript:void(0);"
                    type="button"
                    content={"Saiba mais..."}
                  />
                </div>
              </div>
            </div>

            <div
              id="PortalCard"
              className={`${styles.cardPortal} fadeBottomSlow`}
            >
              <div className={styles.cardPortalContent}>
                <div>
                  <IconChartDots
                    stroke={2}
                    size={36}
                    color="#20A37F"
                    style={{ marginBottom: "24px" }}
                  />
                  <div className="d-flex flex-column gap-3">
                    <h3 className="paragraph text-20px semiBold lineHeight-32">
                      Portal RH
                    </h3>
                    <p className="mb-0 lineHeight-32">
                      Centralize e otimize a gestão de RH com uma solução
                      integrada. Simplifique a gestão de talentos, folha de
                      pagamento e rotinas administrativas e mais...
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column" style={{ gap: "14px" }}>
                  <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                    <img src={arrow} alt="icone de seta" /> Integração total com
                    seu ERP.
                  </p>
                  <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                    <img src={arrow} alt="icone de seta" /> Automação de
                    processos de RH.
                  </p>
                  <p className="paragraph  d-flex mb-0 gap-4 text-start ">
                    <img src={arrow} alt="icone de seta" /> Gestão facilitada e
                    eficiente de pessoas.
                  </p>
                </div>
                <ButtonPrimary
                  className={`${styles.buttonPortal} faleconosco secondaryColor paragraph bold responsiveContent text-center`}
                  rota="/portalRH"
                  href="javascript:void(0);"
                  type="button"
                  content={"Saiba mais..."}
                />
              </div>

              <img
                src={portal}
                alt="imagem do portal"
                className={`${styles.imgPortal}`}
              />
              <ButtonPrimary
                className={`${styles.buttonPortalMb} faleconosco secondaryColor paragraph bold responsiveContent text-center`}
                rota="/portalRH"
                href="javascript:void(0);"
                type="button"
                content={"Fale conosco"}
              />
            </div>
          </div>
        </section>

        <section style={{ padding: "64px 0px 64px 0px" }}>
          <div className="container" style={{ gap: "64px" }}>
            <div className={`${styles.solucoesText} fadeBottomSlow three`}>
              <div className={styles.text}>
                <div className="d-flex w-100 justify-content-center">
                  <TagSection content={"QUEM SOMOS"} />
                </div>
                <h2 className="title secondary three d-flex flex-column lineHeight text-center">
                  Nosso compromisso é com a excelência e a inovação
                </h2>
              </div>
            </div>
            <div className={styles.divServices}>
              <div style={{ gap: "88px" }}>
                <div className="d-flex flex-column" style={{ gap: "82px" }}>
                  {isMobile ? (
                    <>
                      {/* Versão mobile */}
                      <div className={styles.cardMobile}>
                        <div className="d-flex justify-content-center w-100 fadeLeftSlow three mb-5">
                          <img
                            className="img-fluid"
                            src={equipe}
                            alt="foto de um consultor"
                          />
                        </div>
                        <div>
                          <div className="d-flex flex-column gap-3 fadeRightSlow three">
                            <p className="paragraph text-start lineHeight-32 ">
                              Na Acme,{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                estamos comprometidos em desenvolver tecnologias
                                inovadoras e adaptáveis
                              </span>{" "}
                              que promovem o sucesso dos nossos clientes.
                              Criamos soluções alinhadas às necessidades de cada
                              empresa, sempre buscando{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                excelência, sustentabilidade e responsabilidade
                                social
                              </span>
                              . Acreditamos que a inovação é uma força
                              transformadora e nos esforçamos para otimizar
                              processos, contribuindo para a evolução digital
                              inclusiva e sustentável dos nossos clientes.{" "}
                            </p>
                            <p className="paragraph text-start lineHeight-32">
                              Nosso objetivo é ser{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                reconhecidos como uma empresa inovadora em
                                tecnologia e BPO
                              </span>
                              , superando as expectativas dos nossos parceiros e{" "}
                              <span className="paragraph semiBold lineHeight-32">
                                promovendo um futuro digital eficiente e
                                sustentável.
                              </span>
                            </p>
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
                        <div className="d-flex flex-column gap-3  fadeLeftSlow two">
                          <p className="paragraph lineHeight-32">
                            Na Acme,{" "}
                            <span className="paragraph semiBold lineHeight-32">
                              estamos comprometidos em desenvolver tecnologias
                              inovadoras e adaptáveis
                            </span>{" "}
                            que promovem o sucesso dos nossos clientes. Criamos
                            soluções alinhadas às necessidades de cada empresa,
                            sempre buscando{" "}
                            <span className="paragraph semiBold lineHeight-32">
                              excelência, sustentabilidade e responsabilidade
                              social
                            </span>
                            . Acreditamos que a inovação é uma força
                            transformadora e nos esforçamos para otimizar
                            processos, contribuindo para a evolução digital
                            inclusiva e sustentável dos nossos clientes.{" "}
                          </p>
                          <p className="paragraph lineHeight-32">
                            Nosso objetivo é ser{" "}
                            <span className="paragraph semiBold lineHeight-32">
                              reconhecidos como uma empresa inovadora em
                              tecnologia e BPO
                            </span>
                            , superando as expectativas dos nossos parceiros e{" "}
                            <span className="paragraph semiBold lineHeight-32">
                              promovendo um futuro digital eficiente e
                              sustentável.
                            </span>
                          </p>
                        </div>
                        <img
                          className="img-fluid fadeRightSlow two"
                          src={equipe}
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
