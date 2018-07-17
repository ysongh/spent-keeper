import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

class LogIn extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form>
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange} />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange} />
                    <Button clicked={this.signUpHandler}>Log In</Button>
                </form>
                <Link style={{display: 'block', textAlign: 'center'}} to="/signUp">
                    Sign Up
                </Link>
                <Link style={{display: 'block', textAlign: 'center'}} to="/">
                    Back
                </Link>
            </div>
        );
    }
}

export default LogIn;