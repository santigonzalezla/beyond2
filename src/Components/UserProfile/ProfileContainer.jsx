import './css/profilecontainer.css'
import ProfileForm from "./ProfileForm";
import ProfileSidebar from "./ProfileSidebar";

const ProfileContainer = () =>
{
    return (
        <div className="profile-container">
            <div className="profile-container-info">
                <ProfileSidebar />
                <ProfileForm />
            </div>
        </div>
    );
}

export default ProfileContainer;