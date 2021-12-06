import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Input, Button } from 'antd';
import styled from "styled-components"
import { connect } from "react-redux";
import {CheckLogin , SignUp} from "../actions/asyncActions"
import Password from 'antd/lib/input/Password';

const Wrapper = styled.div``
const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

background:#eee;

height:100vh;
`

const LeftContainer = styled.div``
const RightContainer = styled.div`

`
const LoginContainer = styled.div`
width:30em;
background:#fff;
padding:3em;

`
const Signup = styled.div``

class Login extends Component {

    state= {
        login: true,
        l_email:"",
        l_password:"",
        s_email:"",
        s_name:"",
        s_username:"",
        s_password:""

    }

    toggleHandler = () =>{
        this.setState({login: !this.state.login})
    }

    changeHandler= (e) =>{
        // console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }
    LoginHandler = () =>{
        const data= {
            email:this.state.l_email,
            password: this.state.l_password
        }
        CheckLogin(data).then(res => {
            this.toggleHandler();
        })
    }
 
    signupHandler=() => {
        const data= {
            name:this.state.s_name,
            email: this.state.s_email,
            username:this.state.s_username,
            password:this.state.s_password
        }
        SignUp(data).then(res => {
            this.toggleHandler();
        })
    }
    componentDidMount = () => {

        // console.log("props ", this.props)

        // if (this.props.auth_data !== 'undefined') {
            
        //     this.toggleHandler();
            
        // }
    }
    
    render() {
        // Cookies.set('token', `${this.props.auth_data.token}`, { expires: 1 })
        console.log("props ", this.props)
        return (
            <Wrapper>
                <Container>
                    <LeftContainer>
                        <h1>To do List</h1>
                    </LeftContainer>
                    <RightContainer>
                        {this.state.login? <LoginContainer styles={{display: this.state.login ? 'block' : 'none'}}>
                            <h1>Login</h1>
                            <Input placeholder="Email" name="l_email" onChange={this.changeHandler} value={this.state.l_email}/>
                            <Input placeholder="password" type="password" name="l_password" onChange={this.changeHandler} value={this.state.l_password}/>

                            <Button type="primary" onClick= {this.LoginHandler}>LOG IN</Button>
                            <div>Dont't have account <Button type="link" onClick={this.toggleHandler}>Register</Button></div>
                        </LoginContainer> : 
                        <LoginContainer styles={{display: this.state.login ? 'none' : 'block'}}>
                        <h1>Sign Up</h1>
                            <Input placeholder="Name" name="s_name" onChange={this.changeHandler} value={this.state.s_name}/>
                            <Input placeholder="Email" name="s_email" onChange={this.changeHandler} value={this.state.s_email}/>
                            <Input placeholder="User name" name="s_username" onChange={this.changeHandler} value={this.state.s_username}/>
                            <Input placeholder="Password" type="password" name="s_password" onChange={this.changeHandler} value={this.state.s_password}/>

                            <Button type="primary" onClick = {this.signupHandler}>REGISTER</Button>
                            <div>Have account <Button type="link" onClick={this.toggleHandler}>Sign In</Button></div>
                        </LoginContainer>
                        }
                    </RightContainer>
                
                </Container>
            </Wrapper>
        )
    }
}

const mapStateToProps = store => {
    // console.log("store", store);
    return {
      auth_data: store.authData
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      loginQuery: (data) => dispatch(CheckLogin(data))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login)