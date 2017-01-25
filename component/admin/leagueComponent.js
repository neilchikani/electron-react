import React from 'react';
import AdminData from './adminData'
import Modal from '../common/modal'

export default React.createClass({
  render: function () {
    return(
      <div style={{minHeight: 164}} className="page-wrapper">
        <div className="panel panel-default margin-top-15">
          <div className="panel-heading">
            {/* /.panel-heading */}
            <div className="panel-body no-padding">
              <div className="pull-left">
                <h3 className="no-margin padding-top-5">League List</h3>
              </div>

              {/* Modal */}
              <Modal heading="Add League" buttonTitle="Create New League"/>

              {/* /.modal */}
            </div>
            {/* .panel-body */}
          </div>
          {/* /.panel-heading */}
          <div className="panel-body">
            <AdminData/>
          </div>
          {/* /.panel-body */}
        </div>
        {/* /.col-lg-12 */}
      </div>
    )
  }
});