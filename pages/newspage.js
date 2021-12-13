import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewsQuery } from '../actions/asyncActions'
import styled from 'styled-components'

import Card1 from '../components/hoc/card1'
import Card from '../components/hoc/card'
import SideCard from '../components/hoc/sideCard'
// import Link from 'next/link'

const Wrapper = styled.div`
  width: 100%;
  padding: 1em;
  @media only screen and (max-width: 768px) {
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  @media only screen and (max-width: 768px) {
    display: unset;
  }
`
const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const TopStoriesCont = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class newspage extends Component {
  componentDidMount = () => {
    NewsQuery()
  }

  render() {
    const data = this.props.news
      ? this.props.news.organic_results.map((d) => {
          return <Card1 {...d} />
        })
      : []

    const side_data = this.props.news
      ? this.props.news.organic_results.map((d) => {
          return <SideCard {...d} />
        })
      : []

    const topstories = this.props.news
      ? this.props.news.top_stories.map((d) => {
          return <Card {...d} />
        })
      : []
    return (
      <Wrapper>
        <Container>
          <NewsContainer>{topstories}</NewsContainer>
          <div>{side_data}</div>
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store)
  return {
    news: store.newsResult,
  }
}
const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(newspage)
