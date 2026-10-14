import React, { useEffect, useRef, useState, useMemo } from "react";
import { fetchPosts, fetchTags, getFeaturedImageUrl } from "../../../src/api";
import styles from "./style.module.scss";
import bannerBlog from "../../../src/assets/blog/banner.jpg";
import { Link } from "react-router-dom";
import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowUpRight,
} from "@tabler/icons-react";

export const ArtigosBlog = ({
  selectedTag,
  setSelectedTag,
  handleTagClick,
  header,
  isFilterActive,
}) => {
  const [allPosts, setAllPosts] = useState([]);
  const [tagsMap, setTagsMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const tagMenuRef = useRef(null); // Reference to the tag container
  const tagRefs = useRef({}); // References to individual tags
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(false);

  useEffect(() => {
    const updateArrowVisibility = () => {
      if (tagMenuRef.current && Object.keys(tagsMap).length > 0) {
        const menuElement = tagMenuRef.current;

        setIsLeftArrowVisible(menuElement.scrollLeft > 0);
        setIsRightArrowVisible(
          menuElement.scrollLeft + menuElement.clientWidth <
            menuElement.scrollWidth
        );
      } else {
        setIsLeftArrowVisible(false);
        setIsRightArrowVisible(false);
      }
    };

    // Check visibility on mount and on scroll
    updateArrowVisibility();

    const menuRef = tagMenuRef.current;
    menuRef?.addEventListener("scroll", updateArrowVisibility);

    return () => {
      menuRef?.removeEventListener("scroll", updateArrowVisibility);
    };
  }, []);

  useEffect(() => {
    if (selectedTag !== null && tagRefs.current[selectedTag]) {
      const tagElement = tagRefs.current[selectedTag];
      const menuElement = tagMenuRef.current;

      if (menuElement && tagElement) {
        // Centralizar a tag ativa no menu
        const tagOffsetLeft = tagElement.offsetLeft;
        const tagWidth = tagElement.offsetWidth;
        const menuWidth = menuElement.clientWidth;

        const scrollTo = tagOffsetLeft - menuWidth / 2 + tagWidth / 2;

        menuElement.scrollTo({
          left: scrollTo,
          behavior: "smooth",
        });
      }
    }
  }, [selectedTag]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setPostsPerPage(1);
      } else if (window.innerWidth <= 1108) {
        setPostsPerPage(2);
      } else {
        setPostsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);

  useEffect(() => {
    const updateArrowVisibility = () => {
      if (tagMenuRef.current) {
        setIsLeftArrowVisible(tagMenuRef.current.scrollLeft > 0);
      }
    };

    // Check visibility on mount
    updateArrowVisibility();

    // Add event listener for scroll updates
    const menuRef = tagMenuRef.current;
    menuRef?.addEventListener("scroll", updateArrowVisibility);

    return () => {
      menuRef?.removeEventListener("scroll", updateArrowVisibility);
    };
  }, [tagMenuRef]);

  const handlePageChange = (direction) => {
    if (
      direction === "next" &&
      currentPage < Math.ceil(filteredPosts.length / postsPerPage)
    ) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const filteredPosts = useMemo(() => {
    if (selectedTag === null) {
      return allPosts;
    }
    return allPosts.filter((post) => post.tags.includes(selectedTag));
  }, [selectedTag, allPosts]);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPosts, postsPerPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginationButtons = useMemo(() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const buttons = [];

    if (currentPage > 3) {
      buttons.push(1); // Primeira página
      if (currentPage > 4) {
        buttons.push("ellipsis-left"); // Reticências
      }
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    if (currentPage < totalPages - 2) {
      buttons.push("ellipsis-right"); // Reticências
    }
    buttons.push(totalPages); // Última página

    return buttons;
  }, [totalPages, currentPage]);

  useEffect(() => {
    const shuffleArray = (array) => {
      return array
        .map((item) => ({ item, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ item }) => item);
    };

    const getPostsAndTags = async () => {
      try {
        const [postsData, tagsData] = await Promise.all([
          fetchPosts(),
          fetchTags(),
        ]);

        const shuffledPosts = shuffleArray(postsData);

        // A imagem destacada já vem embutida em cada post (graças ao
        // _embed em fetchPosts) — não precisamos mais buscar cada mídia
        // separadamente, o que eliminava a rajada de N requisições
        // simultâneas que estava causando erros 500 intermitentes.

        // Criar um mapeamento de tags com contagem de posts associados
        const tagPostCount = shuffledPosts.reduce((acc, post) => {
          post.tags.forEach((tagId) => {
            acc[tagId] = (acc[tagId] || 0) + 1;
          });
          return acc;
        }, {});

        // Filtrar apenas tags que têm posts associados
        const filteredTagsMap = tagsData.reduce((acc, tag) => {
          if (tagPostCount[tag.id]) {
            acc[tag.id] = tag.name;
          }
          return acc;
        }, {});

        setTagsMap(filteredTagsMap);

        // Set shuffled posts
        setAllPosts(shuffledPosts);
      } catch (error) {
        console.error("Erro ao carregar posts ou tags:", error);
      } finally {
        setLoading(false);
      }
    };

    getPostsAndTags();
  }, []);

  if (loading) {
    return (
      <div className="w-100 text-center">
        <p>Carregando posts...</p>
      </div>
    );
  }

  return (
    <section className={`${styles.postSection} container`}>
      <div className={styles.header}>
        <h3 className="paragraph text-28px semiBold gray-11">{header}</h3>
        <div className={styles.tagOptionsWrapper}>
          {isFilterActive && (
            <>
              {/* Left Arrow */}
              <a
                type="button"
                className={`${styles.arrowButton}`}
                onClick={() => {
                  if (tagMenuRef.current) {
                    tagMenuRef.current.scrollBy({
                      left: -150,
                      behavior: "smooth",
                    }); // -100px para rolar 50px a mais
                  }
                }}
              >
                <IconChevronLeft className={styles.leftArrow} stroke={2} />
              </a>

              {/* Tag Menu */}
              <div
                className={`${styles.tagOptionsMenu}`}
                ref={tagMenuRef}
                style={{
                  maxWidth: "800px",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                <div className={styles.tagOptions}>
                  <a
                    className={`${styles.tag} ${
                      selectedTag === null ? styles.activeTag : ""
                    }`}
                    onClick={() => {
                      handleTagClick(null);
                      setSelectedTag(null);
                    }}
                  >
                    Todos
                  </a>
                  {Object.entries(tagsMap).map(([id, name]) => (
                    <a
                      key={id}
                      className={`${styles.tag} ${
                        selectedTag === parseInt(id) ? styles.activeTag : ""
                      }`}
                      onClick={() => {
                        handleTagClick(parseInt(id));
                        setSelectedTag(parseInt(id));
                      }}
                      ref={(el) => (tagRefs.current[id] = el)}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <a
                type="button"
                className={`${styles.arrowButton}`}
                onClick={() => {
                  if (tagMenuRef.current) {
                    tagMenuRef.current.scrollBy({
                      left: 150,
                      behavior: "smooth",
                    }); // +100px para rolar 50px a mais
                  }
                }}
              >
                <IconChevronRight className={styles.rightArrow} stroke={2} />
              </a>
            </>
          )}
        </div>
      </div>

      <div className={`${styles.cardContainer}`}>
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              className={`${styles.cards} card bg-transparent`}
              key={post.id}
            >
              <img
                src={getFeaturedImageUrl(post) || bannerBlog}
                className={`${styles.cardImg} card-img-top`}
                alt={post.title.rendered}
              />
              <div className={styles.cardText}>
                <Link to={`/blog/view/${post.slug}`}>
                  <small className="paragraph postDate">
                    {new Date(post.date)
                      .toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      .replace(/\sde\s/g, " ")
                      .trim()}
                  </small>
                  <h2 className="titlePost d-flex justify-content-between title six lineHeight-24 secondary">
                    {post.title.rendered}
                    <div className={styles.openInANewTab}>
                      <IconArrowUpRight stroke={2} />
                    </div>
                  </h2>
                  <p
                    className="paragraph postAllDescricao lineHeight-24"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                  ></p>
                </Link>
              </div>
              <div className="d-flex gap-2">
                {post.tags.map((tagId) => (
                  <span
                    key={tagId}
                    className={styles.cardTags}
                    onClick={() => handleTagClick(tagId)}
                  >
                    {tagsMap[tagId]}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </div>

      <div className={styles.paginationWrapper}>
        <a
          href="javascript:void(0);"
          className={`${styles.paginationButton} ${
            currentPage > 1 ? "" : styles.disabled
          }`}
          onClick={() => currentPage > 1 && handlePageChange("prev")}
        >
          Anterior
        </a>
        <div className={styles.pageNumbers}>
          {paginationButtons.map((page, index) =>
            page === "ellipsis-left" || page === "ellipsis-right" ? (
              <div key={page} className={styles.ellipsis}>
                ...
              </div>
            ) : (
              <div
                key={page}
                className={`${styles.pageNumber} ${
                  page === currentPage ? styles.activePage : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </div>
            )
          )}
        </div>

        <a
          href="javascript:void(0);"
          className={`${styles.paginationButton} ${
            currentPage < totalPages ? "" : styles.disabled
          }`}
          onClick={() => currentPage < totalPages && handlePageChange("next")}
        >
          Próximo
        </a>

        <div className={styles.divPaginationButtonMb}>
          <a
            href="javascript:void(0);"
            className={`${styles.paginationButtonMb} ${
              currentPage > 1 ? "" : styles.disabled
            }`}
            onClick={() => currentPage > 1 && handlePageChange("prev")}
          >
            Anterior
          </a>
          <a
            href="javascript:void(0);"
            className={`${styles.paginationButtonMb} ${
              currentPage < totalPages ? "" : styles.disabled
            }`}
            onClick={() => currentPage < totalPages && handlePageChange("next")}
          >
            Próximo
          </a>
        </div>
      </div>
    </section>
  );
};
