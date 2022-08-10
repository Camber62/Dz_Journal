import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import RenderComponent from "./App";
import HomeLesson from "./HomeTest";
import Hello from "./copmponent/Lesson_10_08";
// import Massive from "./copmponent/Lesson_10_08";
import Parent from "./copmponent/Lesson_10_08";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <div>
        <Parent/>
    </div>
);
