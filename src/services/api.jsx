import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://node-js-blog-2024api-arevalod449-gmailcoms-projects.vercel.app/blogCool/v1',
    timeout: 5000
})

/*
apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')
    
        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)
*/

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPosts = async () => {
    try {
        return await apiClient.get('/post/getPosts')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getOnePost = async (idPost) => {
    try {
        console.log("idPost", idPost);
        return await apiClient.get(`/post/getPostById/${idPost}`);
        
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteOnePost = async (idPost) => {
    try {
        return await apiClient.delete(`/post/deletePost/${idPost}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const createPost = async (data) => {
    try {
        return await apiClient.post('/post/createPost', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }

}

export const viewComments = async (idPost) => {
    try {
        return await apiClient.get(`/comment/getCommentsForPost/${idPost}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const createComment = async (data) => {
    try {
        return await apiClient.post('/comment/createComment', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}