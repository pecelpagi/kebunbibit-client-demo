import React from 'react';
import { ReactComponent as ShoppingBagIcon } from './shopping_bag.svg';
import { ReactComponent as FavoriteIcon } from './favorite.svg';
import { ReactComponent as AccountIcon } from './account.svg';
import { Wrapper } from './index.styled-components';
import { useBusinessLogic } from './index.hooks';

const iconProps = {
    height: 26,
    width: 26,
}

const UserMenu = () => {
    const { totalCartQty, onClickCart, onClickAccount } = useBusinessLogic();

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