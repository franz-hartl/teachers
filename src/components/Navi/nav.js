<<<<<<< HEAD
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class  extends React.Component {
  constructor(props) {
    super(props);
=======
import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap'

const Navi = () => (
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav variant="tabs" className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown as={NavItem} href="https://www.google.com" title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
>>>>>>> b13fc87c64441aaf597710a86539027a793d52d0

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div class="zone-menu-wrapper">
      <div className="container main-menu">
        <Navbar color="light" light expand="lg">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto ynhti-nav" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret>
                 <NavLink href="/curriculum">
                  Curricular Resources
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/curriculum/indexes">
                    View topical index of units
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/curriculum/units">
                    View resources by volume
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/curriculum/referencelists">
                    Reference lists
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret>
                <NavLink href="/brochures">
                  Reports and Evaluation
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/brochures/studies">
                    Studies
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/NewHavenProgram">
                    New Haven Program
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/nationdemonstrationpj">
                    National Demonstration Project
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret>
                <NavLink href="/pubs">
                  Publications
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/pubs/periodical">
                    Periodical
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/pubs/books">
                    Books
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/CenterManual/index.html">
                    Institute Centers
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret>
                <NavLink href="/event-proceedings">
                  Event Proceedings
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/event-proceedings/conferences">
                    Conferences
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/event-proceedings/endowment">
                    Endowment
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/event-proceedings/news-conferences">
                    News Conferences
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/25thTranscript.html">
                    25th Anniversary
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/congressional.html">
                    Congressional Hearing
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/timeline">
                  Timeline
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle caret>
                <NavLink href="/about">
                  About the Institute
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/brochures/annual-brochure.html">
                      Annual Brochure
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/A6.html">
                    Policies, Structure, and Procedures
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/A9.html">
                    Awards and Recognition
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/brochures/video-programs.html">
                    Video Programs
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/articles/index.html">
                    Published Essays
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/comments.html">
                    Contact Us
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </div>
    );
  }
}
