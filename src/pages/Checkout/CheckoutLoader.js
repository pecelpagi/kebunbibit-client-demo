import React from 'react';
import Spinner from '../../components/Spinner';
import {
    Dialog,
    DialogContent
} from '../../components/StyledDialog';

class CheckoutLoader extends React.Component {
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
                    height: '150px',
                    width: '280px'
                }}>
                    <Spinner isAbsolute />
                </DialogContent>
            </Dialog>
        );
    }
}

export default CheckoutLoader;