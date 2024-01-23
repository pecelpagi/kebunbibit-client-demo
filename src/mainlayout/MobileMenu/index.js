import { useContext } from "react";
import { CubeIcon, DashboardIcon, HeartIcon, HomeIcon } from "@radix-ui/react-icons"
import MainLayoutContext from '../MainLayoutContext';
import { Wrapper } from "./index.styled-components";

const iconProps = {
    height: 26,
    width: 26,
}

const MobileMenu = () => {
    const { onClickCart } = useContext(MainLayoutContext)

    return (
        <Wrapper className="shadow-lg fixed bottom-0 right-0 bg-white" >
            <button type="button" className="text-center">
                <div className="flex justify-center">
                    <HomeIcon {...iconProps} />
                </div>
                <span>Home</span>
            </button>
            <button type="button">
                <div className="flex justify-center">
                    <DashboardIcon {...iconProps} />
                </div>
                <span>Kategori</span>
            </button>
            <button type="button">
                <div className="flex justify-center">
                    <HeartIcon {...iconProps} />
                </div>
                <span>Wishlist</span>
            </button>
            <button type="button" className="text-center" onClick={onClickCart}>
                <div className="flex justify-center">
                    <CubeIcon {...iconProps} />
                </div>
                <span>Keranjang</span>
            </button>
        </Wrapper>
    )
}

export default MobileMenu;