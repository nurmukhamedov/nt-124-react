import { useState, useEffect } from "react";
import axios from "axios";

const Lesson52 = () => {

    const [resourceType, setResourceType] = useState('posts');
    const [state1, setState1] = useState('Example state');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const dataFetch = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

    const handlePost = () => {
        setResourceType('posts');
    }
    const handleUser = () => {
        setResourceType('users');
    }
    const handleComment = () => {
        setResourceType('comments');
    }
    const handleState = () => {
        setState1('State changed');
    }
    console.log('rendered')


    useEffect(() => {
        setLoading(true);
        dataFetch();
    }, [resourceType]);

    if (loading) {
        return <div>Loading....</div>
    }

    return (
        <div>
            <h2>{resourceType}</h2>
            <button onClick={handlePost}>Posts</button>
            <button onClick={handleUser}>Users</button>
            <button onClick={handleComment}>Comments</button>
            <button onClick={handleState}>{state1}</button>
            <ul>
                {
                    data.map((info) => (
                        <li key={info.id}>{info.body}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Lesson52