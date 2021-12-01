import React from "react";
import "./chip.scss";

let interests = [
  "All",
  "Javascript",
  "Python",
  "Music",
  "Guitar",
  "Flutter",
  "Mixes",
  "Editing",
  "Adobe XD",
  "Atif Aslam",
  "Computer",
  "Sales",
  "Programming",
];

const Chip = () => {
  return (
    <div className="chip-container">
      <div className="wrapper">
        {interests.map((item, index) => {
          return (
            <button key={index} className="chip">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Chip;
