import { useContext } from 'react';
import PageContext from '../PageContext';
import {
    DialogTitle
} from '../../../components/StyledDialog';

const CustomDialogTitle = () => {
    const { addressData } = useContext(PageContext);

    return (
        <DialogTitle>{addressData ? 'Ubah Alamat' : 'Tambah Alamat'}</DialogTitle>
    );
}

export default CustomDialogTitle;
