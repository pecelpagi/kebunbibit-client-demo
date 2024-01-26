import React from "react";
import { PAGE_TYPE } from "./utils";
import MyProfile from "../MyProfile";
import ShippingAddress from "../ShippingAddress";
import Orders from "../Orders";
import Wishlist from "../Wishlist";
import Box from '../../components/Box';

const PageContent = ({ pageType }) => {
  let content = (<div />);

  switch (pageType) {
    case PAGE_TYPE.PROFILE:
      content = (<MyProfile />);
      break;
    case PAGE_TYPE.SHIPPING_ADDRESS:
      content = (<ShippingAddress />);
      break;
    case PAGE_TYPE.ORDERS:
      content = (<Orders />);
      break;
    case PAGE_TYPE.WISHLIST:
      content = (<Wishlist />);
      break;
    default:
      // do nothing
  }

  return (
    <Box
      css={{
        boxShadow: '#31353b1f 0px 1px 6px 0px'
      }}
      className="rounded-md"
    >
      {content}
    </Box>
  );
};

export default PageContent;
