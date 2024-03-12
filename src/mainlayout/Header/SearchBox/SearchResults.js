import React, { useContext } from 'react'
import { RowWrapper, Wrapper } from './search-results.styled-components'
import HeaderContext from '../HeaderContext'
import Spinner from '../../../components/Spinner'

const SearchResults = () => {
  const { searchResults, isEnteringSearchInput, searchKeyword, isSearching } = useContext(HeaderContext);

  if (!isEnteringSearchInput) return null;

  if (!(isEnteringSearchInput && searchKeyword.length > 0)) return null

  return (
    <Wrapper className='shadow-md rounded-md text-sm' css={isSearching ? { minHeight: 150 } : {}}>
      {isSearching && <Spinner text="" isAbsolute />}
      {searchResults.map(x => (
        <a key={x.id} href={`/product/${x.id}`}>
          <RowWrapper>
            {x.name}
          </RowWrapper>
        </a>
      ))}
    </Wrapper>
  )
}

export default SearchResults