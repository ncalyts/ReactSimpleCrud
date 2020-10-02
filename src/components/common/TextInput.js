import React from "react";
import Proptypes from "prop-types";
function TextInput (props) {
    let wrapperClass = "form-group";
    if ( props.error.length > 0){
        wrapperClass += " has-error";
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input
                    id={props.id}
                    type="title"
                    name={props.name}
                    onChange={props.onChange}
                    className="form-control"
                    value={props.value}
                />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div> }
        </div>
    )
}

TextInput.propTypes = {
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    label: Proptypes.string.isRequired,
    onChange: Proptypes.func.isRequired,
    value: Proptypes.string,
    error: Proptypes.string,
};

TextInput.defaultProps = {
    error: ""
};

export default TextInput;
