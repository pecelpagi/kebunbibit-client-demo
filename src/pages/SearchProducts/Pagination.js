import ReactPaginate from 'react-paginate';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Box from '../../components/Box';
import React from 'react';

const Pagination = ({ totalPage, page, onChange }) => {
    if (!(totalPage > 0)) return null;

    return (
        <Box
            className="flex justify-center mt-10 text-base"
            css={{
                '& .products-pagination-container': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8,
                    '& li': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minWidth: '30px',
                        minHeight: '30px',
                        textAlign: '-webkit-center',
                        border: '1px solid #999',
                        borderRadius: 2,
                        'a': {
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 16,
                        },
                        '&.previous, &.next': {
                            border: '1px solid #999',
                        },
                        '&:not(.disabled):hover': {
                            backgroundColor: '$backgroundPrimary',
                            color: '$colorPrimary',
                        },
                        '&.selected': {
                            backgroundColor: '$backgroundPrimary',
                            color: '$colorPrimary',
                        },
                        '&.disabled, &.disabled a': {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                        },
                    }
                }
            }}
        >
            <ReactPaginate
                containerClassName="products-pagination-container"
                breakLabel="..."
                nextLabel={<CaretRightIcon />}
                onPageChange={(val) => {
                    onChange(val.selected);
                }}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel={<CaretLeftIcon />}
                renderOnZeroPageCount={null}
                forcePage={page}
            />
        </Box>
    );
}

export default React.memo(Pagination);