import { useState } from "react";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
import "./authPage.css"

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev)
    }

    return (
        <div className="bg-gray-100 h-screen flex justify-center items-center">
          {isLogin ? (
            <Login switchAuthHandler={handleAuthPageToggle}/>
          ) : (
            <Register switchAuthHandler={handleAuthPageToggle}/>
          )}
        </div>
      )

}
