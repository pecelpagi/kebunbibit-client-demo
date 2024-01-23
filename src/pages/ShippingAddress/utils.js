import { useRef } from 'react';

export const useRefCollections = () => {
    const formDialog = useRef(null);

    return {
        formDialog,
    };
};

export const createSelectedRegionId = (addressData = null) => ({
    province: addressData ? addressData.province_id : '',
    city: addressData ? addressData.city_id : '',
    subdistrict: addressData ? addressData.subdistrict_id : '',
    village: addressData ? addressData.village_id : '',
});