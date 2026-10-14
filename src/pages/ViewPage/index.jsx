import React from "react";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { ViewBlog } from "../../../components/ViewBlog";
import WhatsAppIcon from "../../../components/WhatsAppIcon";

export const ViewPage = () => {
  const { slug } = useParams();
  return (
    <DefaultTemplate>
      <WhatsAppIcon />
      <div className={styles.sectionVw}>
        <div
          className={`${styles.act} container flex-row align-items-center justify-content-between`}
        >
          <div className={`${styles.backLink} d-flex align-items-center`}>
            <IconArrowNarrowLeft size={24} color="#272E48" stroke={2} />
            <Link to="/blog" className="paragraph semiBold secondary m-0">
              Voltar ao Blog
            </Link>
          </div>
          <ol class="breadcrumb breadcrumb-arrows" aria-label="breadcrumbs">
            <li class="breadcrumb-item">
              <Link
                to="/blog"
                className="paragraph text-16px semiBold secondary m-0 textLight"
              >
                Blog Acme
              </Link>
            </li>
            <li className="breadcrumb-item">
              <span href="javascript:void(0);">
                {slug.length > 25 ? slug.slice(0, 25) + "..." : slug}
              </span>
            </li>
          </ol>
        </div>
        <ViewBlog />
      </div>
    </DefaultTemplate>
  );
};

export default ViewPage;
