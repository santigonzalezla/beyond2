import './css/navbar.css';
import {Link} from "react-router-dom";

const Navbar = () =>
{
    return (
        <div className="nav-profile">
            <div className="nav-profile-glass"></div>
                <Link to="/">
                    <img src="https://i.imgur.com/YahSuj3.png" alt="logo" />
                </Link>
                <ul>
                    <li>Spaces</li>
                    <li>Profile</li>
                    <li><Link to="/landing">Pricing</Link></li>
                    <li>Contact Us</li>
                    <li>Logout</li>
                </ul>
            </div>
    );
}

export default Navbar;