import { CaretDownIcon } from "@radix-ui/react-icons";
import { StyledButton } from "./button.styled-components";

const Button = ({ onClick }) => {
    return (
        <StyledButton
            id="show-category-button" className="text-sm" type="button"
            {...{ onClick }}><span id="show-category-button-text">Kategori<CaretDownIcon /></span></StyledButton>
    )
}

export default Button;