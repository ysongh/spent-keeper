import React, {Component} from 'react';

import './ItemList.css';

class ItemList extends Component{
    state = {
        lists: [
            { purchaseId: 'rrwe543g', purchaseName: 'Book', price: 7.99, date:'01-20-2018'},
            { purchaseId: '34g4gf43', purchaseName: 'Pen', price: 1.99, date:'01-22-2018'},
            { purchaseId: '3g7ikfs4', purchaseName: 'Water', price: 0.99, date:'01-26-2018'}
        ]
    }
    
    render () {
        return (
            <div>
                <h1>Your List</h1>
                {
                    this.state.lists.map( list => {
                        return (
                            <p
                                key={list.purchaseId}>
                                <article>{list.purchaseName}</article>
                                <article>{list.price}</article>
                                <article>{list.date}</article>
                            </p>
                        );
                    })
                }
            </div>
        );
    }
}

export default ItemList;