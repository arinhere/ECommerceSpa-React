import React, { Component } from 'react';

class ItemComponent extends Component {
    itemId = 0;

    componentDidMount() {
       // this.itemId=useParams();
        // if(this.props.params.itemId) {
        //     this.itemId = this.props.params.match.itemId;
        // }
        // // const { match: { params } } = this.props;
        // console.log('itemId: ', this.itemId);
    }

    render() {
        return (
            <div>
                {/* Selected Item: {this.itemId} */}
            </div>
        )
    }
}

export default ItemComponent;