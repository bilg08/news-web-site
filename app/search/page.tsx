import fetchNews from "../../util/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { term: string };
}
async function SearchPage({ searchParams }: Props) {
  const news: NewsResponse = await fetchNews(searchParams?.term)
  console.log(news)
  return (
    <div>
      <h1 className="headerTitle">Search By {searchParams?.term} </h1>
      {/* <NewsList news={news}/> */}
    </div>
  );
}

export default SearchPage
