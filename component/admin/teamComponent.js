import React from 'react';
import AdminData from './adminData'
import Modal from '../common/modal'
import MakeformData from '../common/makeFormStructure'
import TabularData from '../common/generateTabularTemplate'

export default React.createClass({

  render: function () {

    var ajaxUrl = '/Teams'+'?access_token=' + sessionStorage.accesstoken;
    return(
      <div style={{minHeight: 164}} className="page-wrapper">
        <div className="panel panel-default margin-top-15">
          <div className="panel-heading">
            {/* /.panel-heading */}
            <div className="panel-body no-padding">
              <div className="pull-left">
                <h3 className="no-margin padding-top-5">Team List</h3>
              </div>

              {/* Modal */}
              <Modal heading="Add Team" buttonTitle="Create New Team">
                <MakeformData formdata={this.props.createTeamData} />
              </Modal>
              {/* /.modal */}
            </div>
            {/* .panel-body */}
          </div>
          {/* /.panel-heading */}
          <div className="panel-body">
            <TabularData dataUrl={ajaxUrl} />
          </div>
          {/* /.panel-body */}
        </div>
        {/* /.col-lg-12 */}
      </div>
    )
  }
});