import React from "react";
import Counter from "./components/Counter";
import MenuLine from "./components/MenuLine";
import Need from "./components/Need";
import { Meal, CounterList, Food } from "./utils/types";
import {
  defaultCounters,
  defaultValues,
  countersDef,
  needDef
} from "./utils/Global";

const App: React.FC = () => {
  const [counter, setCounter] = React.useState(defaultCounters);
  const [meals, setMeals] = React.useState<Array<Meal>>(defaultValues);

  const updateCounter = (name: keyof CounterList, step: number): void => {
    const copyCounter = { ...counter };
    if (copyCounter[name] + step >= 0) {
      copyCounter[name] = copyCounter[name] + step;
      setCounter(copyCounter);
    }
  };

  const updateMeal = (day: string, isMidday: boolean, food: string): void => {
    const copyMeals = [...meals];
    copyMeals.map(item => {
      if (item.day === day) {
        if (isMidday) {
          item.midday = food;
        } else {
          item.evening = food;
        }
      }
      return item;
    });
    setMeals(copyMeals);
  };

  const counterList = countersDef.map((item, index) => (
    <Counter
      key={index}
      backgroundImage={item.backgroundImage}
      title={item.title}
      label={item.label}
      count={counter[item.counter]}
      onIncrease={() => updateCounter(item.counter, item.step)}
      onDecrease={() => updateCounter(item.counter, item.step * -1)}
    />
  ));

  const mealsList = meals.map(item => (
    <MenuLine
      key={item.day}
      day={item.day}
      middayMeal={item.midday}
      eveningMeal={item.evening}
      onChangeMiddayMeal={updateMeal}
      onChangeEveningMeal={updateMeal}
    />
  ));

  const getNbMeal = (food: Food): number => {
    return (
      meals.filter((item: Meal) => item.midday === food).length +
      meals.filter((item: Meal) => item.evening === food).length
    );
  };

  const getKg = (
    name: keyof CounterList,
    label: string,
    food: Food
  ): string => {
    const result =
      (counter[name] * counter.person * counter.week * getNbMeal(food)) / 1000;
    return ` ${result.toFixed(2)}${label}`;
  };

  const getNb = (name: keyof CounterList, food: Food): string => {
    const nb =
      (counter[name] * counter.person * counter.week * getNbMeal(food)) / 500;
    const result = Math.ceil(nb);

    return `Soit ${result.toFixed()} ${
      result > 1 ? "paquets" : "paquet"
    } de 500g`;
  };

  const needsList = needDef.map((item, index) => (
    <Need
      key={index}
      backgroundImage={item.bgImage}
      title={getKg(item.counter, item.category, item.food)}
      quantity={getNb(item.counter, item.food)}
    />
  ));

  return (
    <div className="box app">
      <h1 className="box title">Semoule - Pâtes - Riz</h1>
      {counterList}

      <div className="menu">
        <p className="menu--label">Menu de la semaine</p>
        <div className="menu--block">{mealsList}</div>
      </div>

      <div className="needs">
        <p className="needs--label">Il vous faut</p>
        {needsList}
      </div>
    </div>
  );
};

export default App;
