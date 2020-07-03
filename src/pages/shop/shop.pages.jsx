import React from 'react';
import { withRouter } from 'react-router-dom';
import ShopDirectoryComponent from '../../directory/shop-directory/shop-directory.component';

const ShopComponent = () => (
    <div className="homepage">
        <ShopDirectoryComponent />
    </div>
)

export default withRouter(ShopComponent);