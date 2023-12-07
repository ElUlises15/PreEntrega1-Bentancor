import React from "react";
import {
  Flex,
  Spacer,
  Box,
  Center,
  Circle,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div style={{ backgroundColor: "#000", color: "white" }}>
      <Center fontSize="5xl" p="4" as="i">
        Tienda de componentes Aylen
      </Center>

      <Divider orientation="horizontal" />

      <Flex alignItems="center">
        <Box p="6">Inicio</Box>
        <Box p="4">
          <Menu p="6">
            <MenuButton>Categorias</MenuButton>
            <MenuList backgroundColor="#000">
              <MenuItem backgroundColor="#000">Computadoras</MenuItem>
              <MenuItem backgroundColor="#000">Componentes</MenuItem>
              <MenuItem backgroundColor="#000">Arma tu pc</MenuItem>
              <MenuItem backgroundColor="#000">Ayuda</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Spacer />

        <Flex p="2">
          <Center p="2" fontWeight="bold" fontSize="xs">
            <Circle as="span" color="black" bg="blueviolet" w="18px" h="18px">
              15
            </Circle>
          </Center>
          <Box>
            <CartWidget />
          </Box>
        </Flex>
      </Flex>

      <Divider orientation="horizontal" />
    </div>
  );
};

export default NavBar;
