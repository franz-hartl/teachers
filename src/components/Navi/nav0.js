import React from 'react'
import { Link } from 'gatsby'


class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
  }  
  render() {
    const { location, title } = this.props
    return (

    <navbar-collapse isOpen={!this.state.collapsed} navbar>
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <button class="navbar-toggler" type="button" onClick={this.toggleNavbar} data-toggle="collapsed" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class={this.state.collapsed ? "collapse navbar-collapse" : " navbar-collapse"} id="navbarNav">
    <ul class="navbar-nav ynhti-nav">
    <li class="nav-item">
        <Link class="nav-link" to="#">Curricular Resources <span class="sr-only">(current)</span></Link>
    </li>
    <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" to="hello-world" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Brochures and Reports 
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link class="dropdown-item" to="#">Item 1</Link>
        <div class="dropdown-divider"></div>
        <Link class="dropdown-item" to="#">Item 2</Link>
        <div class="dropdown-divider"></div>
        <Link class="dropdown-item" to="#">Item 3</Link>
        </div>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to="#">Publications</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to="#">Event Proceedings</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to="#">Centers</Link>
    </li>
    <li class="nav-item">
        <Link class="nav-link" to="#">About the Institute</Link>
    </li>
    </ul>
    </div>
</nav>
</navbar-collapse>
    )
  }
}

export default Navi
