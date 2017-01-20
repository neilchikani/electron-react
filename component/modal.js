import React from 'react'


var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
const Example = React.createClass({
  getInitialState() {
    return {show: false};
  },
  showModal() {
    this.setState({show: true});
  },

  hideModal() {
    this.setState({show: false});
  },

  render() {
    var buttonTitle;
    if(this.props.buttonTitle){
      buttonTitle = this.props.buttonTitle
    }else{
      buttonTitle = 'Demo title';
    }
    return (
      <ButtonToolbar>
        <Button bsClass="btn btn-primary pull-right" bsStyle="primary" onClick={this.showModal}>
          {buttonTitle}
        </Button>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.heading}</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            { this.props.children }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
});

export default Example;

