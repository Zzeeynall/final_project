import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../../actions";
import { Caption, Form } from './Style';

class Login extends Component {
    loginUser = (e) => {
        e.preventDefault();
        const user = {
            name: e.target.elements.name.value,
            pass: e.target.elements.password.value
        }
        this.props.login(user);
    }

    render(){
        if(this.props.loginCheck){
            return <Redirect to='/admin'/>
        };
        return(
            <div>
                <Caption>Admin Panel</Caption>
                <Form onSubmit={this.loginUser}>
                    <div>
                        <label htmlFor="name">Login</label>
                    </div>
                    <input id="name" name="name" type="text"/>
                    <div>
                        <label htmlFor="password">Password</label>
                    </div>
                    <input id="password" name="password" type="password"/>
                    <button type="submit">Sign In</button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
          loginCheck: state.login
        };
      };

const mapDispatchToProps = {
    login: login
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login);