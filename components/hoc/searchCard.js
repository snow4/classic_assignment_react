import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div``
const Container = styled.div`
  width: 60%;
  margin-top: 2em;
  @media only screen and (max-width: 800px) {
    width: unset;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Displayed_link = styled.div`
  font-size: 14px;
  line-height: 1.3;
`
const Title = styled.h3`
  font-family: arial, sans-serif;
  font-size: 20px;
  color: #1a0dab;
  cursor: pointer;
  > a {
    text-decoration: none;
  }

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`
const Snippet = styled.div``

export default class grid extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Displayed_link>{this.props.displayed_link}</Displayed_link>

          <Title>
            {/* <Link> */}
            {this.props.title}
            {/* </Link> */}
          </Title>

          <Snippet>{this.props.snippet}</Snippet>
        </Container>
      </Wrapper>
    )
  }
}
