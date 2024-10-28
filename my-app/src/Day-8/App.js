import "./app.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
    const [mode, setMode] = useState(" ");
    console.log(mode);
    const handleChangeMode = () => {
        setMode((md) => (md === "dark" ? "" : "dark"));
    };
    return (
        <body className={mode}>
            <Header />
            <Main changeMode={handleChangeMode} />
            <Footer />
        </body>
    );
};

export default App;
