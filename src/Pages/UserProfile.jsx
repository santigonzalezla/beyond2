import './css/userprofile.css';
import Navbar from "../Components/UserProfile/Navbar";
import BottomNav from "../Components/UserProfile/BottomNav";
import ProfileContainer from "../Components/UserProfile/ProfileContainer";

const UserProfile = () =>
{
    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <Navbar />
                <ProfileContainer />
            </div>
            <BottomNav />
        </div>
    );
}

export default UserProfile;