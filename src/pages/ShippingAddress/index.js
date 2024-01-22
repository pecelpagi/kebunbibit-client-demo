import { useContext } from 'react';
import GlobalContext from '../../provider/GlobalContext';
import ShippingAddressItem from './ShippingAddressItem';
import InputFilterKeyword from './InputFilterKeyword';
import PageContextProvider from './PageContextProvider';
import AddButton from './AddButton';
import { useRefCollections } from './utils';
import FormDialog from './FormDialog';

const ShippingAddress = () => {
    const refCollections = useRefCollections();
    const { shippingAddressData } = useContext(GlobalContext);

    return (
        <PageContextProvider
            {...{ refCollections }}
        >
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
            <FormDialog
                ref={refCollections.formDialog}
            />
        </PageContextProvider>
    );
}

export default ShippingAddress;