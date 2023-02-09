// import React, {Fragment} from 'react'
import { useContext } from 'react'
import { CartContext } from '../../store/CartContext'
import { ModalContext } from '../../store/ModalContext'
import Modal from '../UI/Modal'
import classes  from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {

    const {onClose} = useContext(ModalContext)
    const cartData = useContext(CartContext)

    const cartItems = cartData.items.map(el =>  <CartItem key={el.id} name={el.name} amount={el.amount} price={el.price}         />)
    return(
        <Modal>
            {cartItems}
            <div className={classes.total} >
                <span>Total Amount</span>
                <span>22.99$</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}

export default Cart