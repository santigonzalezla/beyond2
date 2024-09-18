import './css/userprofile.css';
import Navbar from "../Components/UserProfile/Navbar";
import BottomNav from "../Components/UserProfile/BottomNav";
import EditAddressContainer from "../Components/UserEditAddress/EditAddressContainer";

const UserProfile = () =>
{
    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <Navbar />
                <EditAddressContainer />
            </div>
            <BottomNav />
        </div>
    );
}

export default UserProfile;