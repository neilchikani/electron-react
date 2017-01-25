import React from 'react'
import Sidebar from '../common/sidebar'
import GamesComponent from './gamesComponent'
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
        },
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
      createTeamData:[
        {
          labelName: 'Team Name',
          type: 'text',
          className: 'form-control',
          id: 'team-name',
          placeholderText: 'Team Name'
        },
        {
          labelName: 'League Abbreviation',
          type: 'text',
          className: 'form-control',
          id: 'label abbreviation',
          placeholderText: 'League Abbreviation'
        },
        {
          labelName: 'Sports',
          type: 'select',
          className: 'form-control',
          id: 'sportz',
          placeholderText: 'Sportz',
          options:[
            "Americal Foorball",
            "Hocky",
            "BasketBall",
            "Nascar"
          ]
        }
      ],
      sidebarLink:['Games', 'League', 'Teams']
    }
  },
  render: function () {
    var that = this;

    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        createTeamData: that.state.createTeamData
      })
    });
    return (
      <div>
        <Sidebar links={this.state.sidebarLink} />
        {children}
      </div>
    )
  }
});

export default AdminComponent;