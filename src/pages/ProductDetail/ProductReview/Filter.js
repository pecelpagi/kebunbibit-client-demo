import React from 'react';
import Box from '../../../components/Box';
import { Icon } from './filter.components';

const Filter = () => {
    return (
        <Box
            className="grid text-xs items-center mt-5"
            css={{
                gridTemplateColumns: '20% 80%'
            }}
        >
            <div className="tracking-wider">
                Filter
            </div>
            <Box
                css={{
                    'li button': {
                        padding: '0px 12px',
                        display: 'flex',
                        height: '31px',
                        alignItems: 'center',
                        borderRadius: 14,
                    },
                    'li.active button': {
                        color: '#03ac0e',
                        borderColor: '#8bc64e',
                        background: '#ebffef',
                    }
                }}
            >
                <ul className="flex gap-2">
                    <li className="active"><button type="button" className="border border-slate-300">Semua (180)</button></li>
                    <li><button type="button" className="border border-slate-300">Dengan Foto (4)</button></li>
                    <li><button type="button" className="border border-slate-300"><Icon />5</button></li>
                    <li><button type="button" className="border border-slate-300"><Icon />4</button></li>
                    <li><button type="button" className="border border-slate-300"><Icon />3</button></li>
                    <li><button type="button" className="border border-slate-300"><Icon />2</button></li>
                    <li><button type="button" className="border border-slate-300"><Icon />1</button></li>
                </ul>
            </Box>
        </Box>
    )
}

export default Filter;