import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar