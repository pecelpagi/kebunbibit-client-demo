import React, { useContext } from "react";
import GlobalContext from "../../provider/GlobalContext";
import OrderDetail from './OrderDetail';

export const PageContext = React.createContext();

class ContextProvider extends React.Component {
    state = {
        detailData: null,
    }

    handleOpenOrderDetail = (data) => {
        this.setState({
            detailData: data
        }, () => {
            this.orderDetail.handleShowDialog();
        });
    }

    createContextDataHandler = () => ({
        onOpenOrderDetail: this.handleOpenOrderDetail,
    });

    createContextValue = () => ({
        ...this.state,
        ...this.createContextDataHandler(),
    });

    render() {
        const { children } = this.props;

        return (
            <PageContext.Provider value={this.createContextValue()}>
                {children}
                <OrderDetail
                    ref={(c) => {
                        this.orderDetail = c;
                    }}
                />
            </PageContext.Provider>
        );
    }
}

const ProviderWrapper = (props) => {
    const { toastify, onFetchCustomerOrders } = useContext(GlobalContext);

    return (<ContextProvider {...props} {...{ toastify, onFetchCustomerOrders }} />)
};

export default ProviderWrapper;