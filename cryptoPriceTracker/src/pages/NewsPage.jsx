import { useNewsQuery } from "../hooks/useCryptoQueries";
import usePagination from "../hooks/usePagination";
import { Pagination } from "../components/Pagination";


export function NewsPage() {
  const { data: articles = [], isLoading, isError } = useNewsQuery();

  const { currentPage, setCurrentPage, totalPages, currentPageItems } =
    usePagination(articles, 6);

  return (
    <div className="p-4 bg-black min-h-screen text-white overflow-auto">
      <div className="w-[80%] mx-auto">
        <h3 className="text-4xl text-slate-300 font-bold mt-2 text-center">
          Crypto News
        </h3>
        <p className="text-lg text-slate-300 text-center mb-3">
          Latest headlines from around the crypto world.
        </p>

        {isLoading ? (
          <div className="mt-10 flex flex-col gap-3 justify-center items-center h-32">
            <div className="w-12 h-12  border-4 border-gray-500 border-t-transparent rounded-full animate-spin "></div>
            <p>Loading news...</p>
          </div>
        ) : isError ? (
          <p className="mt-10 text-center text-red-400">
            Failed to load news. Please try again later.
          </p>
        ) : (
          <div className="flex flex-col">
            {currentPageItems.map((item) => (
              <div
                key={item.id || item.guid}
                className="bg-neutral-950 rounded-lg p-4 mb-4 flex flex-col sm:flex-row gap-4"
              >
                {item.imageurl && (
                  <div className="w-full sm:w-48 sm:max-w-48 overflow-hidden rounded aspect-video sm:aspect-auto">
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
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
