import { useEffect } from "react";
import Spinner from "../components/Spinner";
import * as apiService from '../data';
import { checkIsLoggedIn } from "../utils";

const Logout = () => {
    const handleLogout = async () => {
        try {
            await apiService.logout();

            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (checkIsLoggedIn()) handleLogout();
    }, []);

    return (<Spinner />);
}

export default Logout;