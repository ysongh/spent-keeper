import React, {Component} from 'react';
import { connect } from 'react-redux';

import Records from '../../components/Records/Records';
import classes from './Home.css';
import * as actionCreators from '../../store/actions/index';

class Home extends Component{

    render() {
        return (
            <div>
                <h1 className={classes.h1}>Welcome to Spent Keeper</h1>
                <Records />
                <button className={classes.button} onClick={() => this.props.onStoreItem("hi")}>Store Result</button>
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