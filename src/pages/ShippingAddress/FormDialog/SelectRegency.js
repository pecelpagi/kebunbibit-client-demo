import { useEffect, useState } from 'react';
import * as apiService from '../../../data';
import Select from '../../../components/Select';

const handleFetchRegencies = async (provinceId, onSuccessfully) => {
    try {
        const res = await apiService.getCities(provinceId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        onSuccessfully(formattedData)
    } catch (e) {
        console.error(e);
    }
}

export default ({ control, provinceId, value, isInvalid, changeEvent }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (provinceId) handleFetchRegencies(provinceId, setOptions);
    }, [provinceId]);

    return (
        <Select
            {...{ control, options, value, isInvalid, changeEvent }}
            label="Kota / Kabupaten"
            name="city_id"
            placeholder="Pilih Kota / Kabupaten"
            required
            fullWidth
        />
    );
}