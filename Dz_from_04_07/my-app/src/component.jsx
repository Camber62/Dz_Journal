const Error = (props) => {
    if (props.sta === true) {
        return <div style={{ color: "green" }}>Login и Password введены верно!</div>;
    } else if (props.sta === false) {
        return <div style={{ color: "red" }}>Login или Password введеный не венрно</div>;
    }
};

export default Error;
