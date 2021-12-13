import React, { Component } from 'react'
import styled from 'styled-components'
import { SearchQuery } from '../actions/asyncActions'
import { connect } from 'react-redux'
import SearchCard from '../components/hoc/searchCard'
import { Empty } from 'antd'

const Wrapper = styled.div``
const Container = styled.div`
  margin: 5em 0 5em 0;

  @media only screen and (max-width: 414px) {
    text-align-last: center;
  }

  @media only screen and (max-width: 768px) {
    text-align-last: center;
  }
`

const Search = styled.input`
  width: 40em;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 20px;

  @media only screen and (max-width: 800px) {
    width: 20em;
  }
  @media only screen and (max-width: 400px) {
    width: 15em;
  }
`
const Button = styled.button`
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 30px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  > div {
    margin-bottom: 4em;
  }

  > h2 {
    text-align: center;
  }
`

class Home extends Component {
  state = {
    searchquery: '',
    data: {
      title: 'Snow - Wikipedia',
      link: 'https://en.wikipedia.org/wiki/Snow',
      displayed_link: 'https://en.wikipedia.org › wiki › Snow',
      snippet:
        'Snow comprises individual ice crystals that grow while suspended in the atmosphere—usually within clouds—and then fall, accumulating on the ground where ...',
    },
  }
  searchHandler = (e) => {
    this.setState({ searchquery: e.target.value })
  }
  submitHandler = () => {
    if (this.state.searchquery != '') {
      SearchQuery(this.state.searchquery)
    } else {
      alert('please enter search query')
    }
  }

  render() {
    const search_array = this.props.search_data
      ? this.props.search_data.organic_results.map((d) => {
          return <SearchCard {...d} />
        })
      : []

    return (
      <Wrapper>
        <Container>
          <Search
            type="text"
            placeholder="Search..."
            value={this.state.searchquery}
            onChange={this.searchHandler}
          />
          <Button onClick={this.submitHandler}>Search</Button>
        </Container>

        <SearchContainer>
          {this.props.search_data ? <h2>Search Result</h2> : <></>}

          {search_array}
        </SearchContainer>
      </Wrapper>
    )
  }
}

const mapStateToProps = (store) => {
  console.log(store)
  return {
    search_data: store.searchResult,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
