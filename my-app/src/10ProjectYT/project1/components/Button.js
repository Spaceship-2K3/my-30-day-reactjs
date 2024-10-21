const Button = ({ primary, content, outline, width, bold }) => {
    let className = "";
    if (primary) {
        className = "btnPrimary";
    } else if (outline) {
        className = "btnOutline";
    }
    return (
        <button
            style={{ width: width, fontWeight: bold }}
            className={`${className}  btn`}
        >
            {content}
        </button>
    );
};

export default Button;
