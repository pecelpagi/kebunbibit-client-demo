import { ExitIcon, FileTextIcon, HeartIcon, IdCardIcon, PersonIcon } from "@radix-ui/react-icons";

export const PAGE_TYPE = {
  PROFILE: "profile",
  SHIPPING_ADDRESS: "address",
  ORDERS: "orders",
  WISHLIST: "wishlist",
};

export const createSizeProps = (size) => ({ width: size, height: size });

export const accountMenuData = [
  {
    link: "/account/profile",
    text: "Akun Saya",
    shortText: "Akun",
    icon: (size) => <PersonIcon {...createSizeProps(size)} />,
  },
  {
    link: "/account/orders",
    text: "Pesanan Saya",
    shortText: "Pesanan",
    icon: (size) => <FileTextIcon {...createSizeProps(size)} />,
  },
  {
    link: "/account/address",
    text: "Alamat Pengiriman",
    shortText: "Pengiriman",
    icon: (size) => <IdCardIcon {...createSizeProps(size)} />,
  },
  {
    link: "/account/wishlist",
    text: "Wishlist",
    icon: (size) => <HeartIcon {...createSizeProps(size)} />,
  },
  {
    link: "/auth/logout",
    text: "Keluar",
    icon: (size) => <ExitIcon {...createSizeProps(size)} />,
  },
];
