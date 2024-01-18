import React, { useContext, useEffect, useState } from 'react';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { replaceAllExceptNumerics } from "../../utils";
import GlobalContext from '../../provider/GlobalContext';
import * as apiService from "../../data";

let timeoutRefetch = null;

const QtyInput = ({ value: propValue, productId }) => {
    const { onFetchCart } = useContext(GlobalContext);
    const [value, setValue] = useState(propValue);

    const handleChangeValue = (val) => { setValue(replaceAllExceptNumerics(val)); }

    const handleDecreaseQty = () => {
        if (value < 2) return;

        const newQty = parseInt(value) - 1;

        handleChangeValue(newQty);
    }

    const handleIncreaseQty = () => {
        const newQty = parseInt(value) + 1;

        handleChangeValue(newQty);
    }

    const handleUpdateCart = async () => {
        let qty = 0;

        if (String(value).length > 0) qty = value;

        await apiService.updateCart(productId, qty);
        
        onFetchCart();
    }

    useEffect(() => {
        handleChangeValue(propValue);
    }, [propValue]);

    useEffect(() => {
        if (timeoutRefetch) clearTimeout(timeoutRefetch);
        timeoutRefetch = setTimeout(() => { handleUpdateCart() }, 500);
    }, [value]);

    return (
        <div className="flex gap-2" style={{ height: '36px' }}>
            <StyledButton
                className="text-sm font-semibold"
                type="button"
                variant="primary"
                outlined
                onClick={handleDecreaseQty}
            >
                <span className="flex items-center justify-center gap-1"><MinusIcon /></span>
            </StyledButton>
            <StyledInput
                css={{
                    background: '#f1f1f1',
                    border: '1px solid transparent !important',
                    borderRadius: '4px',
                    color: '#000',
                    textAlign: 'center',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                }}
                onChange={(e) => { handleChangeValue(e.target.value) }} value={value} />
            <StyledButton
                className="text-sm font-semibold"
                type="button"
                variant="primary"
                onClick={handleIncreaseQty}
            >
                <span className="flex items-center justify-center gap-1"><PlusIcon /></span>
            </StyledButton>
        </div>
    );
}

export default QtyInput;