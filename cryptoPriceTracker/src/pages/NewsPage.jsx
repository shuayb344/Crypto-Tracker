import { useEffect, useState } from "react";
import { fetchNews } from "../api/fetchData";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const news = await fetchNews();
        setArticles(news);
      } catch (err) {
        console.error("Failed to load news", err);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="p-4 bg-black min-h-screen text-white overflow-auto">
      <div className="w-[80%] mx-auto">
        <Header />
        <h3 className="text-4xl text-slate-300 font-bold mt-2 text-center">
          Crypto News
        </h3>
        <p className="text-lg text-slate-300 text-center mb-3">
          Latest headlines from around the crypto world.
        </p>

        {loading ? (
          <div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
            <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
            <p>Loading news...</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {articles.map((item) => (
              <div
                key={item.id || item.guid}
                className="bg-neutral-950 rounded-lg p-4 mb-4 flex flex-col sm:flex-row gap-4"
              >
                {item.imageurl && (
                  <div className="w-full sm:w-48 sm:max-w-[12rem] overflow-hidden rounded aspect-video sm:aspect-auto">
                    <img
                      src={item.imageurl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-bold hover:underline"
                  >
                    {item.title}
                  </a>
                  {item.body && (
                    <p className="mt-2 text-slate-200 line-clamp-3 lg:line-clamp-2">
                      {item.body.replace(/<[^>]*>/g, "").slice(0, 150)}...
                    </p>
                  )}
                  <p className="text-sm text-slate-400 mt-3">
                    {item.published_on
                      ? new Date(item.published_on * 1000).toLocaleDateString()
                      : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
