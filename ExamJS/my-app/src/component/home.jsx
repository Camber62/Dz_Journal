import React, {useState, useEffect} from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import * as axios from "axios";


const baseUrl = "https://reqres.in/api/users?page=2";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(baseUrl).then((responce) => {
            setUsers(responce.data.data);
        });
    }, []);


    if (users.length !== 0) {
        click()
    }


    return (<>
            <h1>Users</h1>

            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3500}
            >
                {users.map((int, element) => {
                    return (
                        <div className="img" key={element}
                            // style={{backgroundImage:"url(" +  int.avatar  + ")" , backgroundSize: "cover"}}
                        >
                            <img className='imgUsers' alt="qwe" src={int.avatar}/>
                        </div>
                    );
                })}
            </AutoplaySlider></>
    );
};


function click() {
    document.querySelector('.awssld__next').click();
}


export default Home;
