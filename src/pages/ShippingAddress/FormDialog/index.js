import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import { ShippingAddressContext } from '../ShippingAddressContext';
import Form from './Form';

const CustomDialogTitle = () => {
    const { detailData } = useContext(ShippingAddressContext);

    return (
        <DialogTitle>{ detailData ? 'Ubah Alamat' : 'Tambah Alamat' }</DialogTitle>
    );
}

class FormDialog extends React.Component {
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
                        width: '450px',
                    }
                }}>
                    <div style={{ padding: '23px 25px 8px' }}>
                        <CustomDialogTitle />
                        <CloseButton onClick={this.handleHideDialog} />
                    </div>
                    <Form />
                </DialogContent>
            </Dialog>
        );
    }
}

export default FormDialog;