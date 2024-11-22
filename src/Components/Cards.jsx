// import Styles from "./Cards.module.css"
// const Cards=(props)=>{
//     return (
//         <div >
//           <h2>{props.recipe.label}</h2>
//           <img src={props.recipe.image}  />
//         </div>
//       );
// };


// export default Cards;

import Styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <div className={Styles.card}>
      <img src={props.recipe.image} alt={props.recipe.label} className={Styles.cardImage} />
      <div className={Styles.cardContent}>
        <h2 className={Styles.cardTitle}>{props.recipe.label}</h2>
        <p><strong>Cuisine Type:</strong> {props.recipe.cuisineType?.join(", ")}</p>
        <p><strong>Meal Type:</strong> {props.recipe.mealType?.join(", ")}</p>
        <p><strong>Calories:</strong> {Math.round(props.recipe.calories)}</p>
        <p><strong>Ingredients:</strong> {props.recipe.ingredientLines}</p>
      </div>
    </div>
  );
};

export default Cards;
