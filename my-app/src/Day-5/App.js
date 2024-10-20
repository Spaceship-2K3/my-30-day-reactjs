import "./app.css";
import { useState } from "react";
function randomColor() {
    let random = Math.floor(Math.random() * 256);
    const color = random.toString(16).padStart(2, "0"); // Đảm bảo chuỗi hex có ít nhất 2 ký tự
    return color;
}

const ColorItem = () => {
    const color = `#${randomColor()}${randomColor()}${randomColor()}`;
    return (
        <li className="item" style={{ background: color }}>
            {color}
        </li>
    );
};

const App = () => {
    const [random, setRandom] = useState(false);
    const handleRandom = () => {
        setRandom((cur) => !cur);
    };
    return (
        <div className="app">
            <ul>
                <ColorItem />
                <ColorItem />
                <ColorItem />
                <ColorItem />
                <ColorItem />
                <ColorItem />
            </ul>

            <button className="button-19" onClick={handleRandom}>
                Random
            </button>
        </div>
    );
};

export default App;
