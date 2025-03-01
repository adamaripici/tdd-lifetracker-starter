import * as React from "react"
import "./NutritionCard.css"


export default function NutritionCard(props) {
  return (
    <div className="nutrition-card">
      <br></br>
     
        <img className="nutrition-image" src={props.imageUrl} alt="" />

     
        <div className="nutrition-text">
        <p className="nutrition-name">{props.name}</p>
        <p className="nutrition-calories not-name">Calories: {props.calories}</p>
        <p className="nutrition-category not-name">Category: {props.category}</p>
        <p className="nutrition-quantity not-name">Quantity: {props.quantity}</p>
        </div>
    </div>
  )
}