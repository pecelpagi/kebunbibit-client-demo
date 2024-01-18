import { useContext } from 'react';
import GlobalContext from '../../provider/GlobalContext';
import ShippingAddressItem from './ShippingAddressItem';
import InputFilterKeyword from './InputFilterKeyword';
import StyledButton from '../../components/StyledButton';
import ContextProvider, { ShippingAddressContext } from './ShippingAddressContext';

const AddButton = () => {
    const { onOpenDialogToCreate } = useContext(ShippingAddressContext);

    return (
        <StyledButton className="text-sm font-semibold" type="button" variant="primary" onClick={onOpenDialogToCreate}>
            <span className="hidden md:block">Tambah Alamat Baru</span>
            <span className="block md:hidden">Tambah</span>
        </StyledButton>
    );
}

export default () => {
    const { shippingAddressData } = useContext(GlobalContext);

    return (
        <ContextProvider>
            <div className="flex flex-col">
                <div className="text-base font-semibold border-b p-4">
                    <div>Alamat Pengiriman</div>
                </div>
                <div className="flex flex-col p-4 gap-4">
                    <div className="flex">
                        <div className="flex-1">
                            <InputFilterKeyword />
                        </div>
                        <div className="flex-1 flex justify-end">
                            <AddButton />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {shippingAddressData.map(x => (<ShippingAddressItem key={x.id} data={x} />))}
                    </div>
                </div>
            </div>
        </ContextProvider>
    );
}