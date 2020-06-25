import React from 'react';

export const MenuItemsComponent = props => (
    <div className="menu-item" style={{
        backgroundImage: `url(${props.item.imageUrl})`
    }}>
        <div className="content">            
            <h1 className="title">{props.item.title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)