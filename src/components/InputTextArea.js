import React from "react";
import PropTypes from "prop-types";
import StyledTextArea from "./StyledTextArea";
import Label from "./InputText/Label";

const InputTextArea = (props) => {
  const {
    required, name, label, register, placeholder, defaultValue, registerOptions, type,
    isInvalid,
  } = props;

  return (
    <div>
      <Label {...{ label, required }} />
      <StyledTextArea {...{ placeholder, defaultValue, type, isInvalid }} rows="2" {...register(name, { required, ...registerOptions })} />
    </div>
  );
}

InputTextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  register: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  registerOptions: PropTypes.shape({}),
  isInvalid: PropTypes.bool,
};

InputTextArea.defaultProps = {
  label: undefined,
  name: undefined,
  required: false,
  register: () => ({}),
  placeholder: "",
  defaultValue: undefined,
  registerOptions: {},
  isInvalid: false,
};

export default InputTextArea;