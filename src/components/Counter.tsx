import React from "react";
import { ReactComponent as PlusSquare } from "../icons/plus-square.svg";
import { ReactComponent as MinusSquare } from "../icons/minus-square.svg";

interface Props {
  backgroundImage: string;
  title: string;
  label: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: React.FC<Props> = ({
  backgroundImage,
  title,
  label,
  count,
  onIncrease,
  onDecrease
}) => {
  return (
    <div className="counter">
      <p className="counter--label">{title}</p>
      <div
        className="counter--buttons"
        style={{
          backgroundImage: backgroundImage
        }}
      >
        <button onClick={onDecrease}>
          <MinusSquare />
        </button>
        <span>
          {count} {label}
        </span>
        <button onClick={onIncrease}>
          <PlusSquare />
        </button>
      </div>
    </div>
  );
};

export default Counter;
