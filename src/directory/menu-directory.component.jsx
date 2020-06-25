import React, { Component } from 'react';
import { MenuItemsComponent } from '../components/menu-items/menu-items.component';
import menu from '../assets/collections/menu';

class MenuDirectory extends Component {
    constructor() {
        super();

        this.state = {
            menuItems: menu
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