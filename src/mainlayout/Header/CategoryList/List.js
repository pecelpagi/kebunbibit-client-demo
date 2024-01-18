import { styled } from '../../../stitches.config';

const RowList = styled('li', {
    '& a': {
        display: 'block',
        padding: '10px 20px',
        color: '#3a3b43',
    },
    '& a:hover': {
        background: '#f1f1f1',
    },
});

export default ({ onClick, categories }) => {
    return (
        <div className="rounded shadow-xl bg-white py-1">
            <ul className="list-none">
                {categories.map(x => (<RowList key={x.slug}><a href={`/g/${x.slug}`} className="text-sm" onClick={onClick}>{x.name}</a></RowList>))}
            </ul>
        </div>
    );
}