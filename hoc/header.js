import React, { Component } from 'react'
import styled from "styled-components"
import { Input, Menu, Dropdown, Modal } from 'antd';
import Cookies from 'js-cookie'
import { connect } from "react-redux";
import {LogOut, createNote} from "../actions/asyncActions"

const { TextArea } = Input;

const Wrapper = styled.div`
width: 100%;
height:50px;
background: #1f3f54;
padding-top: 10px;
padding-bottom: 10px;
font-size: 12px;
position: relative;
color: #ff9d7e;
`
const Container = styled.div`
display:flex;
justify-content: space-around;
`

function handleMenuClick(e) {
    console.log('click', e);
  }
  
  

class Header extends Component {

    state = {
        modal2Visible: false,
        modal3Visible: false,
        note_title:"",
        note_description:""
      };

      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
      setModal3Visible(modal3Visible) {
        this.setState({ modal3Visible });
      }

      handleMenuClick(e) {
        console.log('click', e);
      }
      onChange = e => {
        console.log('Change:', e.target.value);
      };
      LogoutHandler = () =>{
        LogOut();
      }

      changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
      }
      newNoteSubmitHandler = () => {
        const data = {
          title:this.state.note_title,
          description:this.state.note_description,
          email:this.props.auth_data.email,
          username:this.props.auth_data.username
        }
        createNote(data)
      }

      menu = (
        <Menu onClick={handleMenuClick}>
          <Menu.Item key="1" onClick={() => this.setModal2Visible(true)}>Edit Profile</Menu.Item>
          <Menu.Item key="2" onClick={() => this.setModal3Visible(true)}>Add new notes</Menu.Item>
          <Menu.Item key="3" onClick={this.LogoutHandler}>Log out</Menu.Item>
        </Menu>
      );

    render() {
      console.log("props in header", this.props)
        const {name, email, username } = this.props.auth_data
        return (
            <Wrapper>
                <Container>
                    Total notes : 5
                    <Dropdown.Button overlay={this.menu}>Welcome {name}</Dropdown.Button>
                    <Modal
                        title="Edit Profile"
                        centered
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                        >
                        <Input placeholder="Name" value= {name}/>
                        <Input placeholder="Email" value= {email}/>
                        <Input placeholder="Username" value= {username}/>
                    </Modal>

                    <Modal
                        title="Add new Note"
                        centered
                        visible={this.state.modal3Visible}
                        onOk={() => this.newNoteSubmitHandler()}
                        onCancel={() => this.setModal3Visible(false)}
                        >
                        <Input placeholder="Title" name="note_title" value={this.state.note_title} onChange= {this.changeHandler}/>
                        <TextArea showCount maxLength={100} style={{ height: 150 }} name="note_description" value={this.state.note_description} onChange={this.changeHandler} />
                    </Modal>
                </Container>
            </Wrapper>
        )
    }
  }
  

const mapStateToProps = store =>{
  console.log("store", store)
  return {
      auth_data: store.authData.data,
      // token: store.authData.token
    };
}
const mapDispatchToProps = dispatch => {
  return {
      // loginQuery: (data) => dispatch(CheckLogin(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)