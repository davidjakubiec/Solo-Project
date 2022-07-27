import React, { Component } from "react";
import { render } from "react-dom";

export function App() {
    return (
        <div>
            <input></input>
            <span>mL PN-00001    Lot Number:</span>
            <button value="Complete"></button>
        <div>
            <input></input>
            <span>mL PN-00002    Lot Number:</span>
            <button value="Complete"></button>
        </div>
            <input></input>
            <span>mL PN-00003    Lot Number:</span>
            <button value="Complete"></button>
        </div>
    )
}

// export default App;

//Batch Record Class
//handle click method
//Render the SOP
//

//handleClick function

//MaterialsRequired Component
//ShoppingList Component
//ShoppingListItem Component
//BatchRecord Component
//BatchRecordTask Component























{/* <html>
<head>
  <meta charset="UTF-8">
  <title>fancy colors</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <label for="menu">Change my color: </label>
  <select id="menu">
    <option value="lemon">Lemon</option>
    <option value="tangerine">Tangerine</option>
    <option value="lime">Lime</option>
    <option value="grapefruit">Grapefruit</option>
    <option value="lavender">Lavender</option>
  </select>


  <script>

    window.onload = () => {

      const body = document.querySelector('body');
      const menu = document.querySelector('#menu');
      

      button.onClick = () => {
        const fruit = menu.value;
        fetch('/colors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fruit: fruit }),
        })
        .then(res => res.json())
        .then(data => {
          body.style.background = data.colors;
        })
        .catch(err => console.log(err))
      }
    }

  </script>
</body>
</html>

 */}
