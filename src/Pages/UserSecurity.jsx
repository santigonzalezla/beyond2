import './css/userprofile.css';
import Navbar from "../Components/UserProfile/Navbar";
import BottomNav from "../Components/UserProfile/BottomNav";
import UserSecurityContainer from "../Components/UserSecurity/UserSecurityContainer";

const UserProfile = () =>
{
    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <Navbar />
                <UserSecurityContainer />
            </div>
            <BottomNav />
        </div>
    );
}

export default UserProfile;