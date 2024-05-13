import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/index.js";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await loginApi({ email, password });
        setIsLoading(false);
        if (response.error) {
            console.log(response.error);
            return toast.error(response.e?.response?.data || 'An error occurred, please try again');
        }

        const { userDetails } = response.data
        localStorage.setItem('user', JSON.stringify(userDetails))
        
        navigate('/dashboard');
        return toast.success("Login successful")
    }

    return {
        isLoading,
        login
    }



}