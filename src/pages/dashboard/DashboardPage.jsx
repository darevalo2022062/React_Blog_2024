import { Navbar } from "../../components/Navbar.jsx"
import { Posts } from "../../components/posted/Posts.jsx"
import { UniquePost } from "../../components/posted/UniquePost.jsx"
import { UpButton } from "../../components/posted/Up.jsx"
import { DeveloperInfo } from "../../components/DeveloperIndo.jsx"
import { useState } from "react"

import "./dashboardPage.css"

export const DashboardPage = () => {

    
    const [inPost, setInPost] = useState(false);

    const handleGoToPost = () => {
        setInPost(true);
        console.log('Ir al post');

    }

    return (
        <div className="App">
            <Navbar />
            <UpButton />
            {inPost ? (
                <UniquePost />
            ) : (
                <Posts switchAuthHandler={handleGoToPost} />)}
        </div>
    )
}