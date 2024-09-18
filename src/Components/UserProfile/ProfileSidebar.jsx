import './css/profilesidebar.css';
import { Link } from "react-router-dom";

const ProfileSidebar = () =>
{
    return (
        <div className="profile-sidebar">
            <img src="https://i.imgur.com/7pzf4nB.png" alt="profile-img"/>
            <ul>
                <li><Link to="/">Profile</Link></li>
                <li><Link to="/billing">Billing</Link></li>
                <li><Link to="/security">Security</Link></li>
            </ul>
        </div>
    );
}

export default ProfileSidebar;