import './css/landingheader.css'
import Navbar from "../UserProfile/Navbar";

const LandingHeader = () =>
{
    return (
        <header className="landing-header">
            <Navbar />
            <div className="landing-header-container">
                <h1>PASS AWAY</h1>
                <h5>
                    Para aquellas  personas de las que no alcanzaste a despedirte Pass away te permite decirles de la forma
                    que desees aquello que te quedó pendiente
                </h5>
            </div>
        </header>
    );
}

export default LandingHeader;