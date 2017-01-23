import React from "react"
import LogoutDropDown from './logoutDropDown'

export default React.createClass({
  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <a className="navbar-brand">Welcome <span id="hypUserName"></span></a>
        </div>
        <div className="navbar-top-links navbar-right">
          <LogoutDropDown/>
        </div>
        <div className="navbar-default sidebar" role="navigation">
          <div className="sidebar-nav navbar-collapse">
            <ul className="nav in" id="side-menu">
              {
                this.props.links.map(function (item, i) {
                  return ( <li key={i}><a href=""> {item}</a> </li>)
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});