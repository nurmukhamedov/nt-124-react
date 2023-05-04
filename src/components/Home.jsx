import { useState, useEffect } from 'react'
import axios from 'axios';
import Card from './Card';
const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const myData = data.map((news) => (
        <Card key={news.id} id={news.id} image={news.imageUrl} title={news.title} site={news.newsSite} summary={news.summary} date={news.updatedAt} />
    ))
    console.log(data)
    return (
        <div>
            {myData}
        </div>
    )
}

export default Home