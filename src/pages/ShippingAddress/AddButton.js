import { useContext } from "react";
import PageContext from "./PageContext";
import StyledButton from '../../components/StyledButton';

const AddButton = () => {
    const { onOpenDialog } = useContext(PageContext);

    return (
        <StyledButton className="text-sm font-semibold" type="button" variant="primary" onClick={() => { onOpenDialog(); }}>
            <span className="hidden md:block">Tambah Alamat Baru</span>
            <span className="block md:hidden">Tambah</span>
        </StyledButton>
    );
}

export default AddButton;