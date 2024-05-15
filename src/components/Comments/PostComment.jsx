import { useComments } from "../../shared/hooks";
import { useState } from "react";
import toast from "react-hot-toast";


export const PostComment = () => {
    const { addComment, toastEr } = useComments();
    const [content, setComment] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        addComment(content);
        setComment('');
        if (content === "") {
            return toast.error("No puedes enviar un comentario vacío");
        } else {

            let userId = localStorage.getItem('user');


            if (userId === null || userId === undefined) {
                return toast.error("You must be logged in to comment");
            } else {

                toast.success("Comentario agregado");
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            }
        }

    }

    return (

        <div className="createComment-container">
            <form onSubmit={handleCommentSubmit}>
                <input className="createComment-input"
                    type="text"
                    value={content}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Escribe un comentario"
                />
                <button className="createComment-btn" type="submit">Comentar</button>
            </form>
        </div>

    )
}