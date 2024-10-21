import logo from "../assets/logo.png";
import Button from "./Button";
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />

            <ul className="navbar-list">
                <li className="navbar-item">MENU</li>
                <li className="navbar-item">LOCATION</li>
                <li className="navbar-item">ABOUT</li>
                <li className="navbar-item">CONTACT</li>
            </ul>

            <Button primary content="Login" />
        </nav>
    );
};

export default Navbar;
