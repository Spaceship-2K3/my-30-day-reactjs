import "./app.css";
import { Header } from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Hero />
            </div>
        </div>
    );
};

export default App;
