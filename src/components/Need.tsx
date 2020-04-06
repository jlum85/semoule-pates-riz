import React from "react";

interface Props {
  backgroundImage: string;
  title: string;
  quantity: string;
}
const Need: React.FC<Props> = ({ backgroundImage, title, quantity }) => {
  return (
    <div
      className="need"
      style={{
        backgroundImage: backgroundImage
      }}
    >
      <h2>{title}</h2>
      <p>{quantity}</p>
    </div>
  );
};

export default Need;
