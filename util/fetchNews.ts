import sortNewsByImage from "./sortNewsByImage"

import newsJson from '../response.json' 
const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic? :boolean,
) => {
    // const response = fetch(newsJson)
    // const data = await (await response).json()
    return sortNewsByImage(newsJson)

}
export default fetchNews
