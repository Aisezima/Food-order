import { Fragment } from "react/cjs/react.production.min"
import AvaiableMeals from "./AvaiableMeals"
import MealsSummery from "./MealsSummery"

const Meals = () => {
    return(
        <Fragment>
            <MealsSummery/>
             <AvaiableMeals/>
        </Fragment>

    )
}
export default Meals