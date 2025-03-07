"use server";
import ArticleBlock from "@/components/ArticleBlock";
import SignOutButton from "@/components/SignOutButton";

export default async function HomePage() {
  const articles = [
    {
      slug: "buharis-scorecard-any-hits-or-all-misses",
      imageUrl:
        "https://cdn.prod.website-files.com/64be7b4d0273fe7be7c24b6f/671fa8ea1ad3e6de29b71ea0_Banking-p-500.jpg",
      title: "Buhari's scorecard: Any hits or all misses?",
      summary:
        "Nigeria's president has struggled with implementing many of his creative and solution-oriented promises.",
      author: "The Newsroom",
      pubDate: "2022-07-12T20:00:00.000Z",
    },
    {
      slug: "how-does-lagos-state-spend-its-money",
      imageUrl:
        "https://cdn.prod.website-files.com/64be7b4d0273fe7be7c24b6f/663b0fa5b2fe33ac69525216_Energy%20Market%20Insights-p-500.jpg",
      title: "How does Lagos state spend its money?",
      summary:
        "Lagos is a megacity in Nigeria but by global standards, it’s not.",
      author: "Adesola Afolabi",
      pubDate: "2022-07-14T18:30:00.000Z",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <p>Welcome!</p>
        <SignOutButton />
      </div>

      <h1 className="text-center font-bold text-2xl mb-3">Articles</h1>

      <div className="grid-container">
        {articles.map((article, index) => (
          <ArticleBlock key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
