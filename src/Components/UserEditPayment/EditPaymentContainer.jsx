import './css/editpaymentcontainer.css';
import EditPaymentDashboard from "./EditPaymentDashboard";

const EditPaymentContainer = () =>
{
    return (
        <div className="edit-payment-container">
            <div className="edit-payment-container-info">
                <EditPaymentDashboard />
            </div>
        </div>
    );
}

export default EditPaymentContainer;