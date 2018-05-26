import React, {Component}from 'react';
import { connect } from 'react-redux';

import classes from './Records.css';
//import Record from './Record/Record';

class record extends Component{
    render(){
        return (
            <div className={classes.row}>
                <table className={classes.table}>
                    <thead>
                        <tr> 
                            <th>Purchase ID</th>
                            <th>Purchase Name</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>{this.props.purchaseId}</td>
                            <td>{this.props.purchaseName}</td>
                            <td>{this.props.price}</td>
                            <td>{this.props.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        purchaseId: state.record.purchaseId,
        purchaseName: state.record.purchaseName,
        price: state.record.price,
        date: state.record.date
    };
};

export default connect(mapStateToProps)(record);