import React from "react";
import PageContext from "./PageContext";
import GlobalContext from "../../provider/GlobalContext";
import * as apiServiceUtility from './api-service.utils';
import { createSelectedRegionId } from "./utils";
import { MATCH_MEDIA_TYPE, matchMediaChecker } from "../../utils";

class PageContextProvider extends React.Component {
    static contextType = GlobalContext;

    state = {
        addressData: null,
        provinces: [],
        cities: [],
        subdistricts: [],
        villages: [],
        selectedRegionId: createSelectedRegionId(),
    }

    setState = this.setState.bind(this);

    componentDidMount = () => {
        this.handleFetchProvinces();
    }

    handleOpenDialog = (addressData = null) => {
        const { refCollections } = this.props;
        
        let cities = [],
            subdistricts = [],
            villages = [];

        if (addressData) {
            cities = [{ value: addressData.city_id, label: addressData.city_name }];
            subdistricts = [{ value: addressData.subdistrict_id, label: addressData.subdistrict_name }];
            villages = [{ value: addressData.village_id, label: addressData.village_name }];
        }

        this.setState({
            addressData,
            selectedRegionId: createSelectedRegionId(addressData),
            cities,
            subdistricts,
            villages,
        }, () => {
            refCollections.formDialog.current.handleShowDialog();
        });
    }

    handleFetchProvinces = () => {
        const { toastify } = this.context;

        apiServiceUtility.handleFetchProvinces({ toastify, setState: this.setState });
    }

    handleFetchCities = (provinceId) => {
        const { toastify } = this.context;

        apiServiceUtility.handleFetchCities({ toastify, provinceId, setState: this.setState });
    }

    handleFetchSubdistricts = (cityId) => {
        const { toastify } = this.context;

        apiServiceUtility.handleFetchSubdistricts({ toastify, cityId, setState: this.setState });
    }

    handleFetchVillages = (subDistrictId) => {
        const { toastify } = this.context;

        apiServiceUtility.handleFetchVillages({ toastify, subDistrictId, setState: this.setState });
    }

    handleChangeSelectedRegionId = (key, value) => {
        const { selectedRegionId } = this.state;

        const clearSubdistricts = () => ({
            subdistricts: [],
            villages: [],
        });

        const clearVillages = () => ({
            villages: [],
        });

        const newSelectedRegionId = {
            ...selectedRegionId,
            [key]: value
        }

        let newStateValue = {
            selectedRegionId: newSelectedRegionId
        }

        if (key === 'province') {
            newStateValue = {
                ...newStateValue,
                ...clearSubdistricts(),
            }
            this.handleFetchCities(value);
        } else if (key === 'city') {
            newStateValue = {
                ...newStateValue,
                ...clearVillages(),
            }
            this.handleFetchSubdistricts(value);
        } else if (key === 'subdistrict') {
            this.handleFetchVillages(value);
        }

        this.setState(newStateValue);
    }

    handleSaveData = (submittedData) => {
        const { refCollections } = this.props;
        const { addressData } = this.state;
        const { toastify, onFetchShippingAddresses } = this.context;

        apiServiceUtility.handleSaveData({ toastify, submittedData, addressData }, () => {
            refCollections.formDialog.current.handleHideDialog();
            onFetchShippingAddresses();
        });
    }

    createContextValue = () => ({
        ...this.state,
        isInMobileView: !matchMediaChecker(MATCH_MEDIA_TYPE.MD),
        onOpenDialog: this.handleOpenDialog,
        onSaveData: this.handleSaveData,
        onFetchProvinces: this.handleFetchProvinces,
        onFetchCities: this.handleFetchCities,
        onFetchSubdistricts: this.handleFetchSubdistricts,
        onFetchVillages: this.handleFetchVillages,
        onChangeSelectedRegionId: this.handleChangeSelectedRegionId,
    });

    render() {
        const { children } = this.props;

        return (
            <PageContext.Provider value={this.createContextValue()}>
                {children}
            </PageContext.Provider>
        );
    }
}

export default PageContextProvider;