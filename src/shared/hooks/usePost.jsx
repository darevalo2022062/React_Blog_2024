
import { createPost } from '../../services/index.js';
export const usePost = () => {
    const addPost = async (title, content, gitLink) => {
        console.log('Title: ', title);
        console.log('Content: ', content);
        let user = localStorage.getItem('user');
        let token = "Bearer " + JSON.parse(user).token;
        const response = await createPost({ title, content, gitLink, token });
        console.log('Response: ', response);
    }

    return {
        addPost
    }
}