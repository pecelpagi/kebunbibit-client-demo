import { useState } from 'react';
import { InnerWrapper, Wrapper } from './index.styled-components';

const SearchBox = () => {
    const [filterKeyword, setFilterKeyword] = useState("");

    return (
        <Wrapper>
            <InnerWrapper className="rounded-md">
                <img alt="search icon" src="/images/search_icon.png" />
                <input
                    className="text-sm" placeholder="Cari tanaman apa ?" type="text"
                    value={filterKeyword} onChange={(e) => { setFilterKeyword(e.target.value) }}
                />
            </InnerWrapper>
        </Wrapper>
    );
}

export default SearchBox;