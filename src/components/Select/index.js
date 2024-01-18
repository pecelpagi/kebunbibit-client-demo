import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { COLOR_DATA } from '../../stitches.config';
import Label from "../InputText/Label";
import AsyncSelect from "./AsyncSelect";
import DefaultSelect from "./DefaultSelect";

export const SELECT_TYPE = {
    DEFAULT: "DEFAULT",
    ASYNC: "ASYNC",
}

const customStyles = (isInvalid) => ({
    control: (base) => {
        return {
            ...base,
            height: 36,
            minHeight: 36,
            fontSize: '0.875rem',
            boxShadow: 'none',
            ...isInvalid ? { borderColor: '#ef144a' } : {},
            '&:hover': {
                ...isInvalid ? { borderColor: '#ef144a' } : {}
            }
        };
    },
    menu: base => ({
        ...base,
        fontSize: '0.875rem',
    })
});

const SelectComponent = React.forwardRef((props, ref) => {
    const {
        options, label, required, value, onChange, selectType, onFetch, changeEvent, fullWidth,
        menuPlacement, isInvalid, placeholder
    } = props;

    const selectStyles = {
        styles: customStyles(isInvalid),
        theme: (theme) => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary: isInvalid ? '#ef144a' : COLOR_DATA.BACKGROUND_PRIMARY,
                primary25: COLOR_DATA.BACKGROUND_TERTIARY
            },
        })
    }

    const handleChangeValue = (e) => {
        onChange(e.value);
        changeEvent(e.value);
    }

    return (
        <div>
            <Label {...{ label, required }} />
            <div className="relative">
                {selectType === SELECT_TYPE.DEFAULT && (
                    <DefaultSelect
                        {...selectStyles}
                        {...{ options, value, fullWidth, menuPlacement, placeholder }}
                        onChange={handleChangeValue}
                    />
                )}
                {selectType === SELECT_TYPE.ASYNC && (
                    <AsyncSelect
                        {...selectStyles}
                        {...{ onFetch, value, menuPlacement }}
                        onChange={handleChangeValue}
                    />
                )}
            </div>
        </div>
    );
});

SelectComponent.propTypes = {
    selectType: PropTypes.string,
    onFetch: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({})),
    changeEvent: PropTypes.func,
    fullWidth: PropTypes.bool,
    menuPlacement: PropTypes.string,
    isInvalid: PropTypes.bool,
    placeholder: PropTypes.string,
};

SelectComponent.defaultProps = {
    onFetch: () => { },
    selectType: SELECT_TYPE.DEFAULT,
    options: [],
    changeEvent: () => { },
    fullWidth: false,
    menuPlacement: 'auto',
    isInvalid: false,
    placeholder: undefined,
};

export default (props) => {
    const { name, control, value, required } = props;

    if (!control) return (<SelectComponent {...props} />);

    return (
        <Controller
            {...{ name, control }}
            {...value ? { value } : { defaultValue: value }}
            rules={{ required }}
            render={({ field }) => <SelectComponent {...props} {...field} />}
        />
    )
};