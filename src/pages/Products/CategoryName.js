import { useContext } from "react";
import PageContext from "./PageContext";

const CategoryName = () => {
    const { category } = useContext(PageContext);

    return (
        <div className="flex-1 flex gap-2 flex-col">
            <h5 className="text-2xl font-semibold">{category ? category.name : ''}</h5>
            <span className="text-sm text-gray-400">Menampilkan 38 produk</span>
        </div>
    )
}

export default CategoryName;