import LazyImage from "../../../components/LazyImage";
import StyledButton from "../../../components/StyledButton";
import { createFileUrlPreview, currency } from "../../../utils";

const ProductItem = ({ data }) => {
    return (
        <div className="border border-slate-300 border-solid p-3">
            <div className="grid" style={{ gridTemplateColumns: '15% 45% 40%' }}>
                <div>
                    <LazyImage
                        alt="product image"
                        wrapperClassName="kebunbibit-product-img-wrapper"
                        className="kebunbibit-product-img"
                        src={createFileUrlPreview(data.thumbnail_image)}
                        lazyLoadProps={{ overflow: true }}
                    />
                </div>
                <div className="pl-3">
                    <div className="font-semibold">{data.name}</div>
                    <div>{`${data.qty} x ${currency(data.price)}`}</div>
                </div>
                <div className="border-l border-slate-300 border-dashed pl-3 text-right">
                    <div>Total Harga</div>
                    <div className="font-semibold">{currency(data.price * data.qty)}</div>
                    <StyledButton className="font-semibold text-xs mt-2" css={{ height: 'fit-content' }} onClick={() => {}} type="button" variant="primary" outlined>Tambah ke Keranjang</StyledButton>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
