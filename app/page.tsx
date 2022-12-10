import NewsList from "./NewsList";
import response from '../response.json'
async function HomePage() {
  const news: NewsResponse = response;
  return (
    <div>
      <NewsList news={news}/>
    </div>
  );
}
export default HomePage