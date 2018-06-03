import React, {Component} from 'react';
import axios from '../../axios-lists';

import classes from './ItemList.css';
import Aux from '../../Aux';

class ItemList extends Component{
    state = {
        lists: []
    }
    
    componentDidMount(){
        axios.get('https://spentkeeper.firebaseio.com/lists.json')
            .then(res => {
                const fetchedLists = [];
                for(let key in res.data){
                    fetchedLists.push({
                        ...res.data[key],
                        id: key
                    });
                }
                console.log(res.data);
                this.setState({lists: fetchedLists});
            })
            .catch(error => {});
    }
    
    addItemHandler = () => {
        const list = {
            purchaseId: '234534',
            purchaseName: 'Paper',
            price: 1.99,
            date:'01-25-2018'
        };
        
        axios.post('/lists.json', list)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    
    render () {
        let list = <p>loading...</p>;
        
        if(this.state.lists){
            list = (
                <Aux>
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
                    </Aux>
                );
        }
        
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
                            {list}
                        </tbody>
                    </table>
                </div>
                <button onClick={this.addItemHandler}>Add Item</button>
            </div>
        );
    }
}

export default ItemList;