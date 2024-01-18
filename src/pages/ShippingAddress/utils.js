import * as apiService from '../../data';
import { catchError } from '../../utils';

export const processSavingData = async (payload, onError, onSuccessfully) => {
    try {
        if (!payload.id) await apiService.createShippingAddress(payload);
        if (payload.id) await apiService.updateShippingAddress(payload);

        onSuccessfully();
    } catch (e) {
        onError(catchError(e));
    }
}
