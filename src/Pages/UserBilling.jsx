import './css/userprofile.css';
import Navbar from "../Components/UserProfile/Navbar";
import BottomNav from "../Components/UserProfile/BottomNav";
import BillingContainer from "../Components/UserBilling/BillingContainer";

const UserProfile = () =>
{
    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <Navbar />
                <BillingContainer />
            </div>
            <BottomNav />
        </div>
    );
}

export default UserProfile;