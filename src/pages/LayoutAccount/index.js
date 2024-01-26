import MiddleWrapper from "../../components/MiddleWrapper";
import PageContent from "./PageContent";
import SideMenu from "./SideMenu";
import { SideMenuWrapper } from "./index.styled-components";

const LayoutAccount = (props) => {
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

export default LayoutAccount;