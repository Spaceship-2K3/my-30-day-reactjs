import iconCall from "../assets/iconCall.png";
import messageIcon from "../assets/messageIcon.png";
import messageIconWhite from "../assets/messageIconWhite.png";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); // Ngăn form gửi đi mặc định
        console.log("Form submitted", { name, email, text });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="contact">
                <Button content="VIA SUPPORT CHAT" icon={messageIconWhite} />
                <Button content="VIA CALL" icon={iconCall} />
            </div>
            <div className="contact-Form">
                <Button content="VIA EMAIL FORM" icon={messageIcon} outline />
            </div>

            <div className="hero-Input">
                <Input label="NAME" />
                <Input label="E-MAIL" />
                <Input label="TEXT" textarea />
            </div>

            <div className="submit">
                <Button content="SUBMIT" />
            </div>
        </form>
    );
};

export default Form;
