import { useContext } from 'react';
import Select from '../../../components/Select';
import PageContext from '../PageContext';


const SelectVillage = ({ isInvalid, onChange }) => {
    const { villages, selectedRegionId, onChangeSelectedRegionId } = useContext(PageContext);

    const handleChangeValue = (val) => {
        onChangeSelectedRegionId('village', val);
        onChange(val);
    }

    return (
        <Select
            {...{ isInvalid }}
            onChange={handleChangeValue}
            options={villages}
            label="Kelurahan"
            placeholder="Pilih Kelurahan"
            required
            value={selectedRegionId.village}
        />
    );
}

export default SelectVillage;