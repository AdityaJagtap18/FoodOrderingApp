import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import MealsAvalible from './MealsAvalible';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <MealsAvalible />
    </Fragment>
  );
};

export default Meals;