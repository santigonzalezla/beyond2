import './css/editaddressdashboard.css';
import { useNavigate } from "react-router-dom";

const EditAddressDashboard = () =>
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
        <div className="edit-address-dashboard">
            <form>
                <div className="edit-address-dashboard-container">
                    <div className="edit-address-dashboard-address">
                        <h1>Billing Address</h1>
                        <input type="text" placeholder="Street Address Line 1"/>
                        <input type="text" placeholder="Street Address Line 2"/>
                        <div className="edit-address-dashboard-address-input">
                            <input type="text" placeholder="City"/>
                            <input type="text" placeholder="State / Provence"/>
                        </div>
                        <div className="edit-address-dashboard-address-input">
                            <input type="text" placeholder="Postal / Zip Code"/>
                            <input type="text" placeholder="Country"/>
                        </div>
                    </div>
                </div>
                <div className="edit-address-dashboard-button">
                    <button onClick={handleSubmit}>SAVE CHANGES</button>
                    <button onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
        </div>
    );
}

export default EditAddressDashboard;