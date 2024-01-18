import React from "react";
import { Link } from "react-router-dom";
import { styled } from "../../../stitches.config";
import { categories } from "./utils";

const ContentWrapper = styled('div', {
    overflowX: 'auto',
    padding: '1px',
    '& .inner-wrapper': {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '15px',
        width: '100%',
        minWidth: '1200px',
        '@md': {
            minWidth: '980px',
        }
    },
    '& .category-content': {
        flex: '1 1 0%',
        padding: '10px',
        border: '1px solid #EBECF2',
        '& img': {
            width: '100%',
        }
    },
});

const Category = () => (
    <div>
        <h4 className="mb-4 text-base font-semibold">Kategori</h4>
        <ContentWrapper>
            <div className="inner-wrapper">
                {categories.map(x => (<Link key={x.slug} className="category-content" to={`/g/${x.slug}`}><img src={x.image} /></Link>))}
            </div>
        </ContentWrapper>
    </div>
);

export default Category;
