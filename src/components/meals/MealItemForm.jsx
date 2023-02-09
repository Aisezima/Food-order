import classes from  './MealItemForm.module.css'
import Input from '../UI/Input'
import { useContext } from 'react'
import { CartContext } from '../../store/CartContext'

const MealItemForm = (props) => {

    const {onAdd} = useContext(CartContext)
    return (
        <form className={classes.form}>
            <Input  label='Amount'
            input={{
                id: props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue:  '1'
            }}
            />
            <button type='button' onClick={onAdd.bind(null, props)}>+ Add</button>
        </form>
    )
}

export default MealItemForm