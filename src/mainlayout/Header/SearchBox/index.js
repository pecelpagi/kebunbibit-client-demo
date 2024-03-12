import { useContext } from 'react';
import { InnerWrapper, Wrapper } from './index.styled-components';
import SearchResults from './SearchResults';
import HeaderContext from '../HeaderContext';

const SearchBox = () => {
    const { searchKeyword, onSearchProducts, onSetIsEnteringSearchInput } = useContext(HeaderContext);

    return (
        <Wrapper>
            <InnerWrapper className="rounded-md">
                <img alt="search icon" src="/images/search_icon.png" />
                <input
                    className="text-sm" placeholder="Cari tanaman apa ?" type="text"
                    value={searchKeyword}
                    onKeyDown={(e) => {
                        if (e.code === 'Enter') {
                            window.location.href = `/search?q=${searchKeyword}&page=1`
                        }
                    }}
                    onFocus={() => { onSetIsEnteringSearchInput(true) }}
                    onBlur={() => {
                        setTimeout(() => {
                            onSetIsEnteringSearchInput(false)
                        }, 100)
                    }}
                    onChange={(e) => { onSearchProducts(e.target.value) }}
                />
            </InnerWrapper>
            <SearchResults />
        </Wrapper>
    );
}

export default SearchBox;