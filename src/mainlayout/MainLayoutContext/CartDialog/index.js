import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import CartList from './CartList';

class CartDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;

        return (
            <Dialog open={isOpening}>
                <DialogContent css={{
                    '@md': {
                        width: '550px',
                    }
                }}>
                    <div style={{ padding: '23px 25px 8px' }}>
                        <DialogTitle>Keranjang Belanja</DialogTitle>
                        <CloseButton onClick={this.handleHideDialog} />
                    </div>
                    <CartList />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CartDialog;