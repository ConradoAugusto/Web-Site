import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import {
  fetchPostBySlug,
  fetchTags,
  fetchCategories,
  getFeaturedImageUrl,
  registrarVisualizacaoBlog,
  registrarCurtidaBlog,
} from "../../src/api";
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import bannerBlog from "../../src/assets/blog/banner.jpg";
import { ArtigosBlog } from "../blog/ArtigosBlog";
import solidesLogo from "../../src/assets/aliado.png";
import { useEngajamentoBlog } from "../../src/blogEngajamento";

export const ViewBlog = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [tagsMap, setTagsMap] = useState({});
  const [categoriesMap, setCategoriesMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [curtido, setCurtido] = useState(false);
  const [totalCurtidas, setTotalCurtidas] = useState(0);
  const slugContabilizado = useRef(null);
  const enviandoCurtidaRef = useRef(false);
  const conteudoRef = useRef(null);
  const fimRef = useRef(null);

  const content = post?.content.rendered;

  function extractSubtitle(content) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const subtitleElement = doc.querySelector(".subtitle");
    return subtitleElement ? subtitleElement.textContent : null;
  }

  function removeSubtitle(content) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const subtitleElement = doc.querySelector(".subtitle");
    if (subtitleElement) {
      subtitleElement.remove();
    }
    return doc.body.innerHTML;
  }

  const subtitle = content ? extractSubtitle(content) : null;
  const modifiedContent = content ? removeSubtitle(content) : "";

  useEffect(() => {
    const getPostAndRelatedPosts = async () => {
      setLoading(true);

      try {
        // Busca o post atual pelo slug — fetchPostBySlug já usa _embed,
        // então a imagem destacada vem junto, sem chamada extra.
        const postData = await fetchPostBySlug(slug);
        setPost(postData[0]);

        setCurtido(localStorage.getItem(`blog_like_${slug}`) === "1");

        // Registra a visualização uma única vez por post carregado nesta sessão de página
        if (postData[0] && slugContabilizado.current !== slug) {
          slugContabilizado.current = slug;
          const titulo = postData[0].title?.rendered || "";
          registrarVisualizacaoBlog(slug, titulo).then((resultado) => {
            if (resultado) setTotalCurtidas(resultado.curtidas);
          });
        }

        // Não precisamos mais buscar TODOS os posts do blog nem fazer
        // fetchMedia em loop aqui — essa página só precisa da imagem do
        // post atual, que já veio embutida acima. Isso elimina a rajada
        // de requisições simultâneas que causava erros 500 intermitentes.
        const [tagsData, categoriesData] = await Promise.all([
          fetchTags(),
          fetchCategories(),
        ]);

        // Mapeia as tags
        const tagsMapData = tagsData.reduce((acc, tag) => {
          acc[tag.id] = tag.name;
          return acc;
        }, {});
        setTagsMap(tagsMapData);

        // Mapeia as categorias
        if (categoriesData) {
          const catMapData = categoriesData.reduce((acc, cat) => {
            acc[cat.id] = cat.name;
            return acc;
          }, {});
          setCategoriesMap(catMapData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar posts, tags ou categorias:", error);
        setLoading(false);
      }
    };

    getPostAndRelatedPosts();
  }, [slug]);

  // Tempo de leitura, chegada ao fim e cliques em links/CTA. Só liga com o post na tela.
  useEngajamentoBlog(post && !loading ? slug : undefined, conteudoRef, fimRef);

  const handleToggleLike = async () => {
    // Guarda em ref (não em state) pra bloquear cliques repetidos sem
    // desabilitar o botão via HTML — "disabled" aplica o estilo padrão do
    // navegador e causava o piscar visual a cada clique.
    if (enviandoCurtidaRef.current) return;
    enviandoCurtidaRef.current = true;

    const proximoEstado = !curtido;
    setCurtido(proximoEstado);
    setTotalCurtidas((atual) => Math.max(0, atual + (proximoEstado ? 1 : -1)));

    try {
      const resultado = await registrarCurtidaBlog(
        slug,
        post?.title?.rendered || "",
        proximoEstado,
      );

      if (resultado) {
        setTotalCurtidas(resultado.curtidas);
        localStorage.setItem(`blog_like_${slug}`, proximoEstado ? "1" : "0");
      } else {
        // Falhou a chamada: desfaz a atualização otimista
        console.warn("registrarCurtidaBlog retornou vazio/falso — curtida desfeita.");
        setCurtido(!proximoEstado);
        setTotalCurtidas((atual) => Math.max(0, atual - (proximoEstado ? 1 : -1)));
      }
    } catch (error) {
      // Deu erro de verdade (rede, CORS, etc.): desfaz a atualização otimista também
      console.error("Erro ao registrar curtida:", error);
      setCurtido(!proximoEstado);
      setTotalCurtidas((atual) => Math.max(0, atual - (proximoEstado ? 1 : -1)));
    } finally {
      // Sempre libera a trava, mesmo se dev acima der erro — antes, um erro aqui
      // deixava o botão travado pra sempre (parecia "não aceitar mais clique")
      enviandoCurtidaRef.current = false;
    }
  };

  if (loading) {
    return (
      <div className="w-100 text-center justify-content-center d-flex">
        <Loading
          height={"100px"}
          width={"100px"}
          type={"spin"}
          color={"#21b88f"}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {post ? (
        <div className={styles.viewPage}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* INÍCIO: Renderização condicional das CATEGORIAS */}
            {post.categories && post.categories.length > 0 && (
              <div className="d-flex gap-2 mb-2 justify-content-center align-items-center flex-wrap">
                {post.categories.map((catId) => {
                  const catName = categoriesMap[catId];

                  // Ignora "Sem categoria"
                  if (
                    !catName ||
                    catName.toLowerCase() === "sem categoria" ||
                    catName.toLowerCase() === "uncategorized"
                  ) {
                    return null;
                  }

                  // Se for a categoria do parceiro, exibe a logo
                  if (
                    catName.toLowerCase() === "parceiro" ||
                    catName.toLowerCase() === "parceria"
                  ) {
                    return (
                      <img
                        key={catId}
                        src={solidesLogo}
                        alt="Logo do parceiro"
                        title="Parceiro"
                        className={styles.solidesBadge}
                        style={{
                          margin: "0 4px",
                        }}
                      />
                    );
                  }

                  // Para as demais categorias, exibe a badge de texto padrão
                  return (
                    <span
                      key={catId}
                      className="badge bg-light text-primary border px-3 py-1 rounded-pill text-uppercase"
                      style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
                    >
                      {catName}
                    </span>
                  );
                })}
              </div>
            )}
            {/* FIM: Renderização condicional das CATEGORIAS */}

            <div className="paragraph text-center postDate mb-1">
              {new Date(post.date)
                .toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
                .replace(/\sde\s/g, " ")
                .trim()}
            </div>

            <h1 className="title Three text-center mb-3" tabIndex={0}>
              {post.title.rendered}
            </h1>

            {subtitle && (
              <p
                className={`${styles.subtitle} paragraph text-16px text-center m-0`}
              >
                {subtitle}
              </p>
            )}
          </div>

          <img
            tabIndex={0}
            src={getFeaturedImageUrl(post) || bannerBlog}
            alt="Imagem do Post"
            className={styles.postImage}
          />

          <div
            ref={conteudoRef}
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
          />
          <div ref={fimRef} aria-hidden="true" style={{ height: 1 }} />

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleToggleLike}
            className={`${styles.likeButton} ${curtido ? styles.liked : ""}`}
          >
            {curtido ? (
              <IconHeartFilled size={20} />
            ) : (
              <IconHeart size={20} />
            )}
            {curtido ? "Você curtiu" : "Gostou desse artigo?"}
            {totalCurtidas > 0 && ` · ${totalCurtidas}`}
          </button>
        </div>
      ) : (
        <p tabIndex={0}>Post não encontrado.</p>
      )}

      <ArtigosBlog
        isFilterActive={false}
        header={"Mais posts"}
        selectedTag={null}
        setSelectedTag={() => {}}
        handleTagClick={() => {}}
        postsSectionRef={null}
      />
    </div>
  );
};

export default ViewBlog;
