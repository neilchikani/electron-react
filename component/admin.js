import React from 'react';
import AdminData from './adminData'
import Modal from './modal';
import MakeForm from './makeFormStructure'
import Sidebar from './sidebar'
var Tab = require('react-bootstrap').Tab;
import SidebarData from './sidebarData'

var AdminComponent = React.createClass({
  getInitialState:function () {
    return{
      createGameData:[
        {
          labelName: 'Game',
          type: 'text',
          className: 'form-control',
          id: 'game',
          placeholderText: 'Game'
        },
        {
          labelName: 'Game1',
          type: 'select',
          className: 'form-control',
          id: 'game1',
          placeholderText: 'Game1'
        }
      ],
      sidebarLink:['Games', 'League', 'Team'],
      sideBarContent:{
        games: false,
        league: false,
        team: false
      }
    }
  },
  render: function () {
    return (
      <div>
        <Sidebar links={this.state.sidebarLink} />
        {this.props.children}
      </div>
    )
  }
});

export default AdminComponent;