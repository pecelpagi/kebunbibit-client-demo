import { useEffect, useState } from 'react';
import * as apiService from '../../../data';
import Select from '../../../components/Select';

const handleFetchDistricts = async (cityId, onSuccessfully) => {
    try {
        const res = await apiService.getSubdistricts(cityId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        onSuccessfully(formattedData)
    } catch (e) {
        console.error(e);
    }
}

export default ({ control, cityId, value, isInvalid, changeEvent }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (cityId) handleFetchDistricts(cityId, setOptions);
    }, [cityId]);

    return (
        <Select
            {...{ control, options, value, isInvalid, changeEvent }}
            label="Kecamatan"
            name="subdistrict_id"
            placeholder="Pilih Kecamatan"
            required
            fullWidth
        />
    );
}