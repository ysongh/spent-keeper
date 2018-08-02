import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './Home.css';
import * as actionCreators from '../../store/actions/index';
import shoppingImage from '../../assets/Images/shopping.png';
import Button from '../../components/UI/Button/Button';

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
                <h1 className={classes.homeTitle}>Welcome to Spent Keeper</h1>
                <img src={shoppingImage} alt="Shopping Cart" />
                <br />
                <Button>
                    <Link to="/itemList">
                        Go to Your Item List
                    </Link>
                </Button>
                <Button>
                    <Link to="/logIn">
                        Log In
                    </Link>
                </Button>
                <Button>
                    <Link to="/signUp">
                        Sign Up
                    </Link>
                </Button>
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