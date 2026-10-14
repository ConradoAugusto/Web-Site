import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import bannerBlog from "../../assets/blog/banner.jpg";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { TagSection } from "../../../components/buttons/TagSection";
import { DestaquesBlog } from "../../../components/blog/DestaquesBlog";
import { ArtigosBlog } from "../../../components/blog/ArtigosBlog";
import { useRef, useState } from "react";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const BlogPage = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  const postsSectionRef = useRef(null);

  const handleTagClick = (tagId) => {
    setSelectedTag((prev) => {
      const newTag = prev === tagId ? null : tagId;
      if (newTag !== prev && postsSectionRef.current) {
        postsSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
      return newTag;
    });
  };

  return (
    <DefaultTemplate>
      <OffCanvasContato />
      <WhatsAppIcon />
      <section className={styles.heading}>
        <img src={bannerBlog} alt="uma pessoa fazendo pesquisa de blog" />
        <TagSection className="textDark zIndex mt-3" content="BLOG ACME" />
        <h2 className="title four lineHeight fadeBottomSlow">
          Explore e acompanhe nosso conteúdo sobre tendências e inovação
        </h2>
      </section>
      <section className={`${styles.destaques} container`}>
        <div className="d-flex flex-column" style={{ gap: "40px" }}>
          <h4 className="paragraph text-28px semiBold">Posts Recentes</h4>
          <DestaquesBlog
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            handleTagClick={handleTagClick}
          />
        </div>
      </section>
      <section className={styles.artigos}>
        <ArtigosBlog
          isFilterActive={true}
          header={"Todos os Posts"}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          handleTagClick={handleTagClick}
          postsSectionRef={postsSectionRef}
        />
      </section>
    </DefaultTemplate>
  );
};
