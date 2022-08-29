import React, { useState } from "react";
import AppButton from "./Button";

const App = () => {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState(0);
    return (
        <div>
            <h1 style={{color:`#${color}`}}>{num}</h1>
            <AppButton color={setColor} number={setNum} titel={"Click"} />
        </div>
    );
};

export default App;
