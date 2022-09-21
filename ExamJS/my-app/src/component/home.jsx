const Home = () => {
    return (
        <div>
            <p>Home</p>
        </div>
    );
};

export default Home;
// import ImageGallery from "react-image-gallery";
// import React, { useState, useEffect, Component } from "react";
// import * as axios from "axios";
// import "./styles.css";
//
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
//
// const baseUrl = "https://reqres.in/api/users?page=1";
//
// const App = () => {
//     let [users, setUsers] = useState([]);
//     useEffect(() => {
//         axios.get(baseUrl).then((responce) => {
//             setUsers(responce.data.data);
//         });
//     }, []);
//
//     return (
//         <>
//             <Carousel>
//                 {users.map((int, element) => {
//                     return (
//                         <div className="img" key={element}>
//                             <img alt="qwe" src={int.avatar} />
//                         </div>
//                     );
//                 })}
//             </Carousel>
//         </>
//     );
// };
//
// export default App;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
