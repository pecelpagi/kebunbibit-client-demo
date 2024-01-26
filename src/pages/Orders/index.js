import InputFilterKeyword from './InputFilterKeyword';
import OrderTypeFilter from './OrderTypeFilter';
import PageContextProvider from './PageContextProvider';
import OrderDetail from './OrderDetail';
import { useRefCollections } from './utils';
import CustomerOrders from './CustomerOrders';

const Orders = () => {
    const refCollections = useRefCollections();

    return (
        <PageContextProvider
            {...{ refCollections }}
        >
            <div className="flex flex-col">
                <div className="text-base font-semibold border-b p-4">
                    <div>Pesanan Saya</div>
                </div>
                <div className="flex flex-col p-4 gap-4">
                    <div className="flex">
                        <div className="flex-1">
                            <InputFilterKeyword />
                        </div>
                        <div className="flex-1 flex justify-end">
                            <OrderTypeFilter />
                        </div>
                    </div>
                    <CustomerOrders />
                </div>
            </div>
            <OrderDetail
                ref={refCollections.orderDetailDialog}
            />
        </PageContextProvider>
    );
}

export default Orders;