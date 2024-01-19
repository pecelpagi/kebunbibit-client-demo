import React, { useRef } from "react";
import Toastify from "./Toastify";
import { useContextReducer } from "./context.utils";
import GlobalContext from "./GlobalContext";

const AppContext = ({ children }) => {
    const reducedContext = useContextReducer();
    const toastifyRef = useRef(null);

    const handleShowDemoOnlyNotification = () => { toastifyRef.current.notifyError("Fitur ini tidak tersedia dalam versi demo"); }

    const contextValue = {
        ...reducedContext,
        toastify: toastifyRef.current,
        onShowDemoOnlyNotification: handleShowDemoOnlyNotification
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
            <Toastify ref={toastifyRef} />
        </GlobalContext.Provider>
    );
};

export default AppContext;