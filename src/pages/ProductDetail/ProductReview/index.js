import React from 'react';
import Filter from './Filter';
import { getMockReviewData } from './mockReviewData';
import RowData from './RowData';
import Summary from './Summary';

const ProductReview = ({ productName }) => {
    return (
        <div className="text-sm mt-12">
            <h5 className="font-semibold mb-2">ULASAN (180)</h5>
            <h5>{productName}</h5>
            <Summary />
            <Filter />
            <h5 className="mt-6 font-semibold text-gray-500">SEMUA ULASAN (180)</h5>
            {getMockReviewData.length > 0 && (
                <div>
                    {getMockReviewData.map(x => (
                        <RowData data={x} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductReview;