import "../pages/dashboard/dashboardPage.css"
import { Link } from "react-router-dom"
import toast from "react-hot-toast";
export const Navbar = () => {
    const userDetails = localStorage.getItem('user');
    let infoUser = JSON.parse(userDetails);
    let admin = false;

    if (infoUser?.admin === true) {
        admin = infoUser.admin;
    }
    const handleLogout = () => {
        localStorage.removeItem('user');
    }

    const handleAction = () => {
        toast.success('Logout successful');
        setTimeout(() => { window.location.reload(); }, 400);

    }

    return (
        <header className="cabecera">
            <h1 className="cabecera-h1">
                <a >
                    <img src="src/assets/cool_blog.png" alt="" />
                </a>
            </h1>
            <nav className="cabecera-nav">
                <ul className="cabecera-ul">
                    <li className="cabecera-li"><Link to="/dashboard" className="cabecera-a">All Projects</Link></li>
                    {
                        userDetails ? <li className="cabecera-li"><Link onClick={() => { handleLogout(); handleAction(); }} className="cabecera-a">Logout</Link></li> :
                            <li className="cabecera-li"><Link to="/auth" className="cabecera-a">Login</Link></li>

                    }

                    {
                        admin ? <li className="cabecera-li"><Link to="/dashboard/post" className="cabecera-a-admin">POST</Link></li> : null
                    }

                </ul>
            </nav>
        </header>

    )
}
