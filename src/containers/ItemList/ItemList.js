import React, {Component} from 'react';
import axios from '../../axios-lists';

import classes from './ItemList.css';

class ItemList extends Component{
    state = {
        lists: [
            { purchaseId: 'rrwe543g', purchaseName: 'Book', price: 7.99, date:'01-20-2018'},
            { purchaseId: '34g4gf43', purchaseName: 'Pen', price: 1.99, date:'01-22-2018'},
            { purchaseId: '3g7ikfs4', purchaseName: 'Water', price: 0.99, date:'01-26-2018'}
        ]
    }
    
    addItemHandler = () => {
        const list = {
            lists:{
                purchaseId: '234534',
                purchaseName: 'Paper',
                price: 1.99,
                date:'01-25-2018'
            }
        };
        
        axios.post('/lists.json', list)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    
    render () {
        return (
            <div>
                <h1>Your List</h1>
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
                            {
                                this.state.lists.map( list => {
                                    return (
                                        <tr
                                            key={list.purchaseId}>
                                            <td>{list.purchaseId}</td>
                                            <td>{list.purchaseName}</td>
                                            <td>{list.price}</td>
                                            <td>{list.date}</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ItemList;