import React from 'react'
import { categories } from '../../../constant'
import fetchNews from '../../../util/fetchNews'
import NewsList from '../../NewsList'
type Props = {
  params: {
    category:string
  }
}
async function CategoryPage({ params: { category } }: Props) {
  const news:NewsResponse = await fetchNews(category)
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news}/>
    </div>
  );
}

export default CategoryPage;
export async function generateStaticParams() {
  return categories.map(category => ({
 category  
}))
}
