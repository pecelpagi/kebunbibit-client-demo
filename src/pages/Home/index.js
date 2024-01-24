import Slideshow from "./Slideshow";
import Category from "./Category";
import Products from "./Products";
import MiddleWrapper from "../../components/MiddleWrapper";
import PageContextProvider from "./PageContextProvider";

const Home = () => {
    return (
        <PageContextProvider>
            <div>
                <div className="mb-14 px-0 md:px-5">
                    <MiddleWrapper>
                        <Slideshow />
                    </MiddleWrapper>
                </div>
                <div className="px-4 md:px-5">
                    <MiddleWrapper>
                        <div className="mb-12">
                            <Category />
                        </div>
                        <div className="mb-12">
                            <Products type="popular" />
                        </div>
                        <div className="mb-8">
                            <Products type="newest" />
                        </div>
                    </MiddleWrapper>
                </div>
            </div>
        </PageContextProvider>
    )
}

export default Home;