import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

// export default class  extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {

  const Navi = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <div className="container main-menu">
        <Navbar color="light" light expand="lg">
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="ml-auto ynhti-nav" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/curriculum" caret style={{ textAlign: "center" }}>
                  Curricular Resources
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/curriculum/indexes/">
                    View Topical Index of Units
                  </DropdownItem>
                  <DropdownItem href="/curriculum/units/">
                    View List of Volumes by Year
                  </DropdownItem>
                  <DropdownItem href="/curriculum/referencelists">
                    Reference Lists
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/participate" caret style={{ textAlign: "center" }}>
                  Participate
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/pdfs/teachers-institute-approach.pdf" target="_blank">
                      Teachers Institute Approach
                  </DropdownItem>
                  <DropdownItem href="/brochures/A1/Brochure-2025.pdf" target="_blank">
                      Annual Brochure
                  </DropdownItem>
                  <DropdownItem href="/participate/seminars">
                      Seminars
                  </DropdownItem>
                  <DropdownItem href="/participate/program-calendar">
                      Program Calendar
                  </DropdownItem>
                  <DropdownItem href="/pdfs/2024-FAQ.pdf" target="_blank">
                      FAQs
                  </DropdownItem>
                  <DropdownItem href="/pdfs/2025-Talk-Flyer.pdf" target="_blank">
                      Lecture Series
                  </DropdownItem>
                  <DropdownItem href="/participate/teacher-leadership">
                      Teacher Leadership
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/brochures/evaluation" caret style={{ textAlign: "center" }}>
                  Evaluation
                </DropdownToggle>
                {/*}<DropdownMenu>
                  <DropdownItem href="/brochures/studies">
                    Studies
                  </DropdownItem>
                  <DropdownItem href="/brochures/NewHavenProgram">
                    Annual New Haven Program
                  </DropdownItem>
                  <DropdownItem href="/brochures/nationdemonstrationpj">
                    National Demonstration Project
                  </DropdownItem>
                </DropdownMenu>*/}
              </UncontrolledDropdown>
              {/*}<UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/pubs" caret>
                  Publications
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/pubs/periodical">
                    Periodical
                  </DropdownItem>
                  <DropdownItem href="/pubs/books">
                    Books
                  </DropdownItem>
                  <DropdownItem href="/brochures/CenterManual/">
                    Institute Center Manual
                  </DropdownItem>
                  <DropdownItem href="/articles/index.html">
                    Published Essays
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>*/}
              {/*<UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/event-proceedings" caret>
                  Event Proceedings
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/event-proceedings/conferences">
                    Conferences
                  </DropdownItem>
                  <DropdownItem href="/event-proceedings/endowment">
                    Endowment Celebrations
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
              </UncontrolledDropdown>*/}
              <NavItem>
                <NavLink href="/timeline" style={{ textAlign: "center" }}>
                  Timeline
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="/about" caret style={{ textAlign: "center" }}>
                  About the Institute
                </DropdownToggle>
                <DropdownMenu right>
                  {/*<DropdownItem href="/participate">
                    Participate
                  </DropdownItem>*/}
                  <DropdownItem href="/about/policies-structure-procedures">
                    Policies, Structure, and Procedures
                  </DropdownItem>
                  <DropdownItem href="/brochures/A9.html">
                    Awards and Recognition
                  </DropdownItem>
                  {/*<DropdownItem href="/brochures/video-programs.html">
                    Video Programs
                  </DropdownItem>*/}
                  <DropdownItem href="/about/advisory">
                    University Advisory Council
                  </DropdownItem>
                  <DropdownItem href="/about/staff">
                    Staff
                  </DropdownItem>
                  <DropdownItem href="/about/archives">
                    Archives
                  </DropdownItem>
                  {/*<DropdownItem href="/event-proceedings">
                    Event Proceedings
                  </DropdownItem>*/}
                  <DropdownItem href="/comments.html">
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default Navi
