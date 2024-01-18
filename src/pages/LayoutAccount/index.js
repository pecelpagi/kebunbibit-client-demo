import MiddleWrapper from "../../components/MiddleWrapper";
import { styled } from "../../stitches.config";
import PageContent from "./PageContent";
import SideMenu from "./SideMenu";

const SideMenuWrapper = styled('div', {
    width: 'auto',
    boxShadow: '#31353b1f 0px 1px 6px 0px',
    height: 'fit-content',
    '@lg': {
        width: '250px',
    }
});

export default (props) => {
    const { match: { params } } = props;

    return (
        <div className="px-4 md:px-5">
            <MiddleWrapper>
                <div className="flex gap-8 mb-8">
                    <SideMenuWrapper className="rounded-md hidden md:block">
                        <SideMenu pageType={params.type} />
                    </SideMenuWrapper>
                    <div className="flex-1">
                        <PageContent pageType={params.type} />
                    </div>
                </div>
            </MiddleWrapper>
        </div>
    );
}