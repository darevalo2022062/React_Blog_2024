import { Navbar } from "../../components/Navbar.jsx"
import { Posts } from "../../components/posted/Posts.jsx"
import { UpButton } from "../../components/posted/Up.jsx"
import "./dashboardPage.css"

export const DashboardPage = () => {
    return (
        <div className="App">
            <Navbar />
            <UpButton />
            <Posts />
        </div>
    )
}