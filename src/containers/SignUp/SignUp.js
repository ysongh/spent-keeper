import React, {Component} from 'react';
import axios from '../../axios-lists';

import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button/Button';

class SignUp extends Component{
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
    
    signUpHandler = (event) => {
        event.preventDefault();
        const authData = {
            email: this.state.email,
            password: this.state.password
        };
        
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCSAapw9FhwobTVoCrIX91W-LvYzIyn4VU' ,authData)
            .then(res => {
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);
                localStorage.setItem('email', res.data.email);
                
                this.props.history.push('/itemList');
            })
            .catch(err => {
                console.log(err.res.data.error);
            });
        
        console.log(authData);
            
        this.setState({username: ''});
        this.setState({password: ''});
    }
    
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
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
                    <Button clicked={this.signUpHandler}>Sign Up</Button>
                </form>
                <Link style={{display: 'block', textAlign: 'center'}} to="/logIn">
                    Log In
                </Link>
                <Link style={{display: 'block', textAlign: 'center'}} to="/">
                    Back
                </Link>
            </div>
        );
    }
}

export default SignUp;