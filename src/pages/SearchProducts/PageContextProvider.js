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
        currentPage: 1,
        searchKeyword: '',
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.initialFetchingData();
    }

    handleSetCurrentPage = (page) => {
        this.setState({ currentPage: page }, () => {
            this.handleFetchProducts();
        });
    }

    initialFetchingData = () => {
        const queryParams = getQueryParams();

        let currentPage = 1;
        let searchKeyword = ''

        if (queryParams) {
            currentPage = queryParams.page;
            searchKeyword = queryParams.q;
        }

        this.setState({ currentPage, searchKeyword }, () => {
            this.handleFetchProducts();
        });
    }

    handleFetchProducts = () => {
        const { location, history } = this.props;
        const { currentPage, searchKeyword } = this.state;
        const { toastify } = this.context;

        apiServiceUtility.handleFetchProducts({
            location, history,
            toastify,
            keyword: searchKeyword, 
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