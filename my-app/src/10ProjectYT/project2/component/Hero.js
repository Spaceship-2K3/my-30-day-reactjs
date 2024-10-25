import hero from "../assets/hero.png";
import Form from "./Form";

const Hero = () => {
    return (
        <div className="hero">
            <h1>CONTACT US</h1>
            <p>
                LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM
                YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT
                , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE,
                OR BY PHONE, EMAIL, OR SOCIAL MEDIA.{" "}
            </p>

            <div className="hero-wrap">
                <div className="hero-left">
                    <Form />
                </div>
                <div className="hero-right">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
