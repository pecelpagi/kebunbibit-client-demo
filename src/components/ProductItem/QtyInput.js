import React, { useContext } from 'react';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import { replaceAllExceptNumerics } from "../../utils";
import GlobalContext from '../../provider/GlobalContext';
import * as apiService from "../../data";

let timeoutRefetch = null;

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        }
    }

    handleChangeValue = (val) => {
        this.setState({ value: +replaceAllExceptNumerics(val) }, () => {
            this.handleUpdateCart();
        });
    }

    handleDecreaseQty = () => {
        const { value } = this.state;

        if (value < 2) return;

        const newQty = parseInt(value) - 1;

        this.handleChangeValue(newQty);
    }

    handleIncreaseQty = () => {
        const { value } = this.state;

        const newQty = parseInt(value) + 1;

        this.handleChangeValue(newQty);
    }

    handleUpdateCart = async () => {
        if (timeoutRefetch) clearTimeout(timeoutRefetch);
        timeoutRefetch = setTimeout(() => { this.processUpdatingCart(); }, 750);
    }

    processUpdatingCart = async () => {
        const { value } = this.state;
        const { onFetchCart, onSetIsFetchingCart, productId } = this.props;

        onSetIsFetchingCart(true);

        let qty = 0;

        if (String(value).length > 0) qty = value;

        await apiService.updateCart(productId, qty);
        await onFetchCart();

        onSetIsFetchingCart(false);
    }

    render() {
        const { value } = this.state;

        return (
            <div className="flex gap-2" style={{ height: '36px' }}>
                <StyledButton
                    className="text-sm font-semibold"
                    type="button"
                    variant="primary"
                    outlined
                    onClick={this.handleDecreaseQty}
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
                    onChange={(e) => { this.handleChangeValue(e.target.value) }} value={value} />
                <StyledButton
                    className="text-sm font-semibold"
                    type="button"
                    variant="primary"
                    onClick={this.handleIncreaseQty}
                >
                    <span className="flex items-center justify-center gap-1"><PlusIcon /></span>
                </StyledButton>
            </div>
        );
    }
}

const QtyInput = ({ value, productId }) => {
    const globalContext = useContext(GlobalContext);

    return (
        <ClassComponent {...globalContext} {...{ value, productId }} />
    )
}

export default QtyInput;