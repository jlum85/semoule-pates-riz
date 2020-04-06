import { Meal, CounterList, CountersDef, NeedsDef } from "./types";

export const defaultValues: Array<Meal> = [
  { day: "Lundi", midday: "Pâtes", evening: "Riz" },
  { day: "Mardi", midday: "Semoule", evening: "Pâtes" },
  { day: "Mercredi", midday: "Riz", evening: "Semoule" },
  { day: "Jeudi", midday: "Pâtes", evening: "Riz" },
  { day: "Vendredi", midday: "Semoule", evening: "Pâtes" },
  { day: "Samedi", midday: "Riz", evening: "Semoule" },
  { day: "Dimanche", midday: "Pâtes", evening: "Riz" }
];

export const countersDef: Array<CountersDef> = [
  {
    backgroundImage:
      "linear-gradient(326deg, rgb(164, 80, 139) 0%, rgb(95, 10, 135) 74%)",
    title: "Nombre de personnes",
    label: "Personnes",
    counter: "person",
    step: 1
  },
  {
    backgroundImage:
      "linear-gradient(315deg, rgb(231, 144, 135) 0%, rgb(134, 120, 95) 74%)",
    title: "Stock pour",
    label: "Semaines",
    counter: "week",
    step: 1
  },
  {
    backgroundImage:
      "linear-gradient(115deg, rgb(31, 209, 249) 0%, rgb(182, 33, 254) 74%)",
    title: "Portion de pâtes",
    label: "Grammes",
    counter: "pasta",
    step: 5
  },
  {
    backgroundImage:
      "linear-gradient(115deg, rgb(10, 188, 249) 0%, rgb(44, 105, 209) 74%)",
    title: "Portion de riz",
    label: "Grammes",
    counter: "rice",
    step: 5
  },
  {
    backgroundImage:
      "linear-gradient(115deg, rgb(177, 191, 216) 0%, rgb(103, 130, 180) 74%)",
    title: "Portion de semoule",
    label: "Grammes",
    counter: "semolina",
    step: 5
  }
];

export const defaultCounters: CounterList = {
  person: 2,
  week: 2,
  pasta: 70,
  rice: 60,
  semolina: 80
};

export const needDef: Array<NeedsDef> = [
  {
    bgImage:
      "linear-gradient(315deg, rgb(31, 209, 249) 0%, rgb(182, 33, 254) 74%)",
    category: "kg de pâtes",
    counter: "pasta",
    food: "Pâtes"
  },
  {
    bgImage:
      "linear-gradient(315deg, rgb(10, 188, 249) 0%, rgb(44, 105, 209) 74%)",
    category: "kg de riz",
    counter: "rice",
    food: "Riz"
  },
  {
    bgImage:
      "linear-gradient(315deg, rgb(177, 191, 216) 0%, rgb(103, 130, 180) 74%)",
    category: "kg de semoule",
    counter: "semolina",
    food: "Semoule"
  }
];
