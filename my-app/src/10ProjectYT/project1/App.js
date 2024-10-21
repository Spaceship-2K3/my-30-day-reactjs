import "./app.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
    return (
        <div className="content">
            <Navbar />
            <Hero />
        </div>
    );
};

export default App;
