import React from 'react'

import data from './food.json'
import './ItemDetails.css'
function ItemDetails(props) {
  const { id } = props.match.params // Location index
  const { images, name, tags,energy,protein,fat,saturatedfat,carbohydrate,sugars,dietaryfiber,sodium,potassium,transfat,polyunsaturatedfat,monounsaturatedfat,vitamine,vitaminb3,magnesium} = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} />
      </div>

      <div>
        <h1>{ name }</h1>
        <p>{ tags }</p>
        <div className="Nutrition">
          <h1>Nutrition Per 100 Grams</h1>
        {(() => {
            if (energy) {
            return (
                <p>Energy: { energy }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (protein) {
            return (
                <p>Protein: { protein }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (fat) {
            return (
                <p>Fat: { fat }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (saturatedfat) {
            return (
                <p>Saturated Fat: { saturatedfat }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (carbohydrate) {
            return (
                <p>Carbohydates: { carbohydrate }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (energy) {
            return (
                <p>Sugars: { sugars }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (dietaryfiber) {
            return (
                <p>Dietary Fiber: { dietaryfiber }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (sodium) {
            return (
                <p>Sodium: { sodium }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (potassium) {
            return (
                <p>Potassium: { potassium }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (transfat) {
            return (
                <p>Trans Fat: { transfat }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (polyunsaturatedfat) {
            return (
                <p>Polyunsaturated Fat: { polyunsaturatedfat }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (monounsaturatedfat) {
            return (
                <p>Energy: { monounsaturatedfat }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (vitamine) {
            return (
                <p>Vitamin E: { vitamine }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (vitaminb3) {
            return (
                <p>Vitamin B3: { vitaminb3 }</p>
            )
        
            } else {
            return;
            }
        })()}
        {(() => {
            if (magnesium) {
            return (
                <p>Magnesium: { magnesium }</p>
            )
        
            } else {
            return;
            }
        })()}
         </div>
      </div>

    </div>
  )
}

export default ItemDetails