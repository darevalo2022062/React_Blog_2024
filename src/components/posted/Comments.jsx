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

        isLoading ? (
            <p>Cargando...</p>
        ) : (
            <>
                <hr />
                <h1 className="comments-title">Comentarios</h1>
                <PostComment />
                <div className="comments-wrapper">
                    {Array.isArray(comment) && comment.length > 0 ? (
                        comment.map(comment => (
                            <>
                                <div class="message-board">

                                    <div>
                                        <div key={comment._id} className="comment-box">
                                            <div className="comment-preview">
                                                <h2 className="comment-title">{comment.name}</h2>
                                                <p className="comment-summary">{comment.content}</p>
                                            </div>
                                            <p className="comment-date">{formatDate(comment.date)}</p>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ))
                    )
                        : (
                            <p className="comments-title">No hay comentarios :c</p>
                        )}
                </div>
            </>
        )

    )
}