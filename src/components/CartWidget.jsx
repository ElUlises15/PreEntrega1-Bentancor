import React from "react";
import { IconButton } from "@chakra-ui/react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartWidget = () => {
  return (
    <div>
      <IconButton
        aria-label="CartWidget"
        icon={<HiOutlineShoppingCart />}
        size="md"
        fontSize="20px"
        color="#000"
      />
    </div>
  );
};

export default CartWidget;
