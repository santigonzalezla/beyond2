import './css/editaddresscontainer.css';
import EditAddressDashboard from "./EditAddressDashboard";

const EditAddressContainer = () =>
{
    return (
        <div className="edit-address-container">
            <div className="edit-address-container-info">
                <EditAddressDashboard />
            </div>
        </div>
    );
}

export default EditAddressContainer;