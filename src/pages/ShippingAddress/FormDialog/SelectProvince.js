import { useContext } from 'react';
import Select from '../../../components/Select';
import PageContext from '../PageContext';

const SelectProvince = ({ isInvalid, onChange }) => {
    const { provinces, selectedRegionId, onChangeSelectedRegionId } = useContext(PageContext);

    const handleChangeValue = (val) => {
        onChangeSelectedRegionId('province', val);
        onChange(val);
    }

    return (
        <Select
            {...{ isInvalid}}
            onChange={handleChangeValue}
            options={provinces}
            label="Provinsi"
            placeholder="Pilih Provinsi"
            value={selectedRegionId.province}
            required
        />
    );
}

export default SelectProvince;