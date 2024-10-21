import { useState } from "react";
const randomColor = () => {
    let random = Math.floor(Math.random() * 256);
    const color = random.toString(16).padStart(2, "0"); // Đảm bảo chuỗi hex có ít nhất 2 ký tự
    return color;
};

const Ex2 = () => {
    const [random, setRandom] = useState(false);
    const handleRandom = () => {
        setRandom((cur) => !cur);
    };
    const colorList = [];
    for (var i = 0; i < 32; i++) {
        colorList.push(`#${randomColor()}${randomColor()}${randomColor()}`);
    }

    return (
        <>
            <h1>Hexadecimal Colors</h1>
            <ul className="list">
                {colorList.map((color) => {
                    return (
                        <li key={color} style={{ background: color }}>
                            {color}
                        </li>
                    );
                })}
            </ul>
            <button className="button-5" onClick={handleRandom}>
                Random Color
            </button>
        </>
    );
};

export default Ex2;
