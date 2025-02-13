// import { expect, test } from "vitest";
// import { render, screen } from "@testing-library/react";
// import Container from "@/components/Container";
// import ArticleBlock from "@/components/ArticleBlock";

// test("ArticleBlock", () => {
//   render(<ArticleBlock article={} />);
//   expect(screen.getByTestId("article-container")).toBeDefined();
// });

// __tests__/ArticleBlock.test.jsx
import { describe, expect, it, test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleBlock from "../components/ArticleBlock";

describe("<ArticleBlock />", () => {
  const article = {
    slug: "/test-article",
    imageUrl: "https://example.com/image.jpg",
    title: "Test Article",
    summary: "This is a test article summary.",
    author: "John Doe",
  };
  render(<ArticleBlock article={article} />);

  test("renders ArticleBlock component with article data", () => {
    const element = screen.getByTestId("article-title");
    expect(element).toHaveTextContent(article.title);
  });
  test("renders ArticleBlock component with article data", () => {
    render(<ArticleBlock article={article} />);
    const element = screen.getByTestId("article-title");
    expect(element).toBeDefined();
    expect(element).toHaveTextContent(article.title);
  });
  test("renders ArticleBlock component with article image", () => {
    render(<ArticleBlock article={article} />);
    const imageElement = screen.getByTestId("article-image");
    expect(imageElement).toBeDefined();
    expect(imageElement).toHaveAttribute("src", article.imageUrl);
  });
  test("renders ArticleBlock component with article Link", () => {
    render(<ArticleBlock article={article} />);
    const linkElement = screen.getByTestId("article-container");
    expect(linkElement).toHaveAttribute("href", article.slug);
  });
});
// test("renders ArticleBlock component with article data", () => {
//   // Mock article data
//   const article = {
//     slug: "/test-article",
//     imageUrl: "https://example.com/image.jpg",
//     title: "Test Article",
//     summary: "This is a test article summary.",
//     author: "John Doe",
//   };

//   // Render the component
//   render(<ArticleBlock article={article} />);

//   // Check if the article title is rendered
//   // const titleElement = screen.getAllByTestId("article-title");
//   // expect(titleElement).toBeDefined();

//   // // Check if the article summary is rendered
//   const summaryElement = screen.getByText(article.summary);
//   expect(summaryElement).toBeDefined();

//   // // Check if the article author is rendered
//   // const authorElement = screen.getByText(article.author);
//   // expect(authorElement).toBeInTheDocument();

//   // // Check if the image is rendered with the correct alt text
//   // const imageElement = screen.getByAltText(article.title);
//   // expect(imageElement).toBeInTheDocument();
//   // expect(imageElement).toHaveAttribute("src", article.imageUrl);

//   // // Check if the link has the correct href
//   // const linkElement = screen.getByTestId("article-container");
//   // expect(linkElement).toHaveAttribute("href", article.slug);
// });
