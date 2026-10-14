import React from "react";
import SliderPkg from "react-slick";
const Slider = SliderPkg.default || SliderPkg;
import styles from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../../src/assets/comments/arrow.svg";
import { Link, useLocation } from "react-router-dom";

const SolutionCard = ({ title, description, benefits, button, rota }) => (
  <div className={styles.card}>
    <div className={styles.cardContent}>
      <div className={styles.solutionTags}>
        <div className={styles.textInput}>
          <h3 className="paragraph bold text-20px ">{title}</h3>
          <p className="paragraph lineHeight-32">{description}</p>
        </div>
        <div className={styles.benefitsList}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefit}>
              <img className={styles.icon} alt="" src={arrow} />
              <p className="paragraph mb-0">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
      <Link to={rota} className="btn faleconosco secondaryColor">
        {button}
      </Link>
    </div>
  </div>
);

const CarrosselServicos = () => {
  const sliderRef = React.useRef(null); // Referência para o slider
  const location = useLocation(); // Obter o caminho atual da URL

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  const cardsData = [
    {
      title: "Consultoria em ERP",
      description:
        "Maximize seu sistema com soluções personalizadas que automatizam fluxos de trabalho, agilizam processos como a folha de pagamento e melhoram a eficiência operacional.",
      benefits: [
        "Customização do ERP para sua empresa.",
        "Automação de processos essenciais.",
        "Gestão mais assertiva e otimizada.",
      ],
      button: "Saiba mais...",
      rota: "/consultoria-erp",
    },
    {
      title: "Suporte operacional",
      description:
        "Oferecemos atendimento ágil e eficiente no seu sistemas ERP. Com o GSDC (Gestão Service Desk do Cliente), você controla suas requisições e acompanha o progresso em tempo real.",
      benefits: [
        "Atendimento ágil e prático para suas necessidades.",
        "Total transparência e flexibilidade no suporte.",
        "GSDC: gestão de chamados em tempo real.",
      ],
      button: "Saiba mais...",
      rota: "/suporte-operacional",
    },
    {
      title: "Body Shop – Mão de obra especializada sob demanda",
      description:
        "Reduza até 25% dos custos com pessoal através de mão de obra especializada e gestão completa do desempenho e treinamento contínuo.",
      benefits: [
        "Profissionais sob demanda altamente qualificados.",
        "Redução de custos trabalhistas.",
        "Gerenciamento contínuo de desempenho.",
      ],
      button: "Saiba mais...",
      rota: "/body-shop",
    },
    {
      title: "BPO de Folha de Pagamento",
      description:
        "Economize até 30% com a terceirização da folha de pagamento. Eficiência, previsibilidade e cumprimento de prazos, enquanto sua equipe foca no crescimento do negócio.",
      benefits: [
        "Redução de até 30% em custos de RH.",
        "Melhoria contínua dos processos financeiros.",
        "Conformidade e transparência garantidas.",
      ],
      button: "Saiba mais...",
      rota: "/bpo-folha-de-pagamento",
    },
    {
      title: "Portal RH",
      description:
        "Centralize e otimize a gestão de RH com uma solução integrada ao seu sistema de gestão empresarial. Simplifique o controle de talentos, folha de pagamento e rotinas administrativas com mais eficiência.",
      benefits: [
        "Integração completa com sistemas ERP amplamente utilizados",
        "Automação de processos de RH.",
        "Gestão facilitada e eficiente de pessoas.",
      ],
      button: "Fale com consultor",
      rota: "/contato",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          centerMode: true,
          dots: true,
          arrows: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          centerMode: true,
          dots: true,
          arrows: false,
          autoplay: false,
        },
      },
    ],
  };

  return (
    <div className={`${styles.carouselContainer} container fadeRightSlow`}>
      <Slider ref={sliderRef} {...settings}>
        {cardsData.map((card, index) => (
          <div key={index}>
            <SolutionCard
              title={card.title}
              description={card.description}
              benefits={card.benefits}
              button={
                location.pathname === card.rota
                  ? "Fale com consultor"
                  : card.button
              }
              rota={location.pathname === card.rota ? "/contato" : card.rota}
            />
          </div>
        ))}
      </Slider>
      <div className={styles.customArrows}>
        <button onClick={prevSlide} className={styles.arrowButton}>
          <img
            src={arrow}
            className={styles.arrowLeft}
            alt="Seta para voltar"
          />
        </button>
        <button onClick={nextSlide} className={`${styles.arrowButton}`}>
          <img
            src={arrow}
            className={styles.arrowRight}
            alt="Seta para avançar"
          />
        </button>
      </div>
    </div>
  );
};

export default CarrosselServicos;
