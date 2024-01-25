import React from "react";
import PageContext from "./PageContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';
import Spinner from '../../components/Spinner';

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        product: null,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchProduct();
    }

    handleFetchProduct = () => {
        const { match: { params } } = this.props;
        const { toastify } = this.context;

        apiServiceUtility.handleFetchProduct({ toastify, setState: this.setState, productId: params.id });
    }

    createContextValue = () => ({
        ...this.state,
        ...this.props,
    });

    render() {
        const { product } = this.state;
        const { children } = this.props;

        if (!product) return <Spinner />

        return (
            <PageContext.Provider value={this.createContextValue()}>
                {children}
            </PageContext.Provider>
        );
    }
}

export default PageContextProvider;