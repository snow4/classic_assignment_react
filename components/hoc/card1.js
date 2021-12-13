import React, { Component } from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

const Wrapper = styled.div``

const Container = styled.div`
  min-height: 17.5vw;
  width: 500px;
  padding-right: 1em;
  padding-left: 1em;
`

const Title = styled.div`
  font-weight: 700;

  padding-bottom: 0.5em;
`
const Snippets = styled.div`
  padding-bottom: 1em;
  padding-top: 1em;
`
const Source = styled.div`
  padding-bottom: 1em;
`
const BottomBlock = styled.div`
  border-bottom: 1px solid #eee;
`

export default class card1 extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>{this.props.title}</Title>
          <Snippets>{this.props.snippet}</Snippets>
          <BottomBlock>
            <Source>{this.props.displayed_link}</Source>
            {/* <Date>{this.props.date}</Date> */}
          </BottomBlock>
        </Container>
      </Wrapper>
    )
  }
}
