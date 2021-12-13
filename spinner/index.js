import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 45%;
  z-index: 6;

  @media only screen and (max-width: 800px) {
    left: unset;
  }
  @media only screen and (max-width: 1280px) {
    left: unset;
  }
`
const Container = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;


}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Box = styled.div``

export default class spinner extends Component {
  render() {
    return (
      <Box>
        <Wrapper>
          <Container></Container>
        </Wrapper>
      </Box>
    )
  }
}
