import classes from './HeaderCardButton.module.css'

import {ReactComponent as CartIcon} from '../../assets/CartIcon.svg'  
import { useContext } from 'react'
import { ModalContext } from '../../store/ModalContext'
const HeaderCardButton = (props) => {

    const {onShow} = useContext(ModalContext)

        return(
        <button className={classes.button} onClick={onShow}>
            <span className={classes.icon}>
                  
            {/* 2 var */}
                <CartIcon/>
            </span>
            <span  className={classes.bump}>Your card</span>
            <span className={classes.badge}>3</span>
        </button>
        )
}

export default HeaderCardButton
