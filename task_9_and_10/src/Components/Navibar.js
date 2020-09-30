import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
  a,
  .navber-brand,
  .navbar-nav,
  .nav-link {
    color: #adb1b8;
    &hover {
      color: white;
    }
  }
`

function Navibar() {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand> Task_8 </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  {' '}
                  <Link to="/">
                    <strong>Users</strong>{' '}
                  </Link>{' '}
                </Nav.Link>
                <Nav.Link>
                  {' '}
                  <Link to="/users">
                    <strong>Users Redux</strong>
                  </Link>{' '}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  )
}
export default Navibar
