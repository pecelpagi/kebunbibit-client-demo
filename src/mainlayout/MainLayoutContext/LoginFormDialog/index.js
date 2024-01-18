import React from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import * as apiService from '../../../data';
import Spinner from '../../../components/Spinner'
import Form from './Form';
import { catchError } from '../../../utils';

class LoginFormDialog extends React.Component {
    errorTimeOut = null;
    state = {
        isOpening: false,
        errorFromAPI: '',
        isLoading: false,
    }

    handleSetLoading = (isLoading) => { this.setState({ isLoading }); }

    handleSetError = (e = null) => {
        let errorFromAPI = '';

        if (e) errorFromAPI = catchError(e);

        this.setState({ errorFromAPI });

        if (this.errorTimeOut) clearTimeout(this.errorTimeOut);

        if (!errorFromAPI) return;

        this.errorTimeOut = setTimeout(() => {
            this.setState({ errorFromAPI: '' });
        }, 7000);
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    handleSubmitData = async (payload) => {
        try {
            this.handleSetLoading(true);

            await apiService.login(payload);

            window.location.href = '/';
        } catch (e) {
            this.handleSetLoading(false);
            this.handleSetError(e);
        }
    }

    render() {
        const { isOpening, isLoading, errorFromAPI } = this.state;

        return (
            <Dialog open={isOpening}>
                <DialogContent css={{
                    padding: '23px 25px',
                    '@md': {
                        width: '450px',
                    }
                }}>
                    <DialogTitle>Masuk</DialogTitle>
                    <CloseButton onClick={this.handleHideDialog} />
                    <Form onSubmit={this.handleSubmitData} {...{ errorFromAPI }} />
                    {isLoading ? <Spinner isAbsolute /> : null}
                </DialogContent>
            </Dialog>
        );
    }
}

export default React.forwardRef((props, ref) => {
    return <LoginFormDialog {...props} {...{ ref }} />
});