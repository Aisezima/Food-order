import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import CartContextProvider from "./store/CartContext";
import {ModalContext} from './store/ModalContext'
function App() {

  const [showModal, setShowModal] = useState(false)
  
  const showModalHandler = () => {
    setShowModal(true)
  }
  const hideModalHandler = () => {
      setShowModal(false)
  }
  return (
    <CartContextProvider>

    <ModalContext.Provider value= {{
      onClose: hideModalHandler,
      onShow: showModalHandler
    }}>

    <Fragment>
      { showModal && <Cart/>}
      <Header />
      <main>
      <Meals/>
      </main>
    </Fragment>
    </ModalContext.Provider>
    
    </CartContextProvider>


  );
}

export default App;

