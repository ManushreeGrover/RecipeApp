import { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import Card from "./Components/Card";
import React from 'react';
import { Link } from 'react-router-dom';

const Home=()=>{
const APP_ID = "dc34792b";
const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";
// const APP_ID="8dca601f";
// const APP_KEY="ec2b76b0e9b84ba371f707f4adc90f04";
const [recipe, setRecipe]=useState(null);
const [isCardVisible, setCardVisible] = useState(false); // State for card visibility

// useEffect(()=>{
//     fetch( `https://api.edamam.com/search?q=random&app_id=${APP_ID}&app_key=${APP_KEY}`)
//     .then((response)=>response.json())
//     .then((data)=>{
//         const randomIndex = Math.floor(Math.random() * data.hits.length); // Get random index
//         const randomRecipe = data.hits[randomIndex].recipe;
//         setRecipe(randomRecipe);
//         console.log(data)
//     })
// },[]);


useEffect(() => {
  const storedRecipe = localStorage.getItem("recipe");
  const storedDate = localStorage.getItem("recipeDate"); 
  const currentDate = new Date().toDateString(); 
  if (storedRecipe && storedDate === currentDate) {
    // Use the stored recipe only if it's from the current date
    setRecipe(JSON.parse(storedRecipe));
  } else {
    // Fetch a new recipe if no recipe exists or the date has changed
    fetch(`https://api.edamam.com/search?q=random&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.hits.length); 
        const randomRecipe = data.hits[randomIndex].recipe;
        setRecipe(randomRecipe);
        localStorage.setItem("recipe", JSON.stringify(randomRecipe)); 
        localStorage.setItem("recipeDate", currentDate); 
      });
  }
}, []);


const handleShowRecipe = () => {
  setCardVisible(true); // Show the Card
};

return (
    <>
    <nav className="navbar">
    <div className="logo">
      <div className="chef">
      Chef's<span className="material-symbols-outlined">local_dining</span>Love<br/><p style={{
      fontSize: '0.4rem',
      fontFamily: "Parkinsans",
      color: 'white',
      margin: '0',
      lineHeight: '1.1'
    }}>Your secret ingredient to perfect meals</p></div> 
      <button className="glist-btn-navbar">GROCERY LIST </button>
      <button className="edit-btn-navbar">EDITORIALS </button>
      <button className="video-btn-navbar">VIDEOS</button>
      <Link to="/search">
    <button className="search-btn-navbar">SEARCH RECIPES <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
</Link>
</div>
  </nav>


<div className="quote-section">
<div className="quote-content">
  <h2>"Where your cooking <br/>journey begins...."</h2>
  <div>
  <img 
    src="food3-removebg-preview.png"
    alt="Plate of food" 
    className="plate-image"
  />
  <img 
    src="food4-removebg-preview.png"
    alt="Plate of sweet" 
    className="sweet-image"
  />
  </div>
</div>
</div>


<div className="recipe-section">
  <div className="recipe-left">
    <img src={recipe?.image} alt="Recipe of the Day" className="recipe-image" /> 
  </div>
  <div className="recipe-right">
  <h2>Recipe of the Day </h2>
  <p className="label">{recipe?.label}</p>
  <p className="ctype"> Cuisine Type: {recipe?.cuisineType}</p>
  <p className="mtype">Meal Type: {recipe?.mealType}</p>
  <p className="calorie">Calories: {Math.round(recipe?.calories)}</p>

    <button className="search-btn" onClick={handleShowRecipe}> GO TO RECIPE </button>
  </div>
</div>

  {isCardVisible && <Card recipe={recipe} onClose={() => setCardVisible(false)} />}
</>

      )

}

export default Home;