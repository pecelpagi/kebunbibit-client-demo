import { Wrapper, InnerWrapper, LogoWrapper } from './styles';
import Logo from "./logo.jpg";
import CategoryList from './CategoryList';
import SearchBox from './SearchBox';
import UserMenu from './UserMenu';

export default () => {
    return (
        <Wrapper className="shadow-lg fixed top-0 right-0 bg-white py-2 px-4 md:px-5 flex flex-col items-center" >
            <InnerWrapper>
                <LogoWrapper><a href="/"><img style={{ height: '50px' }} src={Logo} /></a></LogoWrapper>
                <CategoryList />
                <SearchBox />
                <UserMenu />
            </InnerWrapper>
        </Wrapper>
    )
}