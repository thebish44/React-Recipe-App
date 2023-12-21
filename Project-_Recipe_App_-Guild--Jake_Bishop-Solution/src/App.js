import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
    const deleteRecipe = (indexToDelete) => {
      setRecipes((currentRecipes) => currentRecipes.filter((ignored, index) => index !== indexToDelete));
  };
  
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const addRecipe = (recipe) => {
    setRecipes((existingRecipes) => [...existingRecipes, recipe]);
  };
  
  // console.log("App recipe list:", recipes)
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList removeRecipe={deleteRecipe} existingRecipes={recipes}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
