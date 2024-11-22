import React from 'react';
import { useState} from 'react';
import { useEffect } from 'react';
import Cards from './Components/Cards';
import "./Search.css";
const Search =()=>{
    // console.log("hello")

    const[search,setSearch]=useState("");
    const[query,setQuery]=useState("sushi");
    const [recipes, setRecipes] = useState([]);
    const APP_ID = "dc34792b";
    const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";
    useEffect(()=>{
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((res)=>res.json())
        .then((data)=>setRecipes(data.hits))

    },[query]);

    const submitHandler=()=>{
        setQuery(search);
        setSearch("");
    }


    return (
        <div className="Outmost">
          <div className="searchbox">
            <input
              type="text"
              className="bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for recipes..."
            />
            <button className="searchbtn" onClick={submitHandler}>
              SEARCH
            </button>
          </div>
    
          <div className="cardsContainer">
            {recipes.map((item, index) => (
              <Cards recipe={item.recipe} key={index} />
            ))}
          </div>
        </div>
      );

}

export default Search;