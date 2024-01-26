import React from "react";
import GlobalContext from "../../provider/GlobalContext";
import PageContext from "./PageContext";

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        orderDetailData: null,
    }

    handleOpenOrderDetail = (data) => {
        const { refCollections } = this.props;

        this.setState({
            orderDetailData: data
        }, () => {
            refCollections.orderDetailDialog.current.handleShowDialog();
        });
    }

    createContextValue = () => ({
        ...this.state,
        onOpenOrderDetail: this.handleOpenOrderDetail,
    });

    render() {
        const { children } = this.props;

        return (
            <PageContext.Provider value={this.createContextValue()}>
                {children}
            </PageContext.Provider>
        );
    }
}

export default PageContextProvider;
