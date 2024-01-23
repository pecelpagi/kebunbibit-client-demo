import { useContext } from 'react';
import GlobalContext from '../../../provider/GlobalContext';
import { RowList } from './list.styled-components';

const List = ({ onClick }) => {
    const { categoriesData } = useContext(GlobalContext);

    return (
        <div className="rounded shadow-xl bg-white py-1">
            <ul className="list-none">
                {categoriesData.map(x => (<RowList key={x.slug}><a href={`/g/${x.slug}`} className="text-sm" onClick={onClick}>{x.name}</a></RowList>))}
            </ul>
        </div>
    );
}

export default List;