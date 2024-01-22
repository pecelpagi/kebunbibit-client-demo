import React from "react";
import PropTypes from "prop-types";
import StyledTextArea from "./StyledTextArea";
import Label from "./Label";

const InputTextArea = (props) => {
  const {
    required, label, ...rest
  } = props;

  return (
    <div>
      <Label {...{ label, required }} />
      <StyledTextArea
        rows="2"
        {...rest}
      />
    </div>
  );
}

InputTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  isInvalid: PropTypes.bool,
};

InputTextArea.defaultProps = {
  label: undefined,
  name: undefined,
  required: false,
  placeholder: "",
  isInvalid: false,
};

export default InputTextArea;