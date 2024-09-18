import './css/userprofile.css';
import Navbar from "../Components/UserProfile/Navbar";
import BottomNav from "../Components/UserProfile/BottomNav";
import EditPaymentContainer from "../Components/UserEditPayment/EditPaymentContainer";

const UserPayment = () =>
{
    return (
        <div className="user-profile">
            <div className="user-profile-container">
                <Navbar />
                <EditPaymentContainer />
            </div>
            <BottomNav />
        </div>
    );
}

export default UserPayment;