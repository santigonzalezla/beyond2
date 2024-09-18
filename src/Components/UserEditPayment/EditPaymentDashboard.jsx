import './css/editpaymentdashboard.css';
import { useNavigate } from "react-router-dom";

const EditPaymentDashboard = () =>
{
    const navigate = useNavigate();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
    }

    const handleCancel = (e) =>
    {
        e.preventDefault();
        navigate("/billing");
    }

    return (
        <div className="edit-payment-dashboard">
            <form>
                <div className="edit-payment-dashboard-container">
                    <div className="edit-payment-dashboard-payment">
                        <h1>Payment Information</h1>
                        <div className="edit-payment-dashboard-payment-card">
                            <input type="number" placeholder="Credit Card Number"/>
                            <input type="number" placeholder="CVV" />
                            <input type="date" placeholder="YYYY/MM/DD"/>
                        </div>
                        <div className="edit-payment-dashboard-payment-name">
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="edit-payment-dashboard-address">
                        <h3>Billing Address</h3>
                        <div className="edit-payment-dashboard-address-input">
                            <input type="text" placeholder="Street Address Line 1"/>
                            <input type="text" placeholder="Street Address Line 2"/>
                        </div>
                        <div className="edit-payment-dashboard-address-input">
                            <input type="text" placeholder="City"/>
                            <input type="text" placeholder="State / Provence"/>
                        </div>
                        <div className="edit-payment-dashboard-address-input">
                            <input type="text" placeholder="Postal / Zip Code"/>
                            <input type="text" placeholder="Country"/>
                        </div>
                    </div>
                </div>
                <div className="edit-payment-dashboard-button">
                    <button onClick={handleSubmit}>SAVE CHANGES</button>
                    <button onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}

export default EditPaymentDashboard;