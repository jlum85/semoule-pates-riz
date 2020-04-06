export type Food = "Pâtes" | "Riz" | "Semoule";

export type OnUpdateMeal = (
  day: string,
  isMidday: boolean,
  food: string
) => void;

export interface Meal {
  day: string;
  midday: string;
  evening: string;
}

export interface CounterList {
  person: number;
  week: number;
  pasta: number;
  rice: number;
  semolina: number;
}

export interface CountersDef {
  backgroundImage: string;
  title: string;
  label: string;
  counter: keyof CounterList;
  step: number;
}

export interface NeedsDef {
  bgImage: string;
  category: string;
  counter: keyof CounterList;
  food: Food;
}
