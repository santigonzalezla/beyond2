import './css/landingfooter.css';
import LandingFooterForm from "./LandingFooterForm";

const LandingFooter = () =>
{
    return (
        <div className="landing-footer">
            <div className="landing-footer-left">
                <img src="https://i.imgur.com/uaV4veh.png" alt="footer-logo"/>
            </div>
            <div className="landing-footer-center">
                <div className="landing-footer-column">
                    <span>Company</span>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>About us</li>
                        <li>Terms of Use</li>
                    </ul>
                </div>
                <div className="landing-footer-column">
                    <span>Menu</span>
                    <ul>
                        <li>How it works</li>
                        <li>Pricing</li>
                        <li>About us</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div className="landing-footer-column">
                    <span>Services</span>
                    <ul>
                        <li>Legacy</li>
                        <li>Memoriam</li>
                        <li>PassAway</li>
                    </ul>
                </div>
                <div className="landing-footer-column">
                    <span>Help</span>
                    <ul>
                        <li>How it works?</li>
                        <li>FAQ</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <div className="landing-footer-right">
                <LandingFooterForm />
                <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z"
                        strokeWidth="0" fill="currentColor">
                    </path>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="0.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"
                        strokeWidth="0" fill="currentColor">
                    </path>
                </svg>
            </div>
        </div>
    );
}

export default LandingFooter;