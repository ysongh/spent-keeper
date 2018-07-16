import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    
    signUpHandler = (event) => {
        event.preventDefault();
        const authData = {
            username: this.state.username,
            password: this.state.password
        };
        
        console.log(authData);
            
        this.setState({username: ''});
        this.setState({password: ''});
    }
    
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form>
                    <input type="name"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange} />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange} />
                    <Button clicked={this.signUpHandler}>Sign Up</Button>
                </form>
                <Link style={{display: 'block', textAlign: 'center'}} to="/">
                    Back
                </Link>
            </div>
        );
    }
}

export default SignUp;