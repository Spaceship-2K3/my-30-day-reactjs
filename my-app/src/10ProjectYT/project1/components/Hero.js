import Button from "./Button";
import hero from "../assets/hero.png";
import facebook from "../assets/facebook.png";
import amazon from "../assets/amazon.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="desc">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
                    OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                    YOU WITH OUR SHOES.
                </p>

                <div className="hero-control">
                    <Button primary content="Shop Now" width="150px" bold />
                    <Button content="Category" outline width="150px" bold />
                </div>

                <p className="desc-contact">Also Available On</p>
                <div className="contact-link">
                    <img src={facebook} alt="facebook" />
                    <img src={amazon} alt="amazon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero} alt="hero" />
            </div>
        </div>
    );
};

export default Hero;
