import React from 'react';
import '../../pages/styles/pages.style.scss';


export const ShopItemComponent = props => (
    <div className="text-style">        
        <div>
            <img src={`${props.item.imageUrl}`} alt={props.item.name} 
                style={{width: '200px', height: '180px'}} />
        </div>
        <div>{props.item.name}</div>
    </div>
);