import './css/landingpricing.css'
import LandingHeader from "../Components/LandingPricing/LandingHeader";
import PricingSection from "../Components/LandingPricing/PricingSection";
import LandingFooter from "../Components/LandingPricing/LandingFooter";

const LandingPricing = () =>
{
    return (
        <div className="landing-pricing">
            <LandingHeader />
            <PricingSection />
            <LandingFooter />
        </div>
    );
}

export default LandingPricing;