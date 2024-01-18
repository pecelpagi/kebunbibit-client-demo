import LazyImage from "../../components/LazyImage";
import { styled } from "../../stitches.config";
import { createFileUrlPreview, currency } from "../../utils";

const Wrapper = styled('div', {
    display: 'flex',
    padding: 12,
    alignItems: 'center',
    '& .kebunbibit-product-img-wrapper': {
        border: '1px solid #d8d8d8',
    }
});

export default ({ data }) => {
    return (
        <Wrapper className="text-sm">
            <div style={{ flex: '2 1 0%', alignItems: 'center', gap: 12 }} className="flex flex-row">
                <div className="flex-1">
                    <LazyImage
                        wrapperClassName="kebunbibit-product-img-wrapper"
                        className="kebunbibit-product-img"
                        alt="product image"
                        src={createFileUrlPreview(data.thumbnail_image)}
                    />
                </div>
                <div style={{ flex: '2 1 0%' }}>
                    <div>{data.name}</div>
                    <div className="text-xs">{`${data.qty} barang (200 gr)`}</div>
                </div>
            </div>
            <div style={{ flex: '1 1 0%', textAlign: 'right' }} >
                <div>{currency(data.price * data.qty)}</div>
            </div>
        </Wrapper>
    );
}