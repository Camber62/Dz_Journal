const AppButton = (props) => {
    function onClik() {
        props.number(Math.floor(Math.random() * 100));
        props.color(Math.floor(Math.random() * 1000))
    }

    return (
        <div>
            <button onClick={onClik} >{props.titel}</button>
        </div>
    );
};

export default AppButton;
