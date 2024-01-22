import * as apiService from '../../data';
import { catchError } from '../../utils';

export const handleSaveData = async ({ toastify, submittedData, addressData }, onSuccessCalbackFn = () => { }) => {
    try {
        let payload = submittedData;

        if (addressData) payload = { ...payload, id: addressData.id };

        if (!payload.id) await apiService.createShippingAddress(payload);
        if (payload.id) await apiService.updateShippingAddress(payload);

        toastify.notifyInfo('Data berhasil tersimpan');
        onSuccessCalbackFn();
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchProvinces = async ({ toastify, setState }) => {
    try {
        const res = await apiService.getProvinces();
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        setState({ provinces: formattedData });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchCities = async ({ toastify, provinceId, setState }) => {
    try {
        const res = await apiService.getCities(provinceId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        setState({ cities: formattedData });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchSubdistricts = async ({ toastify, cityId, setState }) => {
    try {
        const res = await apiService.getSubdistricts(cityId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        setState({ subdistricts: formattedData });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}

export const handleFetchVillages = async ({ toastify, subDistrictId, setState }) => {
    try {
        const res = await apiService.getVillages(subDistrictId);
        const formattedData = res.data.map(x => ({ ...x, value: x.id, label: x.name }));

        setState({ villages: formattedData });
    } catch (e) {
        toastify.notifyError(catchError(e));
    }
}