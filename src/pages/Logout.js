import { useCallback, useContext, useEffect } from "react";
import Spinner from "../components/Spinner";
import * as apiService from '../data';
import { catchError, checkIsLoggedIn } from "../utils";
import GlobalContext from "../provider/GlobalContext";

const Logout = () => {
    const { toastify } = useContext(GlobalContext);

    const handleLogout = useCallback(async () => {
        try {
            await apiService.logout();

            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } catch (err) {
            toastify.notifyError(catchError(err));
        }
    }, [toastify]);

    useEffect(() => {
        if (checkIsLoggedIn()) handleLogout();
    }, [handleLogout]);

    return (<Spinner />);
}

export default Logout;