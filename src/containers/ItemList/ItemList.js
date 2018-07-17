import React, {Component} from 'react';
import axios from '../../axios-lists';
import { Link } from 'react-router-dom';

import classes from './ItemList.css';
import Modal from '../../components/UI/Modal/Modal';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../Aux';

class ItemList extends Component{
    constructor(){
        super();
        this.state = {
            lists: [],
            name: '',
            price: '',
            quantity: '',
            date:'',
            addModal: false,
            clearAllModal: false,
            loading: true
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
        this.setState({loading: false});
    }
    
    addItemHandler = (event) => {
        event.preventDefault();
        const list = {
            purchaseName: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            date: this.state.date
        };
        
        axios.post('/lists.json', list)
            .then(response => console.log(response))
            .catch(error => console.log(error));
            
        this.setState({name: ''});
        this.setState({price: ''});
        this.setState({quantity: ''});
        this.setState({date: ''});
        this.setState({addModal: false});
        this.props.history.push('/success');
    }
    clearItem = () => {
        axios.delete('/lists.json');
        this.props.history.push('/success');
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    openAddModalHandler = () => {
        this.setState({addModal: true});
    }
    
    closeAddModalHandler = () => {
        this.setState({addModal: false});
    }
    
    openClearAllModalHandler = () => {
        this.setState({clearAllModal: true});
    }
    
    closeClearAllModalHandler = () => {
        this.setState({clearAllModal: false});
    }
    
    render () {
        let list = <Spinner />;
        
        if(this.state.lists){
            list = (
                <Aux>
                    <div className={classes.row}>
                        <table className={classes.table}>
                            <thead>
                                <tr> 
                                    <th>Purchase Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                             <tbody>
                                {
                                    this.state.lists.map((list, index) => {
                                        return (
                                            <tr
                                                key={index}>
                                                <td>{list.purchaseName}</td>
                                                <td>{list.price}</td>
                                                <td>{list.quantity}</td>
                                                <td>{list.date}</td>
                                            </tr>
                                        );
                                    })
                                    
                                }
                            </tbody>
                        </table>
                    </div>
                </Aux>
                );
        }
        
        if(this.state.loading){
            list = <Spinner />;
        }
        
        return (
            <div>
                <h1>Your List</h1>
                {list}
                <Button clicked={this.openAddModalHandler}>Add</Button>
                <Modal show={this.state.addModal} modalClosed={this.closeAddModalHandler}>
                    <h1>Add Item</h1>
                    <form>
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
                        <input type="number"
                            placeholder="Quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.onChange} />
                        <input type="date"
                            placeholder="date"
                            name="date"
                            value={this.state.date}
                            onChange={this.onChange} />
                        <Button clicked={this.addItemHandler}>Add Item</Button>
                    </form>
                    <Button clicked={this.closeAddModalHandler}>Cancel</Button>
                </Modal>
                <Button clicked={this.openClearAllModalHandler}>Clear All Item</Button>
                <Modal show={this.state.clearAllModal} modalClosed={this.closeClearAllModalHandler}>
                    <h1>Clear All</h1>
                    <Button clicked={this.clearItem}>Yes</Button>
                    <Button clicked={this.closeClearAllModalHandler}>No</Button>
                </Modal>
                <Link style={{display: 'block', textAlign: 'center'}} to="/">
                    Back
                </Link>
            </div>
        );
    }
}

export default ItemList;