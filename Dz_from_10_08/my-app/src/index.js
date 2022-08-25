import React from "react";
import { createRoot } from "react-dom/client";

import Parent from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Parent />
    </React.StrictMode>
);
