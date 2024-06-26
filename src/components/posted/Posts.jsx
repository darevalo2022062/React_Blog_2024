import { getPosts as getPostsReq } from "../../services";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Posts = () => {


    const navigate = useNavigate();
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        console.log("Clic en Leer más:", id);
        let idPost = JSON.stringify(id);
        idPost = idPost.replace(/"/g, '');
        localStorage.setItem('idPost', idPost);
        navigate(`/dashboard/${idPost}`);
    }


    return (
        <div className="posts-container">
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <div className="cards-container">
                    {Array.isArray(post) && post.length > 0 ? (
                        post.map(post => (
                            <div key={post._id} className="card">
                                <div className="card-header">
                                    <h2 className="post-title">{post.title}</h2>
                                    <p className="post-date">Post Date: {formatDate(post.date)}</p>
                                </div>
                                {/*<div className="card-footer">
                                  <a href=""></a>
                                </div>*/}
                                <div className="card-body">
                                    <p className="post-summary">{post.content.substring(0, 200) + "..."} <a className="post-continue" onClick={() => handleSwitch(post._id)}>Leer más</a> </p>
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