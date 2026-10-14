import styles from "./style.module.scss";
import { useRef, useEffect, useState } from "react";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import {
  IconUsersPlus,
  IconApps,
  IconPencilBolt,
  IconBolt,
  IconShieldHalf,
  IconTimelineEvent,
  IconTargetArrow,
  IconCoinOff,
  IconDeviceAnalytics,
} from "@tabler/icons-react";
import PortalLight_Bcg from "../../assets/PortalImg/theme/portalLight.png";
import portalLight_element from "../../assets/PortalImg/theme/portalLight_element.png";
import PortalDark_Bcg from "../../assets/PortalImg/theme/portalDark.png";
import PortalDark_element from "../../assets/PortalImg/theme/PortalDark_element.png";
import admissao from "../../assets/videos/admissao.mp4";
import app from "../../assets/videos/app.mp4";
import vaga from "../../assets/videos/Ferias.mp4";
import assinaturas from "../../assets/videos/Ferias.mp4";
import epi from "../../assets/videos/EPI.mp4";
import registro from "../../assets/videos/abono.mp4";
import admissao_Sm from "../../assets/PortalImg/admissao.webp";
import appWeb from "../../assets/PortalImg/app.webp";
import app_Sm from "../../assets/PortalImg/app_Sm.webp";
import agilidade_Sm from "../../assets/PortalImg/registro.webp";
import ged_Sm from "../../assets/PortalImg/assinaturas.webp";
import epi_Sm from "../../assets/PortalImg/epi.webp";
import registro_Sm from "../../assets/PortalImg/abono.webp";
import smartphone from "../../assets/smartphone.webp";
import AccordionItem from "../../../components/AccordionItem";
import ProgressBar from "../../../components/ProgressBar";
import { PortalVideo } from "../../../components/PortalVideo";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import ParallaxComponent from "../../../components/ParallaxComponent";
import CommentCarousel from "../../../components/CommentCarousel";
import AccordionItemSM from "../../../components/AccordionItemSM";
import { TagSection } from "../../../components/buttons/TagSection";
import { CarrosselLogosConsultoria } from "../../../components/CarrosselLogosConsultoria";
import CarrosselServicos from "../../../components/CarrosselServicos";
import RouteWrapper from "../../../components/RouteWrapper";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import Form from "../../../components/Form";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const PortalRHPage = () => {
  const [currentTheme, setCurrentTheme] = useState("PortalLight");
  const [currentImage, setCurrentImage] = useState("admissao");
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [progress, setProgress] = useState(0);
  const intervalTime = 10000;
  const totalAccordions = 6;
  const progressInterval = 100;

  const handleAccordionClick = (index) => {
    setActiveAccordion(index);
    setProgress(0);
  };

  useEffect(() => {
    if (!activeAccordion) return;

    const totalIntervals = intervalTime / progressInterval;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / totalIntervals;
        if (newProgress >= 100) {
          const nextAccordion = (activeAccordion % totalAccordions) + 1;
          setActiveAccordion(nextAccordion);
          return 0;
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [intervalTime, progressInterval, activeAccordion, totalAccordions]);

  useEffect(() => {
    const imageMapKeys = [
      "admissao",
      "app",
      "agilidade",
      "ged",
      "epi",
      "registro",
    ];
    setCurrentImage(imageMapKeys[activeAccordion - 1]);
  }, [activeAccordion]);

  const handleImageChange = (imageId) => {
    setCurrentImage(imageId);
  };

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
  };

  const imageMap = {
    admissao,
    app,
    agilidade: vaga,
    ged: assinaturas,
    epi,
    registro,
  };

  const videoRefs = useRef([]);

  useEffect(() => {
    const currentVideoRef = videoRefs.current.find(
      (ref) => ref && ref.dataset.key === currentImage
    );

    if (currentVideoRef && window.innerWidth > 1000) {
      currentVideoRef.play();
    } else if (currentVideoRef) {
      currentVideoRef.pause();
      currentVideoRef.currentTime = 0;
    }
  }, [currentImage, videoRefs]);

  const themeMap = {
    PortalLight: {
      background: PortalLight_Bcg,
      foreground: portalLight_element,
    },
    PortalDark: {
      background: PortalDark_Bcg,
      foreground: PortalDark_element,
    },
  };

  const contatoRef = useRef(null);

  return (
    <>
      <RouteWrapper
        title={"Portal RH – Acme"}
        canonical={"https://example.com/portalRH"}
        description={
          "Especialistas em RH e Departamento Pessoal com atuação em todo o Brasil. Oferecemos terceirização de folha de pagamento, Ponto, E-Social e Portal Web, além de implantação, manutenção, auditoria trabalhista e gestão de benefícios."
        }
      ></RouteWrapper>
      <Helmet>
        <title>Portal RH – Acme</title>
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
            className={`${styles.heroContainer} container  d-flex flex-row  uk-animation-slide-left-medium`}
          >
            <div className={`${styles.heroText} text-center`}>
              <TagSection className="text-center" content="PORTAL RH" />
              <h1 className="title secondary one mt-3 text-center fadeBottomSlow">
                Sua <span className="textLight">gestão de RH</span>
                <br />
                <span className="textLight">completa</span> em uma única
                plataforma
              </h1>
              <div className={styles.paragraphSlogan}>
                <p className="paragraph medium lineHeight fadeBottomSlow">
                  Otimize processos, aumente a produtividade e transforme a sua
                  gestão com tecnologia, inovação e estratégia.
                </p>
              </div>
              <div className="d-flex gap-3">
                <Link
                  className="faleconosco dark paragraph bold responsiveContent text-center fadeBottomSlow"
                  to={"/planos-portal-rh"}
                >
                  Ver planos
                </Link>
                <ButtonPrimary
                  className="faleconosco paragraph bold responsiveContent text-center fadeBottomSlow"
                  href="https://api.whatsapp.com/send?phone=5500000000000&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
                  type="button"
                  content={"Fale com o consultor"}
                />{" "}
              </div>
            </div>
          </div>
        </section>

        <div id="clientes" className={styles.sectionClientes}>
          <CarrosselLogosConsultoria className={"border border-0"} />
        </div>

        <ParallaxComponent
          currentTheme={currentTheme}
          themeMap={themeMap}
          styles={styles}
          handleThemeChange={handleThemeChange}
        />

        <section id="solucao" className={styles.sectionConheça}>
          <div className={styles.sectionConheçaBorder}>
            <div className="container">
              <div className="w-100 text-center my-5">
                <TagSection content={"CONHEÇA NOSSO PORTAL RH"} />
              </div>
              <div className="d-flex gap-3 mt-3  ">
                <div
                  className="accordion z-3 "
                  style={{ width: "35%" }}
                  id="accordionDiv"
                >
                  <AccordionItem
                    data={"delay: 100;"}
                    icon={<IconApps stroke={2} />}
                    onClick={() => {
                      handleImageChange("app");
                      handleAccordionClick(2);
                    }}
                    isOpen={activeAccordion === 2}
                    key={2}
                    id={"app"}
                    header={"App de Controle de Ponto"}
                    body={
                      "Gerencie o tempo com facilidade em qualquer lugar. Nosso app de ponto com localização permite que você monitore e registre presenças com precisão."
                    }
                  />
                  <AccordionItem
                    data={"delay: 50;"}
                    icon={<IconUsersPlus stroke={2} />}
                    onClick={() => {
                      handleImageChange("admissao");
                      handleAccordionClick(1);
                    }}
                    isOpen={activeAccordion === 1}
                    key={1}
                    id={"admissao"}
                    header={"Admissão digital descomplicada"}
                    body={
                      "Modernize suas admissões sem estresse. Diga adeus aos formulários em papel e dê as boas-vindas a uma entrada digital intuitiva."
                    }
                  />

                  <AccordionItem
                    data={"delay: 150;"}
                    icon={<IconPencilBolt stroke={2} />}
                    onClick={() => {
                      handleImageChange("agilidade");
                      handleAccordionClick(3);
                    }}
                    isOpen={activeAccordion === 3}
                    key={3}
                    id={"agilidade"}
                    header={"Agilidade em requisições"}
                    body={
                      "Agilize suas solicitações com eficiência. Simplifique o processo para uma operação sem obstáculos."
                    }
                  />
                  <AccordionItem
                    data={"delay: 200;"}
                    icon={<IconBolt stroke={2} />}
                    onClick={() => {
                      handleImageChange("ged");
                      handleAccordionClick(4);
                    }}
                    isOpen={activeAccordion === 4}
                    key={4}
                    id={"ged"}
                    header={"GED com assinaturas eletrônicas"}
                    body={
                      "Gerencie documentos de forma simples e segura. Assine digitalmente e gerencie arquivos de maneira intuitiva."
                    }
                  />
                  <AccordionItem
                    data={"delay: 250;"}
                    icon={<IconShieldHalf stroke={2} />}
                    onClick={() => {
                      handleImageChange("epi");
                      handleAccordionClick(5);
                    }}
                    isOpen={activeAccordion === 5}
                    key={5}
                    id={"epi"}
                    header={"EPI Personalizado"}
                    body={
                      "Proteja sua equipe com precisão e facilidade. Personalize a entrega e o controle de EPIs para garantir segurança no trabalho."
                    }
                  />
                  <AccordionItem
                    data={"delay: 300;"}
                    icon={<IconUsersPlus stroke={2} />}
                    onClick={() => {
                      handleImageChange("registro");
                      handleAccordionClick(6);
                    }}
                    isOpen={activeAccordion === 6}
                    key={6}
                    id={"registro"}
                    header={"Registro de atestados simplificado"}
                    body={
                      "Gerencie atestados médicos com praticidade. Simplifique o lançamento e controle de atestados de forma eficiente e organizada."
                    }
                  />
                </div>
                <div className="w-50">
                  {Object.keys(imageMap).map((key, index) => (
                    <div
                      key={key}
                      style={{
                        display: currentImage === key ? "block" : "none",
                      }}
                    >
                      {key === "app" ? (
                        <div style={{ position: "relative", left: "30px" }}>
                          <div className={styles.smartphone}>
                            <img
                              src={smartphone}
                              alt="Celular"
                              style={{
                                position: "absolute",
                                zIndex: 3,
                                height: "532px",
                              }}
                            />
                            <PortalVideo
                              imageMap={imageMap[key]}
                              ref={(el) => (videoRefs.current[index] = el)}
                              className={`${styles.demoApp} `}
                              data-key={key}
                            />
                          </div>
                          <img
                            src={appWeb}
                            alt="Celular"
                            style={{
                              position: "absolute",
                              top: "-8px",
                              left: "-3%",
                              zIndex: 1,
                              height: "750px",
                              border: "19px solid var(--colorSecondary)",
                              borderRadius: "38px",
                            }}
                          />
                        </div>
                      ) : (
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          data-key={key}
                          className={`${styles.demo}`}
                          muted
                          style={{ display: "block" }}
                        >
                          <source src={imageMap[key]} type="video/mp4" />
                        </video>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solucao_sm" className={styles.sectionConheça_Sm}>
          <div className="container ">
            <div className="w-100 text-center my-5">
              <TagSection content={"CONHEÇA NOSSO PORTAL RH"} />
            </div>
            <div className="d-flex flex-column gap-3 mt-3">
              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  header={"App de Controle de Ponto"}
                  body={
                    <>
                      <p>
                        Gerencie o tempo com facilidade em qualquer lugar. Nosso
                        app de ponto com localização permite que você monitore e
                        registre presenças com precisão.
                      </p>
                      <ButtonPrimary
                        className="faleconosco paragraph bold responsiveContent text-center"
                        href="javascrip:void(0);"
                        type="button"
                        rota="/controle-de-ponto"
                        content={"Saiba mais..."}
                      />
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={app_Sm} alt="" />
                </div>
              </div>

              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  onClick={() => {
                    handleImageChange("admissao");
                    handleAccordionClick(1);
                  }}
                  isOpen={activeAccordion === 1}
                  key={1}
                  id={"admissao"}
                  header={"Admissão digital descomplicada"}
                  body={
                    <>
                      <p>
                        Modernize suas admissões sem estresse. Diga adeus aos
                        formulários em papel e dê as boas-vindas a uma entrada
                        digital intuitiva.
                      </p>
                      {activeAccordion === 1 && <ProgressBar />}
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={admissao_Sm} alt="" />
                </div>
              </div>

              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  onClick={() => {
                    handleImageChange("agilidade");
                    handleAccordionClick(3);
                  }}
                  isOpen={activeAccordion === 3}
                  key={3}
                  id={"agilidade"}
                  header={"Agilidade em requisições"}
                  body={
                    <>
                      <p>
                        Agilize suas solicitações com eficiência. Simplifique o
                        processo para uma operação sem obstáculos.
                      </p>
                      {activeAccordion === 3 && <ProgressBar />}
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={agilidade_Sm} alt="" />
                </div>
              </div>

              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  onClick={() => {
                    handleImageChange("ged");
                    handleAccordionClick(4);
                  }}
                  isOpen={activeAccordion === 4}
                  key={4}
                  id={"ged"}
                  header={"GED com assinaturas eletrônicas"}
                  body={
                    <>
                      <p>
                        Gerencie documentos de forma simples e segura. Assine
                        digitalmente e gerencie arquivos de maneira intuitiva.
                      </p>
                      {activeAccordion === 3 && <ProgressBar />}
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={ged_Sm} alt="" />
                </div>
              </div>

              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  onClick={() => {
                    handleImageChange("epi");
                    handleAccordionClick(5);
                  }}
                  isOpen={activeAccordion === 5}
                  key={5}
                  id={"epi"}
                  header={"EPI Personalizado"}
                  body={
                    <>
                      <p>
                        Proteja sua equipe com precisão e facilidade.
                        Personalize a entrega e o controle de EPIs para garantir
                        segurança no trabalho.
                      </p>
                      {activeAccordion === 3 && <ProgressBar />}
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={epi_Sm} alt="" />
                </div>
              </div>

              <div className="accordion  d-flex flex-column-reverse">
                <AccordionItemSM
                  className={`${styles.btnTitleAccordion} show`}
                  onClick={() => {
                    handleImageChange("registro");
                    handleAccordionClick(6);
                  }}
                  isOpen={activeAccordion === 6}
                  key={6}
                  id={"registro"}
                  header={"Registro de atestados simplificado"}
                  body={
                    <>
                      <p>
                        Gerencie atestados médicos com praticidade. Simplifique
                        o lançamento e controle de atestados de forma eficiente
                        e organizada.
                      </p>
                      {activeAccordion === 3 && <ProgressBar />}
                    </>
                  }
                />
                <div className={styles.imgSmall}>
                  <img src={registro_Sm} alt="" />
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
                        Nosso serviço integra-se ao Portal RH Acme,
                        proporcionando visibilidade completa dos processos e um
                        fluxo de trabalho automatizado, para que as informações
                        fiquem sempre atualizadas e centralizadas.
                      </p>
                    </div>
                  </div>
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
