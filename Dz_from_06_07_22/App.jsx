import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import News from "./News";

const App = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <Link to="/News">News</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/News" element={<News />} />
            </Routes>
        </>
);
};
export default App;