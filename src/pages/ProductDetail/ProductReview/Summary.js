import React from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';
import Box from '../../../components/Box';
import RatingStar from '../../../components/RatingStar';
import { getMockReviewSummaryData } from "./mockReviewData";
import { StatisticProgressBar } from './summary.styled-components';

const Summary = () => {
    return (
        <Box
            className="grid items-center mt-4"
            css={{
                gridTemplateColumns: '25% 75%'
            }}
        >
            <div className="flex flex-col gap-2 items-center">
                <h5 className="text-7xl">4.0<span className="text-xl ml-1">/5</span></h5>
                <div style={{ maxWidth: '75px' }}><RatingStar value={4} /></div>
                <div className="text-gray-500">(180) Ulasan</div>
            </div>
            <div>
                {getMockReviewSummaryData.map(x => (
                    <Box
                        key={x.rate}
                        className="grid text-sm items-center gap-3 mb-3"
                        css={{
                            gridTemplateColumns: '15% 70% 15%',
                            '.star-icon': {
                                position: 'relative',
                            }
                        }}
                    >
                        <div className="flex items-center gap-1 justify-end"
                            style={{
                                color: '#ffc600'
                            }}>
                            <StarFilledIcon className="star-icon" height={18} width={18} /><span className="font-semibold" style={{ color: "#0000008a" }}>{x.rate}</span>
                        </div>
                        <div>
                            <StatisticProgressBar css={{ width: x.length }} />
                        </div>
                        <div className="text-gray-500">
                            {x.total}
                        </div>
                    </Box>
                ))}
            </div>
        </Box>
    );
}

export default Summary;