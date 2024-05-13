import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { viewComments as getCommentsReq } from "../../services";
import { PostComment } from "../Comments/PostComment";

export const Comments = () => {
    const navigate = useNavigate();
    const [comment, setComment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let idPost = localStorage.getItem('idPost');
    idPost = idPost.replace(/\s/g, '');

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        setIsLoading(true);
        try {
            const response = await getCommentsReq(idPost);
            setComment(response.data.comments);
            console.log('Comments:', response.data.comments)
        } catch (error) {
            console.error('Error al obtener los comments:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div>
            {isLoading ? (
                <p>Cargando...</p>
            ) : (
                <>
                    <h1 className="comments-title">Comentarios</h1>
                    <PostComment/> 
                    <div className="comments-wrapper">
                        <div className="comments-container">
                            {Array.isArray(comment) && comment.length > 0 ? (
                                comment.map(comment => (
                                    <>
                                    <div key={comment._id} className="comment">
                                        <div className="comment-preview">
                                            <h2 className="comment-title">{comment.name}</h2>
                                            <p className="comment-summary">{comment.content}</p>
                                        </div>
                                    </div>
                                    <p className="comment-date">{formatDate(comment.date)}</p>
                                    </>
                                ))
                            ) : (
                                <p className="comments-title">No hay comentarios</p>
                            )}
                        </div>
                    </div>
                </>

            )}
        </div>
    )
}