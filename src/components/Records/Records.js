import React, {Component}from 'react';
//import classes from './Records.css';

import Record from './Record/Record';

class record extends Component{
    render(){
        return this.props.items.map((item, index) => {
            return <Record
                purchaseId={item.purchaseId}
                purchaseName={item.purchaseName}
                price={item.price}
                date={item.date}
                />;
            });
        }
}

export default record;