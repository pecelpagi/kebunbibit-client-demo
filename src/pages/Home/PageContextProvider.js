import React from "react";
import PageContext from "./PageContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        products: [],
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchProducts();
    }

    handleFetchProducts = () => {
        const { toastify } = this.context;

        apiServiceUtility.handleFetchProducts({ toastify, setState: this.setState });
    }

    createContextValue = () => ({
        ...this.state,
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