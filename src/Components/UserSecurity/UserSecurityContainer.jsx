import './css/usersecuritycontainer.css'
import UserSecurityForm from "./UserSecurityForm";
import ProfileSidebar from "../UserProfile/ProfileSidebar";

const UserSecurityContainer = () =>
{
    return (
        <div className="user-security-container">
            <div className="user-security-info">
                <ProfileSidebar />
                <UserSecurityForm />
            </div>
        </div>
    );
}

export default UserSecurityContainer;