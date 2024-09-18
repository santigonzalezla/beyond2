import './css/pricingcard.css';

const PricingCard = ({title, imgLink, description, price}) =>
{
    return (
        <div className="pricing-card">
            <div className="pricing-card-img">
                <img src={imgLink} alt=""/>
                <span>{title}</span>
            </div>
            <p>What’s included:</p>
            <div className="">
                {description}
            </div>
            <button>{price}</button>
        </div>
    );
}

export default PricingCard;