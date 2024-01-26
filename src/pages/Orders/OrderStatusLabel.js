import { styled } from "../../stitches.config"

const Wrapper = styled('div', {
    background: '#ffeb3b',
    color: '#000',
    borderRadius: '0.25em',
    display: 'inline-block',
    padding: '0.2em 0.6em 0.3em',
    width: 'fit-content',
});

const OrderStatusLabel = () => {
    return (
        <Wrapper>
            Menunggu Pembayaran
        </Wrapper>
    );
}

export default OrderStatusLabel;