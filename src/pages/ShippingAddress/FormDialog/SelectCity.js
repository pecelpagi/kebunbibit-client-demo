import { useContext } from 'react';
import Select from '../../../components/Select';
import PageContext from '../PageContext';

const SelectCity = ({ isInvalid, onChange }) => {
    const { cities, selectedRegionId, onChangeSelectedRegionId } = useContext(PageContext);

    const handleChangeValue = (val) => {
        onChangeSelectedRegionId('city', val);
        onChange(val);
    }

    return (
        <Select
            {...{ isInvalid }}
            onChange={handleChangeValue}
            options={cities}
            label="Kota / Kabupaten"
            placeholder="Pilih Kota / Kabupaten"
            value={selectedRegionId.city}
            required
        />
    );
}

export default SelectCity;