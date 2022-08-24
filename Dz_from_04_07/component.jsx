const Error = (props) => {
    if (props.sta === true) {
        return <div style={{ color: "green" }}>Good</div>;
    } else if (props.sta === false) {
        return <div style={{ color: "red" }}>Error</div>;
    }
};

export default Error;
