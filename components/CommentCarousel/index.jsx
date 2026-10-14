import React, { useState, useEffect } from "react";
import SliderPkg from "react-slick";
import styles from "./style.module.scss";
import commentsData from "./comments.json";
import arrow from "../../src/assets/comments/arrow.svg";

import pessoa2 from "../../src/assets/comments/pessoa-2.png";
import pessoa1 from "../../src/assets/comments/pessoa-1.png";
import pessoa3 from "../../src/assets/comments/pessoa-3.jpg";
import { TagSection } from "../buttons/TagSection";

const avatars = {
  "pessoa2.jpg": pessoa2,
  "pessoa1.jpg": pessoa1,
  "pessoa3.jpg": pessoa3,
};

const importAvatarImage = (avatarName) => {
  return avatars[avatarName] || null;
};

const CommentCarousel = () => {
  const [comments, setComments] = useState([]);
  const sliderRef = React.useRef(null); // Referência para o slider
  const Slider = SliderPkg.default || SliderPkg;

  useEffect(() => {
    setComments(commentsData);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    dots: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Desativando as setas internas do Slider
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          centerMode: true,
          dots: true,
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
        },
      },
    ],
  };

  const nextSlide = () => sliderRef.current.slickNext();
  const prevSlide = () => sliderRef.current.slickPrev();

  return (
    <section
      className={`${styles.clientReviews}  fadeRightSlow`}
      style={{ zIndex: "99", position: "relative" }}
    >
      <div className="container">
        <TagSection content={"O QUE DIZEM OS CLIENTES"} className={"mb-5"}/>
        <Slider ref={sliderRef} {...settings}>
          {comments.map((comment, index) => (
            <div key={index} className={styles.clientReview}>
              <div className={styles.cardText}>
                <h3 className={`${styles.atendimentoGilE} paragraph bold mb-0`}>
                  {comment.title}
                </h3>
                <div className={styles.text}>
                  <div className={styles.firmarAParceriaContainer}>
                    {comment.text.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className={`${styles.firmarAParceria} paragraph mb-0`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.identity}>
                  <div className={styles.avatar}>
                    <img
                      className={styles.photoIcon}
                      alt={`Foto de ${comment.author}`}
                      src={importAvatarImage(comment.avatar)}
                    />
                    <div className={styles.fulanoDeTalParent}>
                      <p
                        className={`${styles.fulanoDeTal} paragraph lineHeight bold mb-0`}
                      >
                        {comment.author}
                      </p>
                      <div>
                        <p
                          className={`${styles.empresa} paragraph limitedText2 lineHeight mb-0`}
                        >
                          {comment.position}
                          <a
                            className="textLight"
                            href={comment.empresaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {comment.empresa}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className={styles.customArrows}>
          <button onClick={prevSlide} className={styles.arrowButton}>
            <img src={arrow} alt="Seta para voltar" />
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
    </section>
  );
};

export default CommentCarousel;
