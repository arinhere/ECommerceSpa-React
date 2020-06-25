import React from 'react';
import { Component } from 'react';
import {ShopItemComponent} from '../../components/shop-items/shop-items.component';
import '../../pages/styles/pages.style.scss';
import shop_data from '../../assets/collections/shop_data';
import history from '../../history';

class ShopDirectoryComponent extends Component {
    constructor() {
        super();

        this.state = {
            collections: shop_data 
        }
    }

    render() {
        return (
            this.state.collections.map(categoryItem => ( 
                <div key={categoryItem.id} className="shop_container">
                    <div className="title_style" onClick={()=> history.push('/')}>
                        {categoryItem.title}
                    </div>                       
                    <div className="card-list">
                        {
                            categoryItem.items.map(item =>(
                                <ShopItemComponent item={item} key={item.id}></ShopItemComponent>
                            ))
                        }
                    </div>
                </div>
            ))
        );
    }
}

export default ShopDirectoryComponent;