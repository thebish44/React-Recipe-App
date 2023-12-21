import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  const handleNameChange = ({target}) => setName(target.value);
  const handleCuisineChange = ({target}) => setCuisine(target.value);
  const handlePhotoChange = ({target}) => setPhoto(target.value);
  const handleIngredientsChange = ({target}) => setIngredients(target.value);
  const handlePreperationChange = ({target}) => setPreparation(target.value);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted: ", name, cuisine, photo, ingredients, preparation)
    addRecipe({name, cuisine, photo, ingredients, preparation})
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" placeholder="Name" onChange={handleNameChange} value={name}/>
            </td>
            <td>
              <input name="cuisine" type="text" placeholder="Cuisine" onChange={handleCuisineChange} value={cuisine}/>
            </td>
            <td>
              <input name="photo" type="text" placeholder="URL" onChange={handlePhotoChange} value={photo}/>
            </td>
            <td>
              <textarea name="ingredients" type="text" placeholder="Ingredients" onChange={handleIngredientsChange} value={ingredients}/>
            </td>
            <td>
              <textarea name="preparation" type="text" placeholder="Preperation" onChange={handlePreperationChange} value={preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
