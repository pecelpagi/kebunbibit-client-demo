import { CheckCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import StyledButton from '../../components/StyledButton';
import {
    Dialog,
    DialogContent
} from '../../components/StyledDialog';
import { styled } from '../../stitches.config';
import { createSizeProps } from '../LayoutAccount/utils';
import Box from '../../components/Box';
import OrderedProductItem from './OrderedProductItem';
import GlobalContext from '../../provider/GlobalContext';

const iconSize = createSizeProps(32);

const InfoWrapper = styled('div', {
    background: '#ebffef',
    border: '1px solid $backgroundPrimary',
    padding: 12,
    alignItems: 'center',
})

class FormDialog extends React.Component {
    static contextType = GlobalContext;

    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;
        const { cartData, shippingAddressData } = this.context;

        const address = shippingAddressData.find(x => !!x.is_default);

        return (
            <Dialog open={isOpening}>
                <DialogContent css={{
                    '@md': {
                        width: '450px',
                    }
                }}>
                    <div style={{ padding: '25px' }} className="flex flex-col">
                        <InfoWrapper className="flex gap-3 mb-4 rounded-md">
                            <div className="text-lime-500">
                                <CheckCircledIcon {...iconSize} />
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-semibold">Yeay, Berhasil 🎉</div>
                                <div className="text-sm">Terima kasih. Pesanan Anda sudah kami terima.</div>
                            </div>
                        </InfoWrapper>
                        <Box className='divide-y divide-dashed flex flex-col'>
                            <Box
                                className='mb-3'
                                css={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr auto',
                                    alignItems: 'center',
                                }}
                            >
                                <Box>
                                    <Box className='text-sm'>Nomor Pesanan</Box>
                                    <Box className='font-bold'>KBUBBKRMC71</Box>
                                </Box>
                                <Box className='text-sm'>
                                    18 November 2022 20:48:40
                                </Box>
                            </Box>
                            <Box>
                                <OrderedProductItem data={cartData[0]} css={{ padding: '12px 0' }} />
                            </Box>
                            {address && (
                                <Box className='pt-2 pb-4'>
                                    <div className="flex flex-col gap-1 flex-1 text-sm border border-x-0 border-y-0">
                                        <div className="font-semibold">{address.receiver_name}&nbsp;<span className="font-normal">({address.address_label})</span></div>
                                        <div>{address.phone}</div>
                                        <div>{`${address.address} Kel. ${address.village_name} Kec. ${address.subdistrict_name} `}</div>
                                        <div>{`${address.city_name}, ${address.province_name} ${address.postal_code ? `(${address.postal_code})` : ''}`}</div>
                                    </div>
                                </Box>
                            )}
                        </Box>
                        <div className="flex flex-col gap-3 font-semibold text-sm">
                            <StyledButton className="w-full" variant="primary" type="button" outlined>Lihat Pesanan Saya</StyledButton>
                            <StyledButton className="w-full" variant="primary" onClick={() => { window.location.href = '/' }} type="button">Kembali ke Halaman Utama</StyledButton>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}

export default FormDialog;