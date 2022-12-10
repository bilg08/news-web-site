import sortNewsByImage from "./sortNewsByImage"

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic? :boolean,
) => {
    const response = fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIA_API_KEY}&sources=business,sports&limit=100`)
    const data = await (await response).json()
    return sortNewsByImage(data)

}
export default fetchNews
