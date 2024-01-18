import { useState } from 'react';
import { styled } from '../../../stitches.config';
import SearchIcon from './search_icon.png';

const Wrapper = styled('div', {
    flex: '1 1 0%',
    '@lg': {
        flex: '1 1 0%',
    },
    '& img': {
        margin: '0 18px',
        height: '18px',
    },
    '& input': {
        flex: '1 1 0%',
        background: 'transparent',
        outline: 'none',
    },
});

const InnerWrapper = styled('div', {
    background: '#eee',
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    alignItems: 'center',
});

export default () => {
    const [filterKeyword, setFilterKeyword] = useState("");

    return (
        <Wrapper>
            <InnerWrapper className="rounded-md">
                <img src={SearchIcon} />
                <input className="text-sm" placeholder="Cari tanaman apa ?" type="text" value={filterKeyword} onChange={(e) => { setFilterKeyword(e.target.value) }} />
            </InnerWrapper>
        </Wrapper>
    );
}