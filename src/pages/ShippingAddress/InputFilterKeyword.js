import { useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export default () => {
    const [filterKeyword, setFilterKeyword] = useState('');
    
    return (
        <div className="rounded-md flex py-2 px-3 gap-2" style={{ border: '1px solid #e5e7e9' }}>
            <input
                className="flex-1 outline-none text-sm"
                type="text" value={filterKeyword}
                onChange={(e) => { setFilterKeyword(e.target.value) }}
                placeholder="Cari alamat atau nama penerima"
            />
            <button type="button"><MagnifyingGlassIcon height={20} width={20} /></button>
        </div>
    )
}