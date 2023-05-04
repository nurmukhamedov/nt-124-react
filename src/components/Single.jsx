import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

const Single = () => {
    const [singleData, setSingleData] = useState([]);

    const { id } = useParams();
    const url = `https://api.spaceflightnewsapi.net/v3/articles/${id}`;

    const singleFetchData = async () => {
        const response = await axios.get(url);
        setSingleData(response.data);
    }

    useEffect(() => {
        singleFetchData();
    }, [])
    console.log(singleData)
    return (
        <div>
            <img src={singleData.imageUrl} alt={singleData.title} />
            <p>{singleData.summary}</p>
        </div>
    )
}

export default Single