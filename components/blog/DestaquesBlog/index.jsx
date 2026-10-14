import React, { useEffect, useState } from "react";
import { fetchPosts, fetchTags, getFeaturedImageUrl } from "../../../src/api";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import bannerBlog from "../../../src/assets/blog/banner.jpg";
import { IconArrowUpRight } from "@tabler/icons-react";
import Loading from "../../Loading/Loading";

export const DestaquesBlog = ({ handleTagClick, setSelectedTag }) => {
  const [posts, setPosts] = useState([]);
  const [tagsMap, setTagsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostsAndTags = async () => {
      try {
        const [postsData, tagsData] = await Promise.all([
          fetchPosts(),
          fetchTags(),
        ]);

        // A imagem destacada já vem embutida em cada post (_embed em
        // fetchPosts), então não há mais chamadas extras de mídia aqui —
        // era essa rajada de requisições simultâneas que causava os 500
        // intermitentes e deixava esta seção com "Invalid Date".

        const tagsMap = tagsData.reduce((acc, tag) => {
          acc[tag.id] = tag.name;
          return acc;
        }, {});
        setTagsMap(tagsMap);

        const sortedPosts = postsData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts.slice(0, 3));
      } catch (error) {
        console.error("Erro ao carregar posts ou tags:", error);
      } finally {
        setLoading(false);
      }
    };

    getPostsAndTags();
  }, []);

  const uniqueTags = [...new Set(posts.flatMap((post) => post.tags || []))];

  return (
    <section className={`${styles.destaqueSection}`}>
      {loading ? (
        <div className="d-flex justify-content-center vw-100">
          <Loading
            height={"100px"}
            width={"100px"}
            type={"spin"}
            color={"#21b88f"}
          />
        </div>
      ) : (
        <>
          <div className={styles.destaque}>
            <div key={posts[0]?.id} className={styles.content}>
              <img
                src={getFeaturedImageUrl(posts[0]) || bannerBlog}
                className={styles.imgCard}
                alt={posts[0]?.title.rendered}
              />
              <div className={styles.cardText}>
                <Link to={`/blog/view/${posts[0]?.slug}`}>
                  <div className={styles.titleRegion}>
                    <div className="paragraph postDate">
                      {new Date(posts[0]?.date)
                        .toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                        .replace(/\sde\s/g, " ")
                        .trim()}
                    </div>

                    <h2 className="titlePost d-flex justify-content-between title six lineHeight-24 secondary">
                      {posts[0]?.title.rendered}
                      <div className={styles.openInANewTab}>
                        <IconArrowUpRight stroke={2} />
                      </div>
                    </h2>
                  </div>
                  <div className={styles.aGestoDe}>
                    <p
                      className="paragraph postAllDescricao lineHeight-24"
                      dangerouslySetInnerHTML={{
                        __html: posts[0]?.excerpt.rendered,
                      }}
                    ></p>
                  </div>
                </Link>
              </div>

              <div className={styles.tagGroup}>
                {posts[0]?.tags?.map((tagId) => (
                  <div key={tagId} className={styles.tag}>
                    <span
                      onClick={() => {
                        handleTagClick(tagId);
                        setSelectedTag(tagId);
                      }}
                    >
                      {tagsMap[tagId] || "Geral"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.secondDestaque}>
            {posts.slice(1).map((post) => (
              <div className={styles.content} key={post.id}>
                <img
                  src={getFeaturedImageUrl(post) || bannerBlog}
                  className={styles.imgCard}
                  alt={post.title.rendered}
                />
                <div className={styles.cardText}>
                  <Link to={`/blog/view/${post.slug}`}>
                    <div>
                      <div className={styles.titleRegion}>
                        <div className="paragraph postDate">
                          {new Date(post.date)
                            .toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                            .replace(/\sde\s/g, " ")
                            .trim()}
                        </div>
                        <h2 className="titlePost d-flex justify-content-between title six lineHeight-24 secondary">
                          {post.title.rendered}
                          <div className={styles.openInANewTab}>
                            <IconArrowUpRight stroke={2} />
                          </div>
                        </h2>
                      </div>
                      <div className={styles.aGestoDe}>
                        <p
                          className="paragraph postDescricao p-0"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered,
                          }}
                        ></p>
                      </div>
                    </div>
                  </Link>

                  <div className={styles.tagGroup}>
                    {post.tags?.map((tagId) => (
                      <span
                        key={tagId}
                        className={styles.tag}
                        onClick={() => {
                          handleTagClick(tagId);
                          setSelectedTag(tagId);
                        }}
                      >
                        {tagsMap[tagId] || "Geral"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
