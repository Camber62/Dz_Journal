import React, { useState, useRef } from "react";
import Error from "./component";

const App = () => {
    const inputRefLog = useRef(null);
    const inputRefPas = useRef(null);
    const [Logout, setLogout] = useState("input");
    const [status, setStatus] = useState(null);

    function Cklick() {
        if (
            inputRefLog.current.value === "User" &&
            inputRefPas.current.value === "Password"
        ) {
            setStatus(true);
            setLogout("Logout");
        } else {
            setLogout("input");
            setStatus(false);
        }
    }

    return (
        <>
            <input type="text" ref={inputRefLog} placeholder="Login"/>
            <input type="password" ref={inputRefPas} placeholder="Password"/>
            <button onClick={Cklick}>{Logout}</button>
            <div>
                <Error sta={status} />
            </div>
        </>
    );
};

export default App;