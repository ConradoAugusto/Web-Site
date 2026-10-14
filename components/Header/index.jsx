import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import LogoEmpresa from "../../src/assets/logo.webp";
import LogoEmpresa1 from "../../src/assets/logo1.png";
import { IconChevronDown } from "@tabler/icons-react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import iconArrow from "../../src/assets/GRAND.webp";

export const Header = () => {
  const [solucaoId, setSolucaoId] = useState("#solucao");
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      const video = document.getElementById("video");
      if (video) video.src = "https://www.youtube.com/";
    }
  }, [isOpen]);

  const [clickedButton, setClickedButton] = useState(false);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest("#dropdownMenuButton")
    ) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setClickedButton(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const updateSolucaoId = () => {
      if (window.innerWidth < 1000) {
        setSolucaoId("#solucao");
      } else {
        setSolucaoId("#solucao");
      }
    };

    updateSolucaoId();
    window.addEventListener("resize", updateSolucaoId);

    return () => {
      window.removeEventListener("resize", updateSolucaoId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSolucaoClick = (e) => {
    e.preventDefault();

    if (pathname !== "/") {
      navigate("/");
    }
  };

  window.addEventListener("scroll", function () {
    const menuBars = document.querySelectorAll("#line");

    if (window.scrollY > 50) {
      menuBars.forEach((bar) => (bar.style.background = "#272e48"));
    } else {
      menuBars.forEach((bar) => (bar.style.background = "#fff"));
    }
  });

  const handleLinkClick = (e, id) => {
    if (id !== "top") {
      e.preventDefault();
    }

    if (pathname === "/" && id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetSection = document.getElementById(id);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 75,
        behavior: "smooth",
      });
    } else {
      navigate("/#" + id);
    }

    setTimeout(() => {
      setMenuOpen(false);
      setIsOpen(false);
    }, 200);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Seleciona os elementos pelo atributo personalizado
    const dropdownButtons = document.querySelectorAll("[data-dropdown]");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        dropdownButtons.forEach(
          (button) => button.classList.add(styles.scrolled) // Adiciona a classe de módulo CSS
        );
      } else {
        dropdownButtons.forEach(
          (button) => button.classList.remove(styles.scrolled) // Remove a classe de módulo CSS
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove o listener ao desmontar
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${
          location.pathname.includes("segurança")
            ? styles.default
            : scrolled
            ? styles.scrolled
            : styles.default
        } ${
          location.pathname === "/suporte-operacional"
            ? styles.noBorder
            : styles.whiteBorder
        }`}
      >
        <div className="d-flex justify-content-center">
          <ul
            className={`${styles.dropdownMenuH} linkNavbar  dropdown-menu ${
              isOpen ? "show" : ""
            }`}
            aria-labelledby="dropdownMenuButton"
            ref={dropdownRef}
          >
            <div className={styles.containDrop}>
              <div className={styles.servicosDiv}>
                <div>
                  <div className={styles.iconeMenu}>
                    <img src={iconArrow} alt="seta" />
                    <h3 className="paragraph semiBold mb-0">
                      Suporte Operacional
                    </h3>
                  </div>
                  <div className={styles.servicosItens}>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH "
                      to="/consultoria-erp"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        Consultoria do seu ERP
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Apoio especializado para otimizar sua implementação
                        </p>
                      </li>
                    </Link>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/suporte-operacional"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        Suporte Operacional
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Assistência contínua para garantir o máximo desempenho
                          do seu sistema operacional.
                        </p>
                      </li>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className={styles.iconeMenu}>
                    <img src={iconArrow} alt="seta" />
                    <h3 className="paragraph semiBold mb-0">Produtos</h3>
                  </div>
                  <div className={styles.servicosItens}>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/portalRH"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        Portal RH
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Gestão completa de recursos humanos, simplificada em
                          um só lugar.
                        </p>
                      </li>
                    </Link>

                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/controle-de-ponto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        App de ponto
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Controle de jornada de trabalho fácil e eficiente para
                          sua equipe.
                        </p>
                      </li>
                    </Link>
                  </div>
                </div>

                <div>
                  <div className={styles.iconeMenu}>
                    <img src={iconArrow} alt="seta" />
                    <h3 className="paragraph semiBold mb-0">Outras Soluções</h3>
                  </div>
                  <div className={styles.servicosItensProduto}>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/bpo-folha-de-pagamento"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        BPO de folha de pagamento
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Externalização da folha de pagamento com precisão e
                          compliance.
                        </p>
                      </li>
                    </Link>

                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/body-shop"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        Body Shop
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Profissionais qualificados para integrar sua equipe
                          conforme suas necessidades.
                        </p>
                      </li>
                    </Link>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/remuneracao"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        Remuneração
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Módulo de remuneração desenvolvido para organizar
                          salários, benefícios e políticas de forma estratégica.
                        </p>
                      </li>
                    </Link>
                    <Link
                      style={{ padding: "20px" }}
                      className="dropdown-item hoverH  paragraph text-16px medium"
                      to="/sst"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <li className="paragraph text-16px semiBold">
                        SESMT
                        <p
                          className="paragraph politicas mb-0 wrap"
                          style={{ maxWidth: "240px" }}
                        >
                          Profissionais capacitados para fortalecer a Segurança
                          do Trabalho conforme suas necessidades.
                        </p>
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={styles.solucoesVideo}>
                <div className={styles.videoInfo}>
                  <h3 className="paragraph semiBold mb-0">
                    Descubra como a Acme auxilia empresas a ganhar
                    eficiência.
                  </h3>
                  <p className="paragraph politicas">
                    Reduza custos e melhore seus processos de forma
                    personalizada.
                  </p>
                </div>
                <iframe
                  id="video"
                  style={{ width: "100%", height: "auto", aspectRatio: "16/9" }}
                  src=""
                  title="Acme - Consultoria especializada"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </ul>
        </div>
        <div
          id="navbar"
          className={`${styles.containerHeader} nav-list container`}
        >
          <div className={styles.menu}>
            <div className={styles.menuItens}>
              <img
                tabIndex={0}
                onClick={(e) => handleSolucaoClick(e)}
                className={`${styles.logo} ${
                  scrolled && !location.pathname.includes("segurança")
                    ? styles.scrolled
                    : styles.default
                }`}
                alt="Logo Acme"
                src={
                  location.pathname.includes("segurança")
                    ? LogoEmpresa
                    : scrolled
                    ? LogoEmpresa1
                    : LogoEmpresa
                }
              />

              <nav
                className={`${styles.navbar} ${
                  scrolled ? styles.scrolled : styles.default
                } ${menuOpen ? styles.open : styles.close}`}
              >
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  to="/"
                  onClick={(e) => handleLinkClick(e, "top")}
                  aria-label="Tela inicial"
                >
                  Home
                </Link>
                <div
                  id="dropdown"
                  className={`${styles.dropdownH} dropdown`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Link
                    to="#"
                    data-dropdown
                    className={`${styles.dropdownMenuButtonH} paragraph bold linkNavbar gap-2 noWrap linkNav default`}
                    id="dropdownMenuButton"
                    role="button"
                    aria-expanded={isOpen ? "true" : "false"}
                  >
                    Soluções
                    <IconChevronDown
                      className="ocultaMobile"
                      stroke={2}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Link>
                </div>

                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  onClick={(e) => handleLinkClick(e, "clientes")}
                  aria-label="Clientes"
                >
                  Clientes
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  to="/blog"
                  aria-label="Blog"
                >
                  Blog
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  to="/sobre"
                  aria-label="Sobre nós"
                >
                  Sobre nós
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  aria-label="Contato"
                >
                  Contato
                </Link>

                <ButtonPrimary
                  className={` ${styles.ctaHeader} faleconosco paragraph bold responsiveContent text-center`}
                  href="javascrip:void(0)"
                  type="button"
                  content={"Fale com consultor"}
                />
              </nav>
              <div
                className={`${styles.mobileMenu}`}
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <div
                  id="line"
                  className={`${styles.burguer1} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
                <div
                  id="line"
                  className={`${styles.burguer2} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
                <div
                  id="line"
                  className={`${styles.burguer3} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
