import React from "react"
import LogoutDropDown from './logoutDropDown'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <a className="navbar-brand">Welcome </a>
        </div>
        <div className="navbar-top-links navbar-right">
          <LogoutDropDown/>
        </div>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav in" id="side-menu">
              {
                this.props.links.map((item,i) => <li key={i}><Link activeClassName="active" to={item.toLowerCase()}>{item}</Link></li>)
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});