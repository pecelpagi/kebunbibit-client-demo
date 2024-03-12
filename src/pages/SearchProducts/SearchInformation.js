import { useContext } from "react";
import PageContext from "./PageContext";

const SearchInformation = () => {
    const { searchKeyword } = useContext(PageContext);

    return (
        <div className="flex-1 flex gap-2 flex-col">
            <h5 className="text-2xl font-semibold">10 Produk</h5>
            <span className="text-sm text-gray-400">Hasil pencarian dengan kata kunci "{searchKeyword}"</span>
        </div>
    )
}

export default SearchInformation;