import React from 'react';
import "../../styles/Pasta.css";
import ListItem from '../ListItem';

import { PastaDataLeft, PastaDataRight } from './Data';


function Pasta() {
  return (
    <div className="section">
        <div className="container pasta">
        <h1 className="heading-secondary">
            Pas<span>ta</span>
        </h1>
        <div className="grid-container">
            <div>
                {PastaDataLeft.map((data, i) => {
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
                {PastaDataRight.map((data, i) => {
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

    </div>
  )
}

export default Pasta