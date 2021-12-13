import React, { Component } from 'react'
import styled from 'styled-components'
// import Link from 'next/link'

const Wrapper = styled.div`
  margin: 1em;
  width: 280px;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin: unset;
    margin-top: 2em;
  }
`

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    width: unset;
  }
  @media only screen and (min-width: 411px) {
    width: unset;
  }
  @media only screen and (min-width: 300px) {
    width: unset;
  }
`

const Title = styled.div`
  font-weight: 700;
  border-bottom: 1px solid #eee;
  padding: 0.5em;
`

const Thumbnail = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    margin: 1em;
  }
  > img {
    width: 250px;
  }
`

const BottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0.5em;
`

const Source = styled.div``

const Date = styled.div``

export default class card extends Component {
  render() {
    // console.log('props.in card', this.props)
    return (
      <Wrapper>
        <Container>
          <Thumbnail>
            <img src={this.props.thumbnail}></img>
          </Thumbnail>
          <Title>{this.props.title}</Title>
          <BottomBlock>
            <Source>{this.props.source}</Source>
            <Date>{this.props.date}</Date>
          </BottomBlock>
        </Container>
      </Wrapper>
    )
  }
}
