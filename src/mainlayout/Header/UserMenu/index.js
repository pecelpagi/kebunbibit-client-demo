import React, { useContext, useMemo } from 'react';
import { styled } from '../../../stitches.config';
import { MainLayoutContext } from '../../MainLayoutContext';
import { ReactComponent as ShoppingBagIcon } from './shopping_bag.svg';
import { ReactComponent as FavoriteIcon } from './favorite.svg';
import { ReactComponent as AccountIcon } from './account.svg';
import GlobalContext from '../../../provider/GlobalContext';

const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 0%',
    justifyContent: 'end',
    gap: '10px',
    maxWidth: 'max-content',
    '@md': {
        maxWidth: '230px',
        gap: 'unset',
        justifyContent: 'space-evenly',
    },
    '& button': {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        fontSize: '0.75rem',
        lineHeight: '1rem',
        color: '$colorSecondary',
        'span': {
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
        },
        'svg g': {
            fill: '$colorSecondary'
        },
        '.cart-total-qty': {
            position: 'absolute',
            background: '#F04630',
            color: '#FFF',
            width: '20px',
            height: '20px',
            display: 'flex',
            right: 6,
            bottom: 30,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
});

const iconProps = {
    height: 26,
    width: 26,
}

const calculateTotalCartQty = (cartData) => cartData.reduce((total, current) => (total + current.qty), 0);

const UserMenu = () => {
    const { cartData } = useContext(GlobalContext);
    const { onClickCart, onClickAccount } = useContext(MainLayoutContext)

    const totalCartQty = useMemo(() => calculateTotalCartQty(cartData), [JSON.stringify(cartData)]);

    return (
        <Wrapper>
            <button className="hidden md:flex" type="button">
                <FavoriteIcon {...iconProps} />
                <span>Wishlist</span>
            </button>
            <button className="hidden md:flex relative" type="button" onClick={onClickCart}>
                <ShoppingBagIcon {...iconProps} />
                <span>Keranjang</span>
                <div className="cart-total-qty text-xs font-semibold">{totalCartQty}</div>
            </button>
            <button className="flex" type="button" onClick={onClickAccount}>
                <AccountIcon {...iconProps} />
                <span className="hidden md:block">Akun Saya</span>
            </button>
        </Wrapper>
    )
};

export default UserMenu;