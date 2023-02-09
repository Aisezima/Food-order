import classes from './Modal.module.css'
import {Fragment, useContext} from 'react'
import ReactDOM from 'react-dom';
import { ModalContext } from '../../store/ModalContext'


const Modal = (props) => {
    
    const{onClose} = useContext(ModalContext)

    const BackDrop = () => {
        return(
            <div className={classes.backdrop} onClick={onClose}/>

        )
    }

    const ModalOverLay = () => {
        return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
            
        )
    }
    const elem = document.getElementById('modal')
    return (
     
     <Fragment>
           {ReactDOM.createPortal(<BackDrop/>,elem)}
           {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,elem)}
        </Fragment>
    )
}
export default Modal
