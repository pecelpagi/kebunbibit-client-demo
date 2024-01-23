import { useState } from "react";

export const useBusinessLogic = () => {
    const [isOpening, setIsOpening] = useState(false);
    const handleToggleMenu = () => { setIsOpening(!isOpening); };

    const handleClickOutside = (e) => {
        if (e.target.id !== "show-category-button" && e.target.id !== "show-category-button-text") setIsOpening(false);
    }

    return {
        isOpening,
        setIsOpening,
        onToggleMenu: handleToggleMenu,
        onClickOutside: handleClickOutside,
    }
}