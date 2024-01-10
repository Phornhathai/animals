//destructuring in parameter
import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";
import "./AnimalShow.css";

const svgMap = {
  //shorthand for property
  // bird is the same name of property so it can be named only bird
  // bird
  // cat
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgMap[type]} alt="animal" />
      <img
        className="animal"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks }}
      />
    </div>
  );
}

export default AnimalShow;
