import { useState, useEffect } from 'react';
import { getOnePost } from '../../services';
import { useNavigate } from "react-router-dom";

export const UniquePost = () => {
    

    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState({});
    let idPost = localStorage.getItem('idPost');
    idPost = idPost.replace(/\s/g, '');
    const navigate = useNavigate();

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setIsLoading(true);
        try {
            const response = await getOnePost(idPost);
            setPost(response.data.post);
            console.log('Response:', response);
        } catch (error) {
            console.error('Error al obtener los posts:', error);
        } finally {
            setIsLoading(false);
        }

    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };


    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <div className="UniquePost-container">
                    <h2 className="UniquePost-date">{formatDate(post.date)}</h2>
                    <h1 className="UniquePost-title">{post.title}</h1>
                    <div className="UniquePost-content">
                        <p>{post.content}</p>
                    </div>
                </div>
            )}
        </div>

    )
}