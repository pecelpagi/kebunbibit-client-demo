import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import StyledInput from "./StyledInput";

const InputText = (props) => {
    const {
        label, required, ...rest
    } = props;

    return (
        <div>
            <Label {...{ label, required }} />
            <StyledInput {...rest} />
        </div>
    );
}

InputText.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    isInvalid: PropTypes.bool,
};

InputText.defaultProps = {
    label: undefined,
    name: undefined,
    required: false,
    placeholder: "",
    type: "text",
    isInvalid: false,
};

export default InputText;