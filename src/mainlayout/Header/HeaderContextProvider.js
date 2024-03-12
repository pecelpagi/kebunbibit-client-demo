import React from "react";
import HeaderContext from "./HeaderContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';
import { getQueryParams, isHasProperty } from "../../utils";

let searchTimeout = null;

class HeaderContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        isEnteringSearchInput: false,
        isSearching: false,
        searchResults: [],
        searchKeyword: '',
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        if (searchTimeout) clearTimeout(searchTimeout);
        this.initSetSearchKeyword();
    }

    initSetSearchKeyword = () => {
        const queryParams = getQueryParams();

        if (queryParams && isHasProperty(queryParams, 'q')) {
            this.handleSearchProducts(queryParams.q);
        }
    }

    handleSetIsEnteringSearchInput = (isEnteringSearchInput) => {
        this.setState({ isEnteringSearchInput })
    }

    handleSearchProducts = (keyword) => {
        const { toastify } = this.context;

        this.setState({ searchKeyword: keyword });

        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            apiServiceUtility.handleSearchProducts({ keyword, toastify, setState: this.setState });
        }, 500);
    }

    createContextValue = () => ({
        ...this.state,
        onSetIsEnteringSearchInput: this.handleSetIsEnteringSearchInput,
        onSearchProducts: this.handleSearchProducts,
    });

    render() {
        const { children } = this.props;

        return (
            <HeaderContext.Provider value={this.createContextValue()}>
                {children}
            </HeaderContext.Provider>
        );
    }
}

export default HeaderContextProvider;