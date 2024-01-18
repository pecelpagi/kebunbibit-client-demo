import { useEffect, useState } from 'react';
import * as apiService from '../../../data';
import Select from '../../../components/Select';

const handleFetchVillages = async (subDistrictId, onSuccessfully) => {
    try {
        const res = await apiService.getVillages(subDistrictId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        onSuccessfully(formattedData)
    } catch (e) {
        console.error(e);
    }
}

export default ({ control, subDistrictId, value, isInvalid }) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (subDistrictId) handleFetchVillages(subDistrictId, setOptions);
    }, [subDistrictId]);

    return (
        <Select
            {...{ control, options, value, isInvalid }}
            label="Kelurahan"
            name="village_id"
            placeholder="Pilih Kelurahan"
            required
            fullWidth
        />
    );
}