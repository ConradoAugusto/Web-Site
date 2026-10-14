import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import abstract from "../../assets/abstract.webp";
import smallerAndGraeter from "../../assets/smallerAndGraeter.webp";
import empresaTeam from "../../assets/equipe-time.webp";
import team from "../../assets/equipe.png";
import cliente13 from "../../assets/logos/cliente-13.png";
import cliente01 from "../../assets/logos/cliente-01.png";
import cliente02 from "../../assets/logos/support/cliente-02.png";
import cliente06 from "../../assets/logos/support/cliente-06.png";
import cliente09 from "../../assets/logos/cliente-09.webp";
import cliente25 from "../../assets/logos/cliente-25.png";
import cliente07 from "../../assets/logos/cliente-07.png";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { NumbersCounters } from "../../../components/NumbersCounters";
import CommentCarousel from "../../../components/CommentCarousel";
import RouteWrapper from "../../../components/RouteWrapper";
import { useRef } from "react";
import Form from "../../../components/Form";
import WhatsAppIcon from "../../../components/WhatsAppIcon";
import { Helmet } from "react-helmet";

export const AboutPage = () => {
  const carrosselMap = {
    cliente13,
    cliente01,
    cliente02,
    cliente06,
    cliente09,
    cliente25,
    cliente07,
  };

  const contatoRef = useRef(null);

  return (
    <>
      <RouteWrapper
        title={"Sobre Nós"}
        canonical={"https://example.com/sobre"}
        description={
          "Conheça a nossa empresa! Somos referência em tecnologia e BPO, oferecendo soluções inovadoras para transformar o futuro digital de forma inclusiva. Comprometidos com a excelência e o impacto positivo, superamos expectativas e construímos relacionamentos de sucesso com clientes, parceiros e colaboradores."
        }
      ></RouteWrapper>
      <Helmet>
        <title>Sobre Nós</title>
        <meta
          name="description"
          content="Conheça a nossa empresa! Somos referência em tecnologia e BPO, oferecendo soluções inovadoras para transformar o futuro digital de forma inclusiva. Comprometidos com a excelência e o impacto positivo, superamos expectativas e construímos relacionamentos de sucesso com clientes, parceiros e colaboradores."
        />
      </Helmet>
      <DefaultTemplate>
        <OffCanvasContato />
        <WhatsAppIcon />
        <section id="sobre" className={styles.heroSection}>
          <div
            className={`${styles.heroContainer} container gap-5  d-flex flex-row`}
          >
            <div className={`${styles.heroText}  fadeLeftSlow`}>
              <h1 className="title two mb-4">Sobre nós</h1>
              <p className="paragraph textHeroAbout gray-10">
                Somos uma empresa inovadora no setor de tecnologia e BPO,
                impulsionando o progresso e transformando positivamente por meio
                de soluções tecnológicas. Buscamos ser uma referência em
                excelência e impacto positivo, superando as expectativas dos
                nossos clientes e contribuindo para um futuro digital mais
                inclusivo. Nosso compromisso é manter relacionamentos de sucesso
                com clientes, parceiros e colaboradores.
              </p>
            </div>
            <img
              className={`${styles.heroImage} fadeLeftSlow`}
              src={team}
              alt=""
            />
          </div>
          <div className={styles.circleContainer}>
            <img className={styles.circle1} src={Ellipse2} alt="" />
            <img className={styles.circle2} src={Ellipse1} alt="" />
          </div>
        </section>

        <NumbersCounters />

        <section id="historia" className={styles.sectionHistory}>
          <div className={`${styles.container} container`}>
            <div className={styles.vetorContainer}></div>
            <div className={styles.divParagraph}>
              <div>
                <h2 className="title one text-white fadeTopSlow">
                  Nossa história
                </h2>
              </div>
              <div className={styles.paragraphs}>
                <div className={styles.paragraph}>
                  <p className="paragraph gray-8 text-white fadeTopSlow">
                    Em 2009, era fundada a Acme, uma empresa ambiciosa,
                    dedicada a transformar o cenário do Business Process
                    Outsourcing (BPO) com uma abordagem inovadora. Liderada por
                    uma equipe visionária, a Acme começou pequena, mas com
                    grandes aspirações: incorporar as mais recentes tecnologias
                    para garantir a qualidade, eficiência e controle dos
                    processos de negócios de seus clientes. Nos anos seguintes,
                    a Acme solidificou sua reputação como líder em BPO e
                    Portal RH. Essa ferramenta não apenas facilitou a gestão e
                    automação dos processos de negócios, mas também assegurou a
                    eficácia operacional que os clientes tanto valorizavam. A
                    equipe da Acme expandiu-se, atraindo talentos do setor
                    que eram tanto especializados quanto comprometidos com a
                    visão da empresa. Em um movimento estratégico, a Acme
                    associou-se à LogiThink, uma empresa renomada especializada
                    na gestão de ERP e pioneira em RPA (Robotic Process
                    Automation), conhecida como FLUING. Esta parceria foi
                    celebrada com grande otimismo de ambos os lados,
                    representando uma fusão complementar de expertise e
                    tecnologia.
                  </p>
                </div>

                <div className={styles.paragraph}>
                  <p className="paragraph gray-8 text-white fadeTopSlow">
                    Com a parceria consolidada, a Acme não apenas ampliou seu
                    portfólio de serviços, mas também se reposicionou no mercado
                    como uma integradora de soluções tecnológicas. Este novo
                    posicionamento permitiu à empresa atender a uma gama ainda
                    maior de necessidades dos clientes, oferecendo soluções mais
                    completas e integradas que abrangiam desde o BPO tradicional
                    até soluções avançadas de automação e gestão de processos.
                    Olhando para o futuro, a Acme está posicionada não apenas
                    como uma líder em seu setor, mas como uma pioneira na
                    integração de tecnologia e serviços de gestão. Com planos de
                    expandir ainda mais seu alcance global e continuar inovando
                    em suas ofertas, a empresa segue comprometida com a
                    excelência, inovação e, acima de tudo, com o sucesso de seus
                    clientes. A jornada da Acme é um testemunho do poder da
                    inovação, especialização e parcerias estratégicas. Desde sua
                    fundação em 2009 até se tornar uma integradora de soluções
                    líder no mercado, a Acme exemplifica como visão,
                    dedicação e a capacidade de se adaptar às mudanças do
                    mercado são essenciais para o sucesso contínuo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionMission}>
          <div className="container">
            <div className={styles.container}>
              <div className={`${styles.mission} fadeLeftSlow`}>
                <div className={styles.textBussiness}>
                  <h4 className=" title sobre gray-8">
                    “Nosso compromisso é com a
                    <span className="textLight">
                      {""} excelência e a responsabilidade social {""}
                    </span>
                    em todas as nossas iniciativas.”
                  </h4>
                  <p className=" paragraph textHeroAbout gray-8">
                    Acreditamos que o avanço da nossa empresa está
                    intrinsecamente ligado ao desenvolvimento contínuo de nossos
                    colaboradores, clientes e parceiros.
                  </p>
                </div>
                <div className={styles.textMission}>
                  <p className=" paragraph textHeroAbout gray-8">
                    Nossa <strong>missão</strong> é criar tecnologias inovadoras
                    que potencializem o sucesso e crescimento de nosso clientes,
                    oferecendo soluções inteligentes e adaptáveis ás suas
                    necessidades. Compromete a proporcionar um ambiente de
                    constantemente a excelência, a sustentabilidade e a
                    responsabilidade social em tudo o que fazemos, visando
                    contribuir para a evolução.
                  </p>

                  <p className=" paragraph textHeroAbout gray-8">
                    Ser <strong>reconhecida como inovadora no setor</strong> de
                    tecnologia,BPO impulsionando o progresso e transformando
                    positivamente por referência em excelência,sustentabilidade
                    e impacto positivo, superando as expectativas dos nossos
                    clientes e contribuindo para um futuro digital mais
                    inclusivo e sustentável.
                  </p>

                  <p className=" paragraph textHeroAbout gray-8">
                    <strong>
                      Pautamos nossa ações na transparência, ética e
                      responsabilidade,
                    </strong>{" "}
                    construindo relações sólidas com clientes, colaboradores e
                    parceiros baseadas na confiança mútua.
                  </p>
                </div>
              </div>

              <div className={`${styles.commitment} fadeRightSlow`}>
                <div className={`${styles.imgHeader}`}>
                  <img
                    className={styles.smallerAndGraeter}
                    src={smallerAndGraeter}
                    alt=""
                  />
                  <div className={styles.empresaTeam}>
                    <img src={empresaTeam} alt="" />
                  </div>
                </div>
                <div className={styles.imgsBusiness}>
                  <div className={styles.carrosselLogos}>
                    {Object.keys(carrosselMap).map((key) => (
                      <img
                        className="uk-animation-slide-bottom-medium"
                        key={key}
                        src={carrosselMap[key]}
                        alt={`logo da empresa parceiras ${key}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CommentCarousel />
        <br />
        <section ref={contatoRef} className={styles.sectionForms}>
          <div className="secondary-bg text-white">
            <div className="container p-5 d-flex flex-column align-items-center justify-content-center">
              <Form />
            </div>
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};
