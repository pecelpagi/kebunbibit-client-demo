import MiddleWrapper from "../../components/MiddleWrapper"
import Bottom from "./Bottom"
import Middle from "./Middle"
import Top from "./Top"

export default () => {
    return (
        <div style={{ borderTop: '1px solid #ebebeb', paddingTop: '1em' }}>
            <MiddleWrapper>
                <div className="px-4 md:px-5">
                    <Top />
                    <Middle />
                    <Bottom />
                </div>
            </MiddleWrapper>
        </div>
    )
}