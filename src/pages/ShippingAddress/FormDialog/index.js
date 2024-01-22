import React from 'react';
import {
    Dialog,
    DialogContent, CloseButton
} from '../../../components/StyledDialog';
import Form from './Form';
import CustomDialogTitle from './CustomDialogTitle';

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