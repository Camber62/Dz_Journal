import { Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home";
import List from "./component/NavTable";
import Inform from "./component/inform";

const Main = () => {
    return (
        <>
            <header>
                <p>Logo</p>
                <Link to="/">Home</Link>
                <Link to="/List">List</Link>
                <Link to="/Inform">Inform</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/List" element={<List />} />
                <Route path="/inform" element={<Inform />} />
            </Routes>
            <footer>Footer</footer>
        </>
    );
};
export default Main;