import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Records from '../../components/Records/Records';
import classes from './Home.css';
import * as actionCreators from '../../store/actions/index';

class Home extends Component{
    state = {
        pName: ''
    }
    
    newPNameChangedHandler = (newPName) => {
        this.setState({ pName: newPName.target.value});
    }
    
    render() {
        return (
            <div>
                <h1 className={classes.h1}>Welcome to Spent Keeper</h1>
                <Records />
                <div className={classes.form}>
                    <p>Item Name</p>
                    <input
                        type="text"
                        onChange={this.newPNameChangedHandler} />
                    <button onClick={() => this.props.onStoreItem(this.state.pName)}>Add Item Name</button>
                </div>
                <br />
                <Link className={classes.center} to="/itemList">
                    Go to Your Item List
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        items: state.record.items
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onStoreItem: (item) => dispatch(actionCreators.storeItem(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);