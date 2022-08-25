const Children = (props) => {
    const userLanguages = props.User.languages;

    console.log(userLanguages);
    return (
        <>
            <p>Name:{props.User.name}</p>
            <p>Age:{props.User.age}</p>
            {/* <img src="URL" alt="альтернативный текст"> */}
            <img alt="img" src={props.User.avatar} style={{ width: "100px" }} />
            <div>
                <ul style={{ padding: "0" }}>
                    Languages:
                    {userLanguages.map((int, element) => {
                        return <li key={element}>{int}</li>;
                    })}
                </ul>
            </div>
        </>
    );
};

export default Children;