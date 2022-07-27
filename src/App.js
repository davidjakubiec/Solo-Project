import React, { Component } from "react";
import { render } from "react-dom";

import BatchRecord from './BatchRecord'

export function App() {
        return (
            <div>
              <h1>Materials Required</h1>
               <ul id="materialsRequired">
                 <li>PN-00001</li>
                  <li>PN-00001</li>
                  <li>PN-00001</li>
                </ul>  
                <BatchRecord />
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





//let lis = document.getElementById("materialsRequired").getElementsByTagName("li");

















