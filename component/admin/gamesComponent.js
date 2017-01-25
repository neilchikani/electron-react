import React from 'react';
import AdminData from './adminData'
import Modal from '../common/modal'

export default React.createClass({
  render: function () {
    return(
      <div className="page-wrapper">
        <div className="row">
          <div className="panel panel-default margin-top-15">
            <div className="panel-heading">
              <div className="panel-body no-padding">
                <div className="pull-left">
                  <h3 className="no-margin padding-top-5">Game List</h3>
                </div>
                <Modal heading="Create New Game`1" buttonTitle="Create New Game">

                </Modal>
              </div>
            </div>
            <div className="panel-body">
              <AdminData />
            </div>
          </div>
        </div>
      </div>
    )
  }
});