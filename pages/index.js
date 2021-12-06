import React, { Component } from 'react'
import Home from "../components/Home"
import Login from "../components/Login"
import Cookies from 'js-cookie'
import styled from "styled-components"
import { connect } from "react-redux";
import { checkAuthentication } from "../actions/asyncActions"

const Wrapper = styled.div``;

class App extends Component {

    componentDidMount = () =>{
        // console.log("in comp mounting")
        checkAuthentication();
    }

    render() {

        const AUTH_DATA = Cookies.get('token')
        return (
            <Wrapper>
                {this.props.login ? <Home/> : <Login/>}
            </Wrapper>
        )
    }
}
const mapStateToProps = store =>{
    console.log("store", store)
    return {
        auth_data: store.authData,
        login: store.isLoggedIn
        // token: store.authData.token
      };
}
const mapDispatchToProps = dispatch => {
    return {
        // loginQuery: (data) => dispatch(CheckLogin(data))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)