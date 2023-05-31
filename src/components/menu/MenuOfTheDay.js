import React from 'react';
import "../../styles/MenuOfTheDay.css";
import ListItem from '../ListItem';

import { MenuData } from './Data';

function MenuOfTheDay() {
  return (
    <div className="section">
        <div className="container menu-of-the-day">
            <h1 className="heading-secondary">
                <span>menu </span>of the day
            </h1>
            <div className="grid-container">
              {MenuData.map((data, i) => {
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

export default MenuOfTheDay