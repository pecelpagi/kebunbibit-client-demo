import React from "react";
import PageContext from "./PageContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        products: [],
        productPageCount: 0,
        category: null,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchData();
    }

    handleFetchData = () => {
        const { match: { params } } = this.props;
        const { toastify } = this.context;

        apiServiceUtility.handleFetchCategoryBySlug({
            toastify, setState: this.setState,
            slug: params.slug, onFetchProducts: apiServiceUtility.handleFetchProducts
        });
    }

    createContextValue = () => ({
        ...this.state,
        ...this.props,
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