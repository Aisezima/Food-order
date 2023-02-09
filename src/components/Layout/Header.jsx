import { Fragment } from 'react/cjs/react.production.min'
import classes  from  './Header.module.css'
import MealImg from '../../assets/meals.jpg'
import HeaderCardButton from './HeaderCardButton'
const Header = (props) => {
   
    return ( 

    <Fragment>
         <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={MealImg} alt="" />
        </div>
    </Fragment>

       
    )
}

export default Header
