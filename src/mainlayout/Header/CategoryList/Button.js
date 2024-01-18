import { CaretDownIcon } from "@radix-ui/react-icons";
import { styled } from "../../../stitches.config";

const StyledButton = styled('button', {
    height: 'max-content',
    padding: '8px',
    color: '$colorSecondary',
    '& span': {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    }
});

export default ({ onClick }) => {
    return (
        <StyledButton id="show-category-button" className="text-sm" type="button" {...{ onClick }}><span id="show-category-button-text">Kategori<CaretDownIcon /></span></StyledButton>
    )
}