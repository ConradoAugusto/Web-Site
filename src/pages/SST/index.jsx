import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import heroSESMT from "../../assets/SESMT/hero.png";
import fotoPessoa5 from "../../assets/SESMT/foto-pessoa-5.jpg";
import { useEffect, useState } from "react";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import {
  IconChecklist,
  IconCircleCheck,
  IconClipboardData,
  IconClockHour3,
  IconEyeSearch,
  IconGavel,
  IconRefresh,
  IconShield,
  IconTrendingDown,
  IconUsers,
  IconUserScreen,
} from "@tabler/icons-react";
import { CarrosselLogosSESMT } from "../../../components/CarrosselLogosSESMT";
import FormSESMT from "../../../components/FormSESMT";
import { fetchRoleta, updateRoleta } from "../../api.js"; // Ajuste conforme sua implementação
import RouteWrapper from "../../../components/RouteWrapper/index.jsx";
import { TagSection } from "../../../components/buttons/TagSection/index.jsx";
import { FAPSimulator } from "../../../components/FAPSimulator/index.jsx";

export const SST = () => {
  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.style.setProperty("background", "#272e48", "important");
    }
  }, []);

  // ✅ Ajuste para evitar erro no SSR (Next.js)
  const [isMobileHome, setIsMobileHome] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [imgSrc, setImgSrc] = useState(heroSESMT);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth < 768;
        setIsMobileHome(isMobile);
        setImgSrc(heroSESMT);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [comercial, setComercial] = useState("00000000000");

  // ✅ Função que busca e alterna número da roleta
  const getComercialNumber = async () => {
    try {
      const roleta = await fetchRoleta();
      let valorEnviarPara = roleta[0]["valor"];

      // Alterna entre 0 e 1
      valorEnviarPara = valorEnviarPara === 0 ? 1 : 0;

      // Atualiza roleta
      await updateRoleta(valorEnviarPara);

      // Define número com base no valor da roleta
      const telefone = valorEnviarPara === 0 ? "00000000000" : "00000000000";
      setComercial(telefone);
    } catch (error) {
      console.error("Erro ao buscar o valor da roleta:", error);
    }
  };

  // ✅ Carrega o número ao montar
  useEffect(() => {
    getComercialNumber();
  }, []);

  const whatsappLink = `https://api.whatsapp.com/send?phone=+55${comercial}&text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20SESMT%20da%20Acme.`;

  return (
    <>
      <RouteWrapper
        title={"Acme - SESMT"}
        canonical={"https://example.com/sst"}
        description={
          "Profissionais capacitados para fortalecer a Segurança do Trabalho conforme suas necessidades."
        }
      ></RouteWrapper>
      <DefaultTemplate>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section>
          <div className={styles.hero}>
            <div className=" d-flex justify-content-center align-items-center fadeLeftSlow">
              <div>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex w-100 justify-content-start">
                    <TagSection content={"Segurança do Trabalho"} />
                  </div>
                  <h1 className="title lineHeight text-white one d-flex flex-column">
                    Reduza Tributos, <br />
                    Evite Multas e{" "}
                    <span className="textDark text-nowrap">
                      Proteja Sua Empresa
                    </span>
                  </h1>
                  <p className="paragraph lineHeight-28 text-white">
                    Auditoria e Gestão Inteligente de SST com Economia Real e
                    Blindagem Jurídica
                  </p>
                </div>
                <div className="d-flex gap-3 align-items-center flex-wrap">
                  <a
                    href="#formSESMT"
                    className="faleconosco paragraph bold responsiveContent text-center"
                    type="button"
                    rel="noopener noreferrer"
                  >
                    Quero Proteger Minha Empresa
                  </a>
                  <a
                    href={whatsappLink}
                    className="btnFeira paragraph bold responsiveContent text-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
            <div className="w-100 p-4">
              <img
                className="img-fluid fadeRightSlow"
                src={imgSrc}
                alt="Consultor Acme"
              />
            </div>
          </div>
        </section>

        <section className="secondary-bg d-flex flex-column text-center align-items-center">
          <div
            className="d-flex text-center gap-3 flex-column"
            style={{ maxWidth: "1000px" }}
          >
            <h5 className="title three w-100 text-center text-white">
              Você sente que a segurança do trabalho virou uma{" "}
              <span className="destaqueItalico">bomba-relógio</span>?
            </h5>
            <p className="paragraph text-center lineHeight p-2 text-white">
              Na Acme, nosso propósito é proteger seu negócio com clareza,
              economia e tranquilidade.
            </p>
          </div>
          <div className="container">
            <div className={styles.cardsBeneficiosSESMT}>
              <div className={`${styles.cards} fadeLeftSlow`}>
                <div className={`${styles.iconProposito} ${styles.red}`}>
                  <IconTrendingDown stroke={2} size={32} color="#ee2327" />
                </div>
                <div className={styles.textInput}>
                  <h5 className={styles.redusoDeCustos}>
                    Multas e Penalidades
                  </h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    Documentos mal elaborados custam caro e podem resultar em
                    multas pesadas.
                  </p>
                </div>
              </div>

              <div className={`${styles.cards} fadeTopSlow`}>
                <div className={`${styles.iconProposito} ${styles.yellow}`}>
                  <IconClockHour3 stroke={2} size={32} color="#ed6d2f" />
                </div>
                <div className={styles.textInput}>
                  <h5 className={styles.redusoDeCustos}>Tempo Perdido</h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    Afastamentos desnecessários impactam diretamente na
                    produtividade.
                  </p>
                </div>
              </div>

              <div className={`${styles.cards} fadeRightSlow`}>
                <div className={`${styles.iconProposito} ${styles.blue}`}>
                  <IconShield stroke={2} size={32} color="#2477e7" />
                </div>
                <div className={styles.textInput}>
                  <h5 className={styles.redusoDeCustos}>Falta de Proteção</h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    Sem conformidade adequada, sua empresa fica vulnerável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container d-flex flex-column justify-content-center align-items-center gap-3">
          <div className="text-center" style={{ maxWidth: "1000px" }}>
            {" "}
            <h2 className="title three text-white">
              O FAP da sua empresa está custando mais do que deveria?
            </h2>
            <p className="paragraph text-white">
              A divulgação do FAP 2026 se aproxima. Descubra o impacto
              financeiro real na sua empresa e saiba como a Acme pode ajudar
              a otimizar seus custos.
            </p>
          </div>
          <div className="text-center text-white ">
            <h3 className="title four text-white">O que é o FAP?</h3>
            <p className="paragraph text-white" style={{ maxWidth: "750px" }}>
              O Fator Acidentário de Prevenção (FAP) é um índice usado para
              multiplicar a sua contribuição previdenciária. Ele mede o
              desempenho da sua empresa em saúde e segurança do trabalho,
              comparando-a com outras do mesmo setor.
            </p>
          </div>

          <div className="container">
            <div className={styles.cardsBeneficiosSESMT}>
              <div className={`${styles.cards} fadeLeftSlow`}>
                <div className={styles.textInput}>
                  <h5 className="title five">RAT</h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    A alíquota de Riscos Ambientais do Trabalho (1%, 2% ou 3%)
                    definida pelo seu CNAE.
                  </p>
                </div>
              </div>

              <div className={`${styles.cards} fadeTopSlow`}>
                <div className={styles.textInput}>
                  <h5 className="title five">FAP</h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    O multiplicador (de 0,5 a 2,0) aplicado sobre o RAT, baseado
                    no seu histórico de acidentes.
                  </p>
                </div>
              </div>

              <div className={`${styles.cards} fadeRightSlow`}>
                <div className={styles.textInput}>
                  <h5 className="title five text-center">
                    RAT Ajustado ou GILRAT
                  </h5>
                  <p className={styles.implementamosEstratgiasQue}>
                    O resultado final (RAT x FAP) que define sua contribuição
                    real. Um FAP alto pode dobrar seus custos!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FAPSimulator />
        </div>

        <section
          className="mt-5"
          style={{
            background: `linear-gradient(180deg, #118A6B 0%, #272E48 80%)`,
          }}
        >
          <div className="d-flex flex-column" style={{ padding: "3rem" }}>
            <div className="container py-5">
              <h5 className="title three w-100 text-center text-white">
                O que você recebe:
              </h5>
              <div className={styles.cardsOQueRecebe}>
                <div
                  // style={{ background: "#e0f2ff" }}
                  className={`${styles.cards} fadeLeftSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.red}`}>
                    <IconCircleCheck stroke={2} size={64} color="#0b5ee8" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Auditoria e Revisão Técnica
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Análise completa dos documentos legais da sua empresa.
                    </p>
                  </div>
                </div>

                <div
                  // style={{ background: "#e5fdf0" }}
                  className={`${styles.cards}   fadeTopSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.yellow}`}>
                    <IconUsers stroke={2} size={64} color="#00a53c" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Gestão de Eventos SST no eSocial
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Conformidade total com as exigências do eSocial.
                    </p>
                  </div>
                </div>

                <div
                  // style={{ background: "#fbeeff" }}
                  className={`${styles.cards}   fadeRightSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.blue}`}>
                    <IconChecklist stroke={2} size={64} color="#a915e9" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Análise Estratégica de Riscos Trabalhistas
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Identificação de riscos críticos e impactos legais para decisões mais seguras e preventivas.
                    </p>
                  </div>
                </div>

                <div
                  // style={{ background: "#fffcdf" }}
                  className={`${styles.cards}   fadeLeftSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.blue}`}>
                    <IconTrendingDown stroke={2} size={64} color="#e49210" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Redução de FAP/RAT e Tributos
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Estratégias comprovadas para reduzir custos tributários.
                    </p>
                  </div>
                </div>

                <div
                  // style={{ background: "#ffefef" }}
                  className={`${styles.cards}   fadeBottomSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.blue}`}>
                    <IconShield stroke={2} size={64} color="#e90f15" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Blindagem Jurídica
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Proteção completa contra multas e penalidades
                    </p>
                  </div>
                </div>

                <div
                  // style={{ background: "#e7eefe" }}
                  className={`${styles.cards}   fadeRightSlow`}
                >
                  <div className={`${styles.iconProposito} ${styles.blue}`}>
                    <IconUserScreen stroke={2} size={64} color="#573cec" />
                  </div>
                  <div className={styles.textInput}>
                    <h5 className={styles.redusoDeCustos}>
                      Gestão de SST
                    </h5>
                    <p className={styles.implementamosEstratgiasQue}>
                      Oferecemos suporte técnico especializado em SST.
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mt-5 gap-2 justify-content-center">
                <h2 className="title three text-white">
                  Sua Jornada em 4 Etapas:
                </h2>

                <div className={styles.jornada}>
                  <div className={styles.card}>
                    <div
                      className={`${styles.badge} mb-3`}
                      style={{ background: "#e7eefe" }}
                    >
                      <IconEyeSearch stroke={2} size={32} color="#0b5ee8" />
                    </div>
                    <h3 className="title five text-white">
                      Diagnóstico Profundo
                    </h3>
                    <p className="text-white">
                      Análise completa da situação atual da sua empresa
                    </p>
                  </div>
                  <div className={styles.card}>
                    <div
                      className={`${styles.badge} mb-3`}
                      style={{ background: "#fffcdf" }}
                    >
                      <IconClipboardData stroke={2} size={32} color="#e49210" />
                    </div>
                    <h3 className="title five text-white">
                      Correções Técnicas
                    </h3>
                    <p className="text-white">
                      Implementação das melhorias necessárias
                    </p>
                  </div>
                  <div className={styles.card}>
                    <div
                      className={`${styles.badge} mb-3`}
                      style={{ background: "#e5fdf0" }}
                    >
                      <IconGavel stroke={2} size={32} color="#00a53c" />
                    </div>
                    <h3 className="title five text-white">Gestão do eSocial</h3>
                    <p className="text-white">
                      Conformidade total com as exigências legais
                    </p>
                  </div>
                  <div className={styles.card}>
                    <div
                      className={`${styles.badge} mb-3`}
                      style={{ background: "#ffefef" }}
                    >
                      <IconRefresh stroke={2} size={32} color="#e90f15" />
                    </div>
                    <h3 className="title five text-white">
                      Otimização Contínua
                    </h3>
                    <p className="text-white">
                      Monitoramento e melhorias constantes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div id="clientes">
          <CarrosselLogosSESMT />
        </div>

        <section
          className={`${styles.quemSomos} container`}
          style={{
            borderRadius: "18px",
            position: "relative",
            background: `linear-gradient(46deg, #118A6B 0%, #272E48 71.47%)`,
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            flexDirection: "column",
          }}
        >
          <div className={`${styles.conte}`}>
            <div className={styles.conteText}>
              <h2 className="title three text-white">Quem é a Acme?</h2>
              <p className="paragraph text-white mb-4">
                Especialistas com mais de 15 anos em SST. Já salvamos milhões
                para empresas de todos os portes e queremos fazer o mesmo por
                você.
              </p>
              <div className="d-flex gap-2 flex-column text-start">
                <p className="paragraph bold  text-white">
                  <IconCircleCheck stroke={2} /> Mais de 15 anos de experiência
                </p>
                <p className="paragraph bold  text-white">
                  <IconCircleCheck stroke={2} /> Milhões economizados para
                  clientes
                </p>
                <p className="paragraph bold  text-white">
                  <IconCircleCheck stroke={2} /> Empresas de todos os portes
                  atendidas
                </p>
                <p className="paragraph bold  text-white">
                  <IconCircleCheck stroke={2} /> Equipe especializada e
                  certificada
                </p>
              </div>
            </div>
            <div className={styles.cta}>
              <img
                src={fotoPessoa5}
                alt="Especialista - Engenharia de Segurança do Trabalho"
              />
            </div>
          </div>
        </section>

        <section className={styles.sectionForms}>
          <div id="formSESMT" className="secondary-bg text-white">
            <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
              <FormSESMT />
            </div>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};
