import React, { useContext } from "react";
import GlobalContext from "../../provider/GlobalContext";
import FormDialog from './FormDialog';
import { processSavingData } from './utils';

export const ShippingAddressContext = React.createContext();

class ContextProvider extends React.Component {
    state = {
        detailData: null,
    }

    handleSetDetailData = (detailData) => {
        this.setState({
            detailData
        });
    }

    handleOpenDialogToCreate = () => {
        this.setState({
            detailData: null
        }, () => {
            this.formDialog.handleShowDialog();
        });
    }

    handleOpenDialogToEdit = (detailData) => {
        this.setState({
            detailData,
        }, () => {
            this.formDialog.handleShowDialog();
        });
    }

    handleSaveData = (data) => {
        const { detailData } = this.state;
        const { toastify, onFetchShippingAddresses } = this.props;
        
        const onError = (e) => {
            toastify.notifyError(e);
        }

        const onSuccessfully = () => {
            toastify.notifyInfo('Data berhasil tersimpan');
            this.formDialog.handleHideDialog();
            onFetchShippingAddresses();
        }

        let payload = data;

        if (detailData) payload = { ...payload, id: detailData.id };

        processSavingData(payload, onError, onSuccessfully);
    }

    createContextDataHandler = () => ({
        onSetDetailData: this.handleSetDetailData,
        onOpenDialogToCreate: this.handleOpenDialogToCreate,
        onOpenDialogToEdit: this.handleOpenDialogToEdit,
        onSaveData: this.handleSaveData,
    });

    createContextValue = () => ({
        ...this.state,
        ...this.createContextDataHandler(),
    });

    render() {
        const { children } = this.props;

        return (
            <ShippingAddressContext.Provider value={this.createContextValue()}>
                {children}
                <FormDialog
                    ref={(c) => {
                        this.formDialog = c;
                    }}
                />
            </ShippingAddressContext.Provider>
        );
    }
}

export default (props) => {
    const { toastify, onFetchShippingAddresses } = useContext(GlobalContext);

    return (<ContextProvider {...props} {...{ toastify, onFetchShippingAddresses }} />)
};