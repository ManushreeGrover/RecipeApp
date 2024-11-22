// import React from "react";
import Styles from "./Card.module.css";

// Card.js
import React from "react";
// import Styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={Styles.cardBackdrop}>
      <div className={Styles.card}>
        <button className={Styles.closeBtn} onClick={props.onClose}>
          &times;
        </button>
        <h2 className={Styles.label}>{props.recipe.label}</h2>
        <img src={props.recipe.image} alt={props.recipe.label} className={Styles.image} />
        <p className={Styles.ingred}>{props.recipe.ingredientLines}</p>
      </div>
    </div>
  );
};

export default Card;
