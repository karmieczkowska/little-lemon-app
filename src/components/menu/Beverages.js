import React from 'react';
import "../../styles/Beverages.css";

import ListItem from '../ListItem';
import { BeveragesDataLeft, BeveragesDataMiddle, BeveragesDataRight } from './Data';


function Beverages() {
  return (
    <div className="section">
        <div className="container beverages">
            <h1 className="heading-secondary">
                Non Alcoholic <span>Beverages</span>
            </h1>
            <div className="grid-container">
                <div>
                {BeveragesDataLeft.map((data, i) => {
                    return (
                        <ListItem
                        key={i}
                        title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    );
                })}
                </div>
                <div>
                {BeveragesDataMiddle.map((data, i) => {
                    return (
                        <ListItem
                        key={i}
                        title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                        />
                    );
                })}
                </div>
                <div>
                {BeveragesDataRight.map((data, i) => {
                    return (
                        <ListItem
                        key={i}
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
    </div>
  )
}

export default Beverages