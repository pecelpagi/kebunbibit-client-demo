import { Wrapper, InnerWrapper, LogoWrapper } from './index.styled-components';
import CategoryList from './CategoryList';
import SearchBox from './SearchBox';
import UserMenu from './UserMenu';

const Header = () => {
    return (
        <Wrapper className="shadow-lg fixed top-0 right-0 bg-white py-2 px-4 md:px-5 flex flex-col items-center" >
            <InnerWrapper>
                <LogoWrapper><a href="/"><img alt="logo" style={{ height: '50px' }} src="/images/logo.jpg" /></a></LogoWrapper>
                <CategoryList />
                <SearchBox />
                <UserMenu />
            </InnerWrapper>
        </Wrapper>
    )
}

export default Header;
