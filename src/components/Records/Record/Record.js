import React, {Component} from 'react';
//import classes from './Record.css';

class Record extends Component{
    render(){
        return (
            <div>
            <p>{this.props.purchaseId}</p>
            <p>{this.props.purchaseName}</p>
            <p>{this.props.price}</p>
            <p>{this.props.date}</p>
        </div>
        );
    }
}

export default Record;