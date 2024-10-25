const Input = ({ label, textarea }) => {
    return (
        <div className="form-group" id={label}>
            <label>{label}</label>
            {textarea ? <textarea rows="4" /> : <input />}
        </div>
    );
};

export default Input;
