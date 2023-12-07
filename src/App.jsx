import { useState } from "react";
import Navbar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos al ecommerce"} />
    </>
  );
}

export default App;
