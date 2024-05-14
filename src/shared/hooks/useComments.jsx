import { createComment } from "../../services";
import toast from "react-hot-toast";

export const useComments = () => {
    let toastEr = null;
    const addComment = async (content) => {
        let postId = localStorage.getItem('idPost');
        postId = postId.replace(/\s/g, '');
        let userId = localStorage.getItem('user');
        let user = localStorage.getItem('user');
        userId = userId.replace(/\s/g, '');
        userId = JSON.parse(userId).id;
        let token = "Bearer " + JSON.parse(user).token;

        if (JSON.parse(user).token === undefined || JSON.parse(user).token === null) {
            toastEr = toast.error('You must be logged in to comment');
        }
        const response = await createComment({ content, postId, userId, token });
    }



    return {
        addComment,
        toastEr
    }
}