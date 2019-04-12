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
                <DropdownToggle href="/curriculum" caret>
                  Curricular Resources
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/curriculum/indexes">
                    View Topical Index of Units
                  </DropdownItem>
                  <DropdownItem href="/curriculum/units">
                    View List of Volumes by Year
                  </DropdownItem>
                  <DropdownItem href="/curriculum/referencelists">
                    Reference Lists
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/brochures" caret>
                  Reports and Evaluation
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/brochures/studies">
                    Studies
                  </DropdownItem>
                  <DropdownItem href="/brochures/NewHavenProgram">
                    Annual New Haven Program
                  </DropdownItem>
                  <DropdownItem href="/brochures/nationdemonstrationpj">
                    National Demonstration Project
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/pubs" caret>
                  Publications
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/pubs/periodical">
                    Periodical
                  </DropdownItem>
                  <DropdownItem href="/pubs/books">
                    Books
                  </DropdownItem>
                  <DropdownItem href="/brochures/CenterManual/index.html">
                    Institute Center Manual
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/event-proceedings" caret>
                  Event Proceedings
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem href="/event-proceedings/conferences">
                    Conferences
                  </DropdownItem>
                  <DropdownItem href="/event-proceedings/endowment">
                    Endowment Announcement
                  </DropdownItem>
                  <DropdownItem href="/event-proceedings/news-conferences">
                    News Conferences
                  </DropdownItem>
                  <DropdownItem href="/brochures/25th.html">
                    25th Anniversary
                  </DropdownItem>
                  <DropdownItem href="/congressional.html">
                    Congressional Hearings
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/timeline">
                  Timeline
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/about" caret>
                  About the Institute
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/brochures/annual-brochure.html">
                      Annual Brochure
                  </DropdownItem>
                  <DropdownItem href="/about/policies-structure-procedures">
                    Policies, Structure, and Procedures
                  </DropdownItem>
                  <DropdownItem href="/brochures/A9.html">
                    Awards and Recognition
                  </DropdownItem>
                  <DropdownItem href="/brochures/video-programs.html">
                    Video Programs
                  </DropdownItem>
                  <DropdownItem href="/articles/index.html">
                    Published Essays
                  </DropdownItem>
                  <DropdownItem href="/comments.html">
                    Contact Us
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
