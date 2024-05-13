import "../pages/dashboard/dashboardPage.css"
export const Navbar = () => {
    return (
        <header className="cabecera">
            <h1 className="cabecera-h1">
                <a href="#">
                    <img src="src/assets/cool_blog.png" alt="Cool Blog" />
                </a>
            </h1>
            <nav className="cabecera-nav">
                <ul className="cabecera-ul">
                    <li className="cabecera-li"><a href="#"  className="cabecera-a">Who is David?</a></li>
                    <li className="cabecera-li"><a href="#" className="cabecera-a">All Projects</a></li>
                    <li className="cabecera-li"><a href="#" className="cabecera-a">React Projects</a></li>
                    <li className="cabecera-li"><a href="#" className="cabecera-a">NodeJS Projects</a></li>
                    <li className="cabecera-li"><a href="#" className="cabecera-a">(POST)</a></li>
                </ul>
            </nav>
        </header>

    )
}
