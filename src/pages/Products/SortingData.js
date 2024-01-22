import { useState } from "react";
import Select from "../../components/Select";
import { SORTING_TYPE } from "./utils";

const options = [
    {
        value: SORTING_TYPE.MOST_POPULAR, label: 'Paling Populer'
    },
    {
        value: SORTING_TYPE.NEWEST, label: 'Paling Baru'
    },
    {
        value: SORTING_TYPE.HIGHEST_PRICE, label: 'Harga Tertinggi'
    },
    {
        value: SORTING_TYPE.LOWEST_PRICE, label: 'Harga Terendah'
    },
    {
        value: SORTING_TYPE.ASCENDING, label: 'Abjad (A - Z)'
    },
    {
        value: SORTING_TYPE.DESCENDING, label: 'Abjad (Z - A)'
    },
]

const SortingData = () => {
    const [selectedValue, setSelectedValue] = useState(SORTING_TYPE.MOST_POPULAR);

    const handleChangeValue = (val) => {
        setSelectedValue(val);
    }

    return (
        <div style={{ width: '235px' }}>
            <Select
                {...{ options }}
                menuPlacement="auto"
                menuPosition="fixed"
                value={selectedValue}
                onChange={handleChangeValue}
            />
        </div>
    );
}

export default SortingData;