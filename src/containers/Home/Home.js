import React, {Component} from 'react';
import { connect } from 'react-redux';

import Records from '../../components/Records/Records';
import classes from './Home.css';

class Home extends Component{

    render() {
        return (
            <div>
                <h1>Welcome to Spent Keeper</h1>
                <Records />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        price: state.record.price
    };
};

export default connect(mapStateToProps)(Home);