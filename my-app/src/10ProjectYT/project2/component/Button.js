const Button = ({ content, icon, outline }) => {
    let className = "btn";
    if (outline) {
        className += " outline";
    }

    return (
        <button className={className} type="button">
            {icon ? <img src={icon} alt={icon} /> : ""}
            {content}
        </button>
    );
};

export default Button;
