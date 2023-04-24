import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature


  const appClass = false ? "App dark" : "App light"

  const [dark,setDark]=useState(true)

  function handleToggleButton(){
    setDark(dark=> !dark)
    }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleButton}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
  
}

export default App;
