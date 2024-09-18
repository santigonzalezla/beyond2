import './css/profileform.css'

const ProfileForm = () =>
{
    return (
        <div className="profile-form">
            <h4>{"{{Name}}"}</h4>
            <form>
                <div className="profile-form-container">
                    <div className="profile-form-left">
                        <label>
                            <span>Name:</span>
                            <input type="text" placeholder="Name"/>
                        </label>
                        <label>
                            <span>Email:</span>
                            <input type="email" placeholder="Email"/>
                        </label>
                        <label>
                            <span>Date of birth:</span>
                            <input type="date" placeholder="YYYY/MM/DD"/>
                        </label>
                        <label>
                            <span>Registered:</span>
                            <input type="date" placeholder="Date sign up"/>
                        </label>
                        <label>
                            <span>Avatar:</span>
                            <input type="url" placeholder="URL Avatar"/>
                        </label>
                    </div>
                    <div className="profile-form-right">
                        <label>
                            <span>Covenant:</span>
                            <input type="text" placeholder="Covenant Code"/>
                        </label>
                        <label>
                            <span>Partner:</span>
                            <input type="text" placeholder="Partner Code"/>
                        </label>
                    </div>
                </div>
                <button type="submit">SAVE CHANGES</button>
            </form>
        </div>
    );
}

export default ProfileForm;