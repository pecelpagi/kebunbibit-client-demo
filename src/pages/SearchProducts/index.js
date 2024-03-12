import MiddleWrapper from "../../components/MiddleWrapper";
import SortingData from "./SortingData";
import PageContextProvider from "./PageContextProvider";
import ProductList from "./ProductList";
import SearchInformation from "./SearchInformation";

const Products = (props) => {
    return (
        <PageContextProvider {...props}>
            <div>
                <div className="mb-14 px-0 md:px-5">
                    <MiddleWrapper>
                        <div className="flex items-center mb-8">
                            <SearchInformation />
                            <div>
                                <div className="flex flex-row text-sm items-center gap-2">
                                    <div>
                                        Urutkan:
                                    </div>
                                    <div>
                                        <SortingData />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductList />
                    </MiddleWrapper>
                </div>
            </div>
        </PageContextProvider>
    );
}

export default Products;
