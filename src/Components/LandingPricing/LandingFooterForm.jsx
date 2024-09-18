import './css/landingfooterform.css';
import {useState} from "react";

const LandingFooterForm = () =>
{
    const [email, setEmail] = useState("");

    const cleanForm = () =>
    {
        setEmail("");
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        cleanForm();
    }

    return (
        <div className="landing-footer-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Subscribe to our newsletter"
                    required
                />
                <input
                    hidden
                    name="user_message"
                    defaultValue={"Suscripción a Newsletter"}
                />
                <button type="submit">SEND</button>
            </form>
        </div>
    );
}

export default LandingFooterForm;