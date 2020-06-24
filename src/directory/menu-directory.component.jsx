import React, { Component } from 'react';
import { MenuItemsComponent } from '../components/menu-items/menu-items.component';

class MenuDirectory extends Component {
    constructor() {
        super();

        this.state = {
            menuItems: [
                {
                    title: 'Hats',
                    imageUrl: 'https://source.unsplash.com/500x240/?Hats',
                    id: 1
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://source.unsplash.com/500x240/?Sneakers',
                    id: 2
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://source.unsplash.com/500x240/?Jackets',
                    id: 3
                },
                {
                    title: 'Women',
                    imageUrl: 'https://source.unsplash.com/500x240/?Women',
                    id: 4
                },
                {
                    title: 'Men',
                    imageUrl: 'https://source.unsplash.com/500x240/?Men',
                    id: 5
                }
            ]
        };
    }

    render() {
        return (
            <div className="directory-menu"> 
            {
                this.state.menuItems.map((menu) => (
                    <MenuItemsComponent key={menu.id} item={menu}></MenuItemsComponent>
                    ))
            }
            </div>
        );
    }
}

export default MenuDirectory;