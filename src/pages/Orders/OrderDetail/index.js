import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import DisplayData from './DisplayData';

class OrderDetail extends React.Component {
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
                        width: '538px',
                    }
                }}>
                    <div className="border-b border-slate-200 border-solid" style={{ padding: '23px 25px 8px' }}>
                        <DialogTitle>Detail Pesanan</DialogTitle>
                        <CloseButton onClick={this.handleHideDialog} />
                    </div>
                    <DisplayData />
                </DialogContent>
            </Dialog>
        );
    }
}

export default OrderDetail;