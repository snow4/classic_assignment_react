import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {} from '../actions/asyncActions'
import Home from '../components/Home'

const Wrapper = styled.div``

class App extends Component {
  componentDidMount = () => {}

  render() {
    return (
      <Wrapper>
        <Home />
      </Wrapper>
    )
  }
}
const mapStateToProps = (store) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
