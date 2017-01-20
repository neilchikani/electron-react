import React from 'react';
import AdminData from './adminData'
import Modal from './modal';
import MakeForm from './makeFormStructure'
import Sidebar from './sidebar'

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

      sidebarLink:['Games', 'Games1', 'Games2']
    }
  },
  render: function () {
    return (
      <div>
        <Sidebar links={this.state.sidebarLink} />
        <div id="page-wrapper">
          <div className="row">
            <div className="panel panel-default margin-top-15">
              <div className="panel-heading">
                <div className="panel-body no-padding">
                  <div className="pull-left">
                    <h3 className="no-margin padding-top-5">Game List</h3>
                  </div>
                  <Modal heading="Create New Game`1" buttonTitle="Create New Game">
                    <MakeForm formdata={this.state.createGameData} />
                  </Modal>
                </div>
              </div>
              <div className="panel-body">
                <AdminData />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});





export default AdminComponent;