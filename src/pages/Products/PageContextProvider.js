import React from "react";
import PageContext from "./PageContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';
import { getQueryParams } from "../../utils";

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        products: [],
        productPageCount: 0,
        category: null,
        currentPage: 1,
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        console.log('DEBUG-PROPS: ', this.props);
        this.initialFetchingData();
    }

    handleSetCurrentPage = (page) => {
        this.setState({ currentPage: page }, () => {
            this.handleFetchProducts();
        });
    }

    initialFetchingData = () => {
        const { match: { params } } = this.props;
        const { toastify } = this.context;

        const queryParams = getQueryParams();

        let currentPage = 1;

        if (queryParams) currentPage = queryParams.page;

        this.setState({ currentPage }, () => {
            apiServiceUtility.handleFetchCategoryBySlug({
                toastify, setState: this.setState, currentPage,
                slug: params.slug, onFetchProducts: apiServiceUtility.handleFetchProducts
            });
        });
    }

    handleFetchProducts = () => {
        const { location, history } = this.props;
        const { category, currentPage } = this.state;
        const { toastify } = this.context;

        apiServiceUtility.handleFetchProducts({
            location, history,
            toastify, categoryId: category.id,
            setState: this.setState, currentPage
        });
    }

    createContextValue = () => ({
        ...this.state,
        ...this.props,
        onSetCurrentPage: this.handleSetCurrentPage,
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