import React, {Component} from 'react';
import axios from '../../axios-lists';

import classes from './ItemList.css';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../../Aux';

class ItemList extends Component{
    constructor(){
        super();
        this.state = {
            lists: [],
            id: '',
            name: '',
            price: '',
            date:'',
            addingModal: false,
        };
        this.onChange = this.onChange.bind(this);
    }
    
    componentWillMount(){
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
    
    addItemHandler = (event) => {
        //event.preventDefault();
        const list = {
            purchaseId: this.state.id,
            purchaseName: this.state.name,
            price: this.state.price,
            date: this.state.date
        };
        
        axios.post('/lists.json', list)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }
    clearItem = () => {
        axios.delete('/lists.json');
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    addModalHandler = () => {
        this.setState({addingModal: true});
    }
    
    closeModalHandler = () => {
        this.setState({addingModal: false});
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
                <button onClick={this.addModalHandler}>Add</button>
                <form>
                    <button onClick={this.clearItem}>Clear All Item</button>
                </form>
                <Modal show={this.state.addingModal} modalClosed={this.closeModalHandler}>
                    <form>
                        <input type="name"
                            placeholder="Item ID"
                            name="id"
                            value={this.state.id}
                            onChange={this.onChange} />
                        <input type="name"
                            placeholder="Item Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange} />
                        <input type="number"
                            placeholder="Price"
                            name="price"
                            value={this.state.price}
                            onChange={this.onChange} />
                        <input type="date"
                            placeholder="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange} />
                        <button onClick={this.addItemHandler}>Add Item</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default ItemList;