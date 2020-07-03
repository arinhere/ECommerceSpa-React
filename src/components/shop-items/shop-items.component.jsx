import React from 'react';
import '../../pages/styles/pages.style.scss';
import { Redirect } from 'react-router-dom';

export const ShopItemComponent = props => (
    <div>
        <div className="text-style" onClick={() => <Redirect to={'shop/' + props.item.id} />}>        
            <img src={`${props.item.imageUrl}`} alt={props.item.name} 
                style={{width: '200px', height: '180px'}} />
        </div>
        <div className="float-container">
            <div className="item_title">{props.item.name}</div>
            <div className="item_price">${props.item.price}</div>
        </div>
    </div>
);