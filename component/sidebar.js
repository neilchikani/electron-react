import React from "react"
import LogoutDropDown from './logoutDropDown'

export default React.createClass({
  handleClick:function (e) {
    console.log(e);
  },
  render(){
    var that = this;
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
                this.props.links.map(function (item, i) {
                  return ( <li key={i}><a onClick={that.handleClick.bind(null,item.toLowerCase())} className={item.toLowerCase()} href="javascript:void(0)"> {item}</a> </li>)
                })
              }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
});