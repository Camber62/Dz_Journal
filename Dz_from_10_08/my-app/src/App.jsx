import Children from "./Children";
const Parent = () => {
    const user = {
        name: "Alex",
        age: 30,
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        languages: ["Javascript", "Python"]
    };

    return (
        <div>
            <Children User={user} />
        </div>
    );
};

export default Parent;