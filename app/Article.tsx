import ReadMoreButton from "./ReadMoreButton";

type Props = {
    article:Article
}
function Article({ article }: Props) {
  return (
    <article className="flex flex-col hover:scale-105 transition-all duration-300 dark:bg-slate-800 hover:bg-slate-200 rounded-xl">
        <img
          alt=""
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
          src={
            "https://occ-0-395-325.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608%22"
          }
        />

      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="line-clamp-2 text-xs">{article.description}</p>
          </section>
          <footer>
            <p>{article.source}</p>
            <p>{article.published_at}</p>
          </footer>
        </div>
      </div>
      <ReadMoreButton article={article}/>
    </article>
  );
}

export default Article
