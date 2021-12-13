import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { NewsQuery } from '../actions/asyncActions'
import Card from '../components/hoc/card1'
import SideCard from '../components/hoc/sideCard'
import { Empty } from 'antd'
const Wrapper = styled.div`
  padding: 1em;
  @media only screen and (max-width: 800px) {
    padding: unset;
  }
`
const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
const SideContainer = styled.div`
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-right: 1px solid #eee;
  }
`
const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-right: 1px solid #eee;
  margin-right: 3em;
  @media only screen and (max-width: 800px) {
    margin: unset;
    border: unset;
  }
`

class news extends Component {
  componentDidMount = () => {
    NewsQuery()
  }

  render() {
    const data = this.props.news
      ? this.props.news.organic_results.map((d) => {
          return <Card {...d} />
        })
      : []

    const side_data = this.props.news
      ? this.props.news.organic_results.map((d) => {
          return <SideCard {...d} />
        })
      : []
    return (
      <Wrapper>
        <Container>
          <NewsContainer>
            {/* {this.props.news ? (
              { data }
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )} */}
            {data}
          </NewsContainer>
          <SideContainer>{side_data}</SideContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(news)
