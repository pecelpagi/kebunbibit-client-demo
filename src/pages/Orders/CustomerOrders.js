import React, { useContext } from "react";
import GlobalContext from "../../provider/GlobalContext";
import CustomerOrderItem from "./CustomerOrderItem";

const CustomerOrders = () => {
    const { customerOrdersData } = useContext(GlobalContext);

    return (
        <div className="flex flex-col gap-4">
            {customerOrdersData.map(x => (<CustomerOrderItem key={x.id} data={x} />))}
        </div>
    );
}

export default CustomerOrders;