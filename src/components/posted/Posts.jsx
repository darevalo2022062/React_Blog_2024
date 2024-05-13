import { getPosts as getPostsReq } from "../../services";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Posts = ({ switchAuthHandler }) => {
    
    

    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inPost, setInPost] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        setIsLoading(true);
        try {
            const response = await getPostsReq();
            setPost(response.data.posts);
            console.log('Posts:', response.data.posts)
        } catch (error) {
            console.error('Error al obtener los posts:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    const handleSwitch = (id) => {
        console.log(id);
        let idPost = JSON.stringify(id);
        idPost = idPost.replace(/"/g, '');
        localStorage.setItem('idPost', idPost);
    }

    return (
        <div className="posts-container">
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <div className="cards-container">
                    {Array.isArray(post) && post.length > 0 ?
                        (
                            post.map(post => (
                                <div key={post._id} className="card">
                                    <div className="post-preview">
                                        <h2 className="post-title">{post.title}</h2>
                                        <p>Post Date: {formatDate(post.date)}</p>
                                        <p className="post-summary">{post.content.substring(0, 200) + "..."} <span onClick={handleSwitch}><a className="post-continue" onClick={() => { handleSwitch(post._id); switchAuthHandler(); }} >Leer más</a> </span></p>
                                    </div>
                                    <div className="post-content">
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay posts disponibles.</p>
                        )}
                </div>
            )}
        </div>
    );
}