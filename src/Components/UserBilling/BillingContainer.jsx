import './css/billingcontainer.css';
import ProfileSidebar from "../UserProfile/ProfileSidebar";
import BillingDashboard from "./BillingDashboard";

const BillingContainer = () =>
{
    return (
        <div className="billing-container">
            <div className="billing-container-info">
                <ProfileSidebar />
                <BillingDashboard />
            </div>
        </div>
    );
}

export default BillingContainer;