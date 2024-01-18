import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import StyledInput from "../StyledInput";

const InputText = (props) => {
  const {
    required, name, label, register, placeholder, defaultValue, registerOptions, type, isInvalid,
  } = props;

  return (
    <div>
      <Label {...{ label, required }} />
      <StyledInput {...{ placeholder, defaultValue, type, isInvalid }} {...register(name, { required, ...registerOptions })} />
    </div>
  );
}

InputText.propTypes = {
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

InputText.defaultProps = {
  label: undefined,
  name: undefined,
  required: false,
  register: () => ({}),
  placeholder: "",
  defaultValue: undefined,
  registerOptions: {},
  isInvalid: false,
};

export default InputText;