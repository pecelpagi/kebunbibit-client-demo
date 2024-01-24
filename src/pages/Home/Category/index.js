import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./utils";
import { ContentWrapper } from "./index.styled-components";

const Category = () => (
    <div>
        <h4 className="mb-4 text-base font-semibold">Kategori</h4>
        <ContentWrapper>
            <div className="inner-wrapper">
                {categories.map(x => (
                    <Link
                        key={x.slug}
                        className="category-content"
                        to={`/g/${x.slug}`}><img alt={x.image} src={`/images/category-icon/${x.image}`} /></Link>
                ))}
            </div>
        </ContentWrapper>
    </div>
);

export default Category;
