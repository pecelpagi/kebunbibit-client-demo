import { useState } from "react";
import Select from "../../components/Select";
import { ORDER_STATUS_TYPE } from "./enums";

const options = [
    {
        value: 'ALL', label: 'Semua Pesanan'
    },
    {
        value: ORDER_STATUS_TYPE.NEW, label: 'Menunggu Pembayaran'
    },
    {
        value: ORDER_STATUS_TYPE.PROCESSED, label: 'Sedang Proses'
    },
    {
        value: ORDER_STATUS_TYPE.SHIPPED, label: 'Sudah Dikirim'
    },
    {
        value: ORDER_STATUS_TYPE.RECEIVED, label: 'Sudah Diterima'
    },
    {
        value: ORDER_STATUS_TYPE.CANCELED, label: 'Dibatalkan'
    },
]

const OrderTypeFilter = () => {
    const [selectedValue, setSelectedValue] = useState('ALL');

    const handleChangeValue = (val) => {
        setSelectedValue(val);
    }

    return (
        <div style={{ width: '235px' }}>
            <Select
                {...{ options }}
                menuPlacement="auto"
                value={selectedValue}
                onChange={handleChangeValue}
            />
        </div>
    );
}

export default OrderTypeFilter;