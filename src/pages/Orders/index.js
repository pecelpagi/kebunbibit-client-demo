import { useContext } from 'react';
import InputFilterKeyword from './InputFilterKeyword';
import OrderTypeFilter from './OrderTypeFilter';
import CustomerOrderItem from './CustomerOrderItem';
import ContextProvider from './PageContext';
import GlobalContext from '../../provider/GlobalContext';

const Orders = () => {
    const { customerOrdersData } = useContext(GlobalContext);

    return (
        <ContextProvider>
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
                    <div className="flex flex-col gap-4">
                        {customerOrdersData.map(x => (<CustomerOrderItem key={x.id} data={x} />))}
                    </div>
                </div>
            </div>
        </ContextProvider>
    );
}

export default Orders;