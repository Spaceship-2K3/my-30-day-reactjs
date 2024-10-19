import "./App.css";
import TechItem from "./TechItem";

const techs = [
    "HTML", // Frontend
    "CSS", // Frontend
    "JavaScript", // Frontend
    "TypeScript", // Frontend/Backend
    "React", // Frontend framework
    "Vue.js", // Frontend framework
    "Angular", // Frontend framework
    "SASS", // CSS Preprocessor
    "Bootstrap", // CSS framework
    "Node.js", // Backend
    "Express.js", // Backend framework
    "MongoDB", // Database
    "PostgreSQL", // Database
    "MySQL", // Database
    "GraphQL", // API Query Language
    "REST API", // API Architecture
    "Next.js", // React framework for server-side rendering
    "React Native", // Mobile app development
    "Flutter", // Mobile app development
    "Docker", // Containerization
    "Kubernetes", // Container orchestration
    "AWS", // Cloud computing
    "Git", // Version control
    "Webpack", // Module bundler
];

const App = () => {
    return (
        <div className="wrapper">
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and update</p>
            <div className="signUp">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
            </div>
            <button className="button-5">Subscribe</button>

            <ul>
                {techs.map((item, index) => (
                    <TechItem key={index} name={item} />
                ))}
            </ul>
        </div>
    );
};
export default App;
