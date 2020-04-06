import React from "react";
import { OnUpdateMeal } from "../utils/types";

interface Props {
  meal: string;
  day: string;
  isMidday: boolean;
  onChange: OnUpdateMeal;
}
const Meal: React.FC<Props> = ({ meal, day, isMidday, onChange }) => {
  return (
    <select
      value={meal}
      onChange={e => {
        onChange(day, isMidday, e.target.value);
      }}
    >
      <option value="Pâtes">Pâtes</option>
      <option value="Riz">Riz</option>
      <option value="Semoule">Semoule</option>
    </select>
  );
};

export default Meal;
