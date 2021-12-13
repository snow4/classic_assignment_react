import React, { Component } from 'react'

import styled from 'styled-components'
// import Link from 'next/link'

const Wrapper = styled.div`
  width: 300px;
  background: #eee;
  margin-bottom: 1em;
  padding: 0.4em;
  cursor: pointer;

  @media only screen and (max-width: 800px) {
    margin-right: 1em;
  }
`
const Container = styled.div``
const Title = styled.div`
  font-weight: 600;
`
const Snippets = styled.div``

export default class sideCard extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>{this.props.title}</Title>
          <Snippets>{this.props.snippet}</Snippets>
        </Container>
      </Wrapper>
    )
  }
}
