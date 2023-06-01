import React from 'react'
import "../../styles/Pizza.css"

import ListItem from '../ListItem';
import pizzaImage from "../../assets/pizza.jpg";

import { PizzaData } from './Data';

function Pizza() {
  return (
    <div className="container pizza">
        <h1 className="heading-secondary">
            <span>PI</span>zza
        </h1>
        <div className="grid-container">
            <div>
                <img src={pizzaImage} alt="pizza items"/>
            </div>
            <div>
            {PizzaData.map((data, i) => {
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

export default Pizza