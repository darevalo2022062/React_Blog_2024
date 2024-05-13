import { Navbar } from "../../components/Navbar.jsx"
import { Posts } from "../../components/posted/Posts.jsx"
import { UniquePost } from "../../components/posted/UniquePost.jsx"
import { UpButton } from "../../components/posted/Up.jsx"
import { DeveloperInfo } from "../../components/DeveloperIndo.jsx"
import { Comments } from "../../components/posted/Comments.jsx"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";

import "./dashboardPage.css"

export const DashboardPage = () => {

    const [inPost, setInPost] = useState(false);

    const handleGoToPost = () => {
        setInPost(true);
        console.log('Ir al post');

    }

    return (
        <>
        <div className="content-container">
        <Navbar />
        <UpButton />
            <Routes>
                <Route path="/dashboard" element={<Posts />} />
                <Route path="dashboard/:idPost" element={<><UniquePost /> <Comments/></>} />
            </Routes>
        </div>
        </>
    )
}