import { useState, useEffect } from "react";

const COUNTRY = [
    "singapore",
    "vietnam",
    "peru",
    "turkey",
    "afghanistan",
    "china",
    "france",
];

const randomCountry = () => {
    let random = Math.floor(Math.random() * COUNTRY.length);
    return COUNTRY[random];
};

const Main = ({ changeMode }) => {
    const [randomName, setRandomName] = useState(randomCountry());
    const [country, setCountry] = useState({});

    useEffect(() => {
        // Fetch dữ liệu của quốc gia ngẫu nhiên
        fetch(`https://restcountries.com/v3.1/name/${randomName}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const currency = Object.values(data[0].currencies)[0].name;

                    setCountry({
                        Country: data[0].name.common,
                        Capital: data[0].capital,
                        Population: data[0].population,
                        language: Object.values(data[0].languages).join(", "),
                        flag: data[0].flags.png,
                        Currency: currency, // Lấy thông tin về tiền tệ
                    });
                }
            })
            .catch((error) => console.error("Error:", error));
    }, [randomName]); // Thêm randomName vào dependency để fetch khi giá trị thay đổi

    return (
        <main>
            <h1>Country</h1>
            <div className="cart-country">
                <img src={country.flag} alt={country.Country} />
                <div className="cart-info">
                    <h2>{country.Country}</h2>
                    <p>
                        <strong>Capital : </strong> {country.Capital}
                    </p>
                    <p>
                        <strong>Language : </strong> {country.language}
                    </p>
                    <p>
                        <strong>Population : </strong> {country.Population}
                    </p>
                    <p>
                        <strong>Currency : </strong> {country.Currency}
                    </p>
                </div>
            </div>

            <div className="controls">
                <button
                    className="btn btn-change-country"
                    onClick={() => setRandomName(randomCountry())}
                >
                    Change Country
                </button>
                <button className="btn btn-change-mode" onClick={changeMode}>
                    Change Mode
                </button>
            </div>
        </main>
    );
};

export default Main;
