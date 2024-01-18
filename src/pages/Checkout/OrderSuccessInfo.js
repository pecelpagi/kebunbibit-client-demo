import { CheckCircledIcon } from '@radix-ui/react-icons';
import React from 'react';
import StyledButton from '../../components/StyledButton';
import {
    Dialog,
    DialogContent
} from '../../components/StyledDialog';
import { styled } from '../../stitches.config';
import { createSizeProps } from '../LayoutAccount/utils';

const iconSize = createSizeProps(32);

const InfoWrapper = styled('div', {
    background: '#ebffef',
    border: '1px solid $backgroundPrimary',
    padding: 12,
    alignItems: 'center',
})

class FormDialog extends React.Component {
    state = {
        isOpening: false,
    }

    handleShowDialog = () => { this.setState({ isOpening: true }); }

    handleHideDialog = () => { this.setState({ isOpening: false }); }

    render() {
        const { isOpening } = this.state;

        return (
            <Dialog open={isOpening}>
                <DialogContent css={{
                    '@md': {
                        width: '450px',
                    }
                }}>
                    <div style={{ padding: '25px' }} className="flex flex-col">
                        <InfoWrapper className="flex mb-8 gap-3 rounded-md">
                            <div className="text-lime-500">
                                <CheckCircledIcon {...iconSize} />
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-semibold">Yeay, Berhasil 🎉</div>
                                <div className="text-sm">Terima kasih. Pesanan Anda sudah kami terima.</div>
                            </div>
                        </InfoWrapper>
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