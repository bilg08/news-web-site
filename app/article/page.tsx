import { notFound } from "next/navigation";

type Props = {
    searchParams?:Article
}
function ArticlePage({ searchParams }: Props) {
    if (searchParams && Object.entries(searchParams).length === 0 || !searchParams) {
        return notFound();
    }
    const article:Article = searchParams
    return (
      <article>
        <section className="flex flex-col lg:flex-row pb-24 px-0 lg-px-10">
          <img
            src={
              "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608%22"
            }
            alt={article.title}
            className="h-50 max-w-md mx-auto md:max-w-lg object-cover rounded-lg shadow-md"
          />
          <div className="px-10">
            <h1 className="headerTitle">{article.title}</h1>
            <div className="flex divide-x-2 space-x-4">
              <h2 className="font-bold">By:{article.author}</h2>
              <h2 className="font-bold pl-4">
                Source: {article.source ? article.source :'unknown'}
                        </h2>
                        <p className="pl-4">{article.published_at}</p>

                    </div>
                    <p className="pt-4">{ article.description}</p>
          </div>
        </section>
      </article>
    );
}

export default ArticlePage
