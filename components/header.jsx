import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  background: #474866;
  width: 100%;
  height: 4em;
`
const Container = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
`
const Brand = styled.div`
  font-size: 25px;
  padding: 1rem;
  > a {
    color: #fff;
  }
`
const Navbar = styled.ul`
  display: flex;
`
const NavItems = styled.li`
  list-style: none;
  padding: 1rem;
  display: block;
  font-size: 20px;
  > a {
    color: #fff;
  }
`

export default class header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Brand>
            <Link href="/">Brand name</Link>
          </Brand>
          <Navbar>
            <NavItems>
              <Link href="/">Home</Link>
            </NavItems>
            <NavItems>
              <Link href="/newspage">
                <a>News</a>
              </Link>
            </NavItems>
          </Navbar>
        </Container>
      </Wrapper>
    )
  }
}
