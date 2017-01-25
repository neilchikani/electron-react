import React from 'react'
import Sidebar from '../common/sidebar'

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