import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './Home.css';
import * as actionCreators from '../../store/actions/index';
import shoppingImage from '../../assets/Images/shopping.png';

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
                <img src={shoppingImage} alt="Shopping Cart" />
                <br />
                <Link className={classes.center} to="/itemList">
                    Go to Your Item List
                </Link>
                <Link className={classes.center} to="/logIn">
                    Log In
                </Link>
                <Link className={classes.center} to="/signUp">
                    Sign Up
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