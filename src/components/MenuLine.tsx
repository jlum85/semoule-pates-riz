import React from "react";
import Meal from "../components/Meal";
import { OnUpdateMeal } from "../utils/types";

interface Props {
  day: string;
  middayMeal: string;
  eveningMeal: string;
  onChangeMiddayMeal: OnUpdateMeal;
  onChangeEveningMeal: OnUpdateMeal;
}

const MenuLine: React.FC<Props> = ({
  day,
  middayMeal,
  eveningMeal,
  onChangeMiddayMeal,
  onChangeEveningMeal
}) => {
  return (
    <div className="menu--line">
      <p className="menu--day">{day}</p>
      <div className="menu--selects">
        <div className="menu--meal">
          <p>Midi</p>
          <Meal
            meal={middayMeal}
            day={day}
            isMidday={true}
            onChange={onChangeMiddayMeal}
          />
        </div>
        <div className="menu--meal">
          <p>Soir</p>
          <Meal
            meal={eveningMeal}
            day={day}
            isMidday={false}
            onChange={onChangeEveningMeal}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuLine;
