import { useEffect, useState } from 'react';
import * as apiService from '../../../data';
import Select from '../../../components/Select';

const handleFetchProvinces = async (onSuccessfully) => {
    try {
        const res = await apiService.getProvinces();
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        onSuccessfully(formattedData)
    } catch (e) {
        console.error(e);
    }
}

export default ({ control, isInvalid, changeEvent }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        handleFetchProvinces(setOptions);
    }, []);

    return (
        <Select
            {...{ control, options, isInvalid, changeEvent }}
            label="Provinsi"
            name="province_id"
            placeholder="Pilih Provinsi"
            required
            fullWidth
        />
    );
}