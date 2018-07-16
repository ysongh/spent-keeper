import React, {Component} from 'react';

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
                    <Button clicked={this.addItemHandler}>Sign Up</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;