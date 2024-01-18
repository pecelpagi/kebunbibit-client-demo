import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";

const paymentData = [
    {
        id: '1',
        title: 'Virtual Account',
        description: 'BCA, Mandiri, CIMB Niaga'
    },
    {
        id: '2',
        title: 'Convenience Store',
        description: 'Alfamart'
    },
    {
        id: '3',
        title: 'E-Banking',
        description: 'BRI ePay, CIMB Clicks'
    },
    {
        id: '4',
        title: 'E-Wallet',
        description: 'GoPay, ShopeePay QRIS, OVO'
    },
];

const ItemWrapper = styled('div', {
    cursor: 'pointer',
    variants: {
        selected: {
            true: {
                background: '#ebffef',
                borderColor: '$backgroundPrimary',
            }
        }
    },
});

export default () => {
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState('1');

    return (
        <div>
            <div className="py-4 font-semibold text-sm border-t-4">Pilih Metode Pembayaran</div>
            <div className="flex flex-wrap gap-3">
                {paymentData.map(x => (<ItemWrapper onClick={() => { setCurrentPaymentMethod(x.id) }} key={x.id} selected={String(x.id) === String(currentPaymentMethod)} className="border text-base p-4 rounded-md" style={{ flex: '1 1 40%' }}>
                    <div className="flex items-center">
                        <div className="flex flex-1 flex-col">
                            <div className="font-semibold">{x.title}</div>
                            <div className="text-sm">{x.description}</div>
                        </div>
                        <div>
                            {String(x.id) === String(currentPaymentMethod) && (
                                <div className="text-lime-500">
                                    <CheckIcon
                                        {...{
                                            height: 36,
                                            width: 36,
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </ItemWrapper>))}
            </div>
        </div>
    )
}