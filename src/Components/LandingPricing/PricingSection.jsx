import './css/pricingsection.css'
import PricingCard from "./PricingCard";

const PricingSection = () =>
{
    return (
        <div className="pricing-section">
            <h1>Pricing</h1>
            <div className="pricing-section-cards">
                <PricingCard
                    imgLink={"https://imgur.com/IkW0odD.png"}
                    description={
                        <ul style={{marginLeft:"20px"}}>
                            <li>1 Space</li>
                            <li>Memories
                                <ul style={{marginLeft:"20px"}}>
                                    <li>1 pictures</li>
                                    <li>1 Videos</li>
                                    <li>1 3D Scan*</li>
                                    <li>1 Audio</li>
                                    <li>3 notes</li>
                                </ul>
                            </li>
                            <li>Select 3 templates</li>
                            <li>Avatar by default</li>
                        </ul>
                    }
                    price={"$9 USD / MONTH"}
                />
                <PricingCard
                    imgLink={"https://imgur.com/tu0BZUN.png"}
                    description={
                        <ul style={{marginLeft:"20px"}}>
                            <li>1 Space</li>
                            <li>Memories
                                <ul style={{marginLeft:"20px"}}>
                                    <li>1 pictures</li>
                                    <li>1 Videos</li>
                                    <li>1 3D Scan*</li>
                                    <li>1 Audio</li>
                                    <li>3 notes</li>
                                </ul>
                            </li>
                            <li>Select 3 templates</li>
                            <li>Avatar by default</li>
                        </ul>
                    }
                    price={"$59 USD / MONTH"}
                />
                <PricingCard
                    imgLink={"https://imgur.com/lyequXR.png"}
                    description={
                        <ul style={{marginLeft:"20px"}}>
                            <li>1 Space</li>
                            <li>Memories
                                <ul style={{marginLeft:"20px"}}>
                                    <li>1 pictures</li>
                                    <li>1 Videos</li>
                                    <li>1 3D Scan*</li>
                                    <li>1 Audio</li>
                                    <li>3 notes</li>
                                </ul>
                            </li>
                            <li>Select 3 templates</li>
                            <li>Avatar by default</li>
                        </ul>
                    }
                    price={"$199 USD / MONTH"}
                />
            </div>
            <p>Note: Each plan supports up to 1 Gb of information, for additional space contact hi@gobyond.xyz</p>
            <div className="pricing-section-bottom">
                <button>SCAN SERVICES</button>
                <span>*Scan services depend on your location.</span>
            </div>
        </div>
    );
}

export default PricingSection;