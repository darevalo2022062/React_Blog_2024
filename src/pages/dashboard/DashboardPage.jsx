import { Navbar } from "../../components/Navbar.jsx"
import { Posts } from "../../components/posted/Posts.jsx"
import { UniquePost } from "../../components/posted/UniquePost.jsx"
import { UpButton } from "../../components/posted/Up.jsx"
import { DeveloperInfo } from "../../components/DeveloperIndo.jsx"
import { Comments } from "../../components/posted/Comments.jsx"
import { PostComment } from "../../components/Comments/PostComment.jsx"
import { NewPost } from "../../components/post/NewPost.jsx"
import { useState } from "react"
import { Route, Routes } from "react-router-dom";

import "./dashboardPage.css"
import { Hero } from "../../components/Hero.jsx"

export const DashboardPage = () => {

    return (
        <>
        <div className="content-container">
        <Navbar />
        <UpButton />
            <Routes>
                <Route path="/dashboard" element={<> <Hero/> <Posts /></>} />
                <Route path="dashboard/:idPost" element={<><UniquePost /><Comments/> </>} />
                <Route path="dashboard/post" element={<><NewPost/></>} />
            </Routes>
        </div>
        </>
    )
}