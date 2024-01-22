import { useContext } from 'react';
import Select from '../../../components/Select';
import PageContext from '../PageContext';

const SelectSubDistrict = ({ isInvalid, onChange }) => {
    const { subdistricts, selectedRegionId, onChangeSelectedRegionId } = useContext(PageContext);

    const handleChangeValue = (val) => {
        onChangeSelectedRegionId('subdistrict', val);
        onChange(val);
    }

    return (
        <Select
            {...{ isInvalid }}
            onChange={handleChangeValue}
            options={subdistricts}
            label="Kecamatan"
            placeholder="Pilih Kecamatan"
            required
            value={selectedRegionId.subdistrict}
        />
    );
}

export default SelectSubDistrict;