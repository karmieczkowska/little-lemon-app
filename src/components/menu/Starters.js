import React from 'react'
import "../../styles/Starters.css"
import ListItem from '../ListItem'

import { StartersDataLeft, StartersDataRight } from './Data'

// const MenuData = [
//     {
//         title: "Bruchetta",
//         description: "Bla bla bla",
//         price: "12.50",
//     },
//     {
//         title: "Greek Salad",
//         description: "Bla bla bla",
//         price: "15.50",
//     },
//     {
//         title: "Lemon Dessert",
//         description: "Bla bla bla",
//         price: "10.50",
//     }
// ]

function Starters() {
  return (
    <div className="container starters">
        <h1 className="heading-secondary">
            <span>Satrt</span>ers
        </h1>
        <div className="grid-container">
            <div>
                {StartersDataLeft.map((data, i) => {
                    return (
                        <ListItem
                        title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    );
                })}
            </div>
            <div>
                {StartersDataRight.map((data, i) => {
                    return (
                        <ListItem
                        title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default Starters