import React from "react";
import { useHistory } from "react-router";
import LoginFormDialog from './LoginFormDialog';
import CartDialog from './CartDialog';
import { checkIsLoggedIn } from "../../utils";
import MainLayoutContext from "../MainLayoutContext";

class ClassComponent extends React.Component {
    isLoggedIn = checkIsLoggedIn();

    handleClickCart = () => {
        if (this.isLoggedIn) this.cartDialog.handleShowDialog();
        if (!this.isLoggedIn) this.loginFormDialog.handleShowDialog();
    }

    handleClickAccount = () => {
        if (!this.isLoggedIn) this.loginFormDialog.handleShowDialog();
        if (this.isLoggedIn) this.props.onNavigationToProfile();
    }

    createContextValue = () => ({
        onClickCart: this.handleClickCart,
        onClickAccount: this.handleClickAccount,
    });

    render() {
        const { children } = this.props;

        return (
            <MainLayoutContext.Provider value={this.createContextValue()}>
                {children}
                <LoginFormDialog
                    ref={(c) => { this.loginFormDialog = c; }}
                />
                <CartDialog
                    ref={(c) => { this.cartDialog = c; }}
                />
            </MainLayoutContext.Provider>
        );
    }
}

const MainLayoutProvider = (props) => {
    const history = useHistory();

    const handleNavigationToProfile = () => {
        history.push("/account/profile");
    }

    return <ClassComponent {...props} onNavigationToProfile={handleNavigationToProfile} />
};

export default MainLayoutProvider;