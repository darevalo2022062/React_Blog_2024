import { useState } from "react";
import { usePost } from "../../shared/hooks";
import toast from "react-hot-toast";


export const NewPost = () => {
    const { addPost } = usePost();
    const [content, setComment] = useState('');
    const [title, setTitle] = useState('');

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        addPost(title, content);
        setComment('');
        setTitle('');
        if (content === "") {
            return toast.error("You can't send an empty post");
        } else {
            toast.success("Post has been added");
        }

    }

    return (

        <div className="createComment-container">
            <form onSubmit={handleCommentSubmit}>
                <input className="createComment-input"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Escribe un título"
                />
                <input className="createComment-input"
                    type="text"
                    value={content}
                    onChange={(event) => setComment(event.target.value)}
                    placeholder="Escribe un contenido"
                />

                <button className="createComment-btn" type="submit">Comentar</button>
            </form>
        </div>
    )
}