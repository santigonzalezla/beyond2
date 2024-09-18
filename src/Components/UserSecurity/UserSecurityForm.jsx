import './css/usersecurityform.css'

const UserSecurityForm = () =>
{
    return (
        <div className="user-security-form">
            <h4>{"{{Name}}"}</h4>
            <div className="user-security-form-top">
                <form>
                    <div className="user-security-form-container">
                        <label>
                            <span>Old Password:</span>
                            <input type="password" placeholder="Enter old password to verify yourself"/>
                        </label>
                        <label>
                            <span>New Password:</span>
                            <input type="password" placeholder="***"/>
                        </label>
                        <label>
                            <span>Confirm New Password:</span>
                            <input type="password" placeholder="***"/>
                        </label>
                    </div>
                    <button type="submit">UPDATE PASSWORD</button>
                </form>
                <div className="user-security-right">
                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none">
                        <path d="M1.66699 16.6665C1.66699 13.7207 1.66699 12.2467 2.39949 11.3321C3.13116 10.4165 4.31033 10.4165 6.66699 10.4165H13.3337C15.6903 10.4165 16.8695 10.4165 17.6012 11.3321C18.3337 12.2467 18.3337 13.7207 18.3337 16.6665C18.3337 19.6123 18.3337 21.0863 17.6012 22.0009C16.8695 22.9165 15.6903 22.9165 13.3337 22.9165H6.66699C4.31033 22.9165 3.13116 22.9165 2.39949 22.0009C1.66699 21.0863 1.66699 19.6123 1.66699 16.6665Z" stroke="#9747FF" stroke-width="1.5"/>
                        <path d="M5 10.4166V8.33325C5 6.67565 5.52678 5.08594 6.46447 3.91383C7.40215 2.74173 8.67392 2.08325 10 2.08325C11.3261 2.08325 12.5979 2.74173 13.5355 3.91383C14.4732 5.08594 15 6.67565 15 8.33325V10.4166" stroke="#9747FF" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    <h4>Two-factor authentication is not enabled yet.</h4>
                    <h5>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to sign in.</h5>
                    <button>Enable two-factor authentication</button>
                </div>
            </div>
            <div className="user-security-form-bottom">
                <h4>DANGER ZONE</h4>
                <p><span>Delete account</span> - all spaces will be lost. This may affect other users so be careful</p>
                <button>DELETE MY ACCOUNT</button>
            </div>
        </div>
    );
}

export default UserSecurityForm;