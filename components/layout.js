import React from 'react'
import Header from './header'
import styled from 'styled-components'
import Spinner from '../spinner'
import { connect } from 'react-redux'

const Wrapper = styled.div`
  max-width: 100%;

  background: #fff;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`

function layout({ children, spinner }) {
  return (
    <Wrapper>
      <Header />
      {spinner && <Spinner />}
      {children}
    </Wrapper>
  )
}

const mapStateToProps = (store) => {
  return {
    spinner: store.spinner,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(layout)
