import Image from "next/image";
import NextLink from "next/link";
import React from "react";

const ArticleBlock = ({ article }) => {
  return (
    <NextLink
      data-testid="article-container"
      href={`${article.slug}`}
      className="article-block"
    >
      <img
        data-testid="article-image"
        src={article.imageUrl}
        alt={article.title}
      />
      <div className="article-content">
        <h2 data-testid="article-title">{article.title}</h2>
        <p>{article.summary}</p>
      </div>
      <div className="article-info">
        <span className="author">{article.author}</span>
        <span className="category">Oil and Gas</span>
      </div>
    </NextLink>
  );
};

export default ArticleBlock;
