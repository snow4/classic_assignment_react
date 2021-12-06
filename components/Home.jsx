import React, { Component } from 'react'
import Header from "../hoc/header"
import styled from "styled-components"
import { Button, Radio } from 'antd';
import { connect } from "react-redux";
import {getAllLists } from "../actions/asyncActions"
const Wrapper = styled.div``

const Container = styled.div`
background: #fff;
width: 100%;
margin: 3em 0 0 5em;;
padding:1em 3em 3em 3em;
`
const Notes = styled.div`
display:flex;

> div{
    border: 2px solid #eee;
    padding:1em;
    display:flex;
    flex-direction:column;
    width:100%;
}

`
const Title = styled.div`
font-weight:800;
`
const Description = styled.div``

class Home extends Component {

    componentDidMount = () =>{
        const {email} = this.props.auth_data;
        // console.log("email in home", email);
        getAllLists({email})
    }

    render() {
        // const notes= this.props.allNotes
        return (
            <div>
                <Header/>
                <Container>
                <h1>Notes</h1>
                    <Notes>
                        <div>
                            <Title>I am Title</Title>
                            <Description>This is description here</Description>
                        </div>
                        <Button size='large'>Delete</Button>
                        <Button type="dashed" size='large'>
                            Edit
                        </Button>
                    </Notes>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = store =>{
    console.log("store", store.modal)
    return {
        auth_data: store.authData.data,
        allNotes: store.lists
      };
  }
  const mapDispatchToProps = dispatch => {
    return {
        // loginQuery: (data) => dispatch(CheckLogin(data))
      };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home)