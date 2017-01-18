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
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" onClick={this.showModal}>
          Make a new Bet
        </Button>

        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="createBetForm">
              <div className="form-group">
                <label htmlFor ="game" className="control-label">Game</label>
                <select name="game" id="game" className="htmlForm-control" >
                  <option value='0'>Select Game</option>
                </select>
              </div>
              <div className="form-group">
                <label className="radio control-label">Bet Type</label>
                <label className="radio-inline">
                  <input type="radio" name="optBetType" value="1" />Moneyline
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optBetType" value="2"/>Spread
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optBetType" value="3"/>Total
                </label>
              </div>
              <div className="form-group" id="teamDiv">
                <label className="radio control-label">Team</label>
                <label className="radio-inline">
                  <input type="radio" name="optTeam" value="1"/>Team 1
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optTeam" value="2"/>Team 2
                </label>
              </div>
              <div className="form-group" id="totTypeDiv">
                <label className="radio control-label" >Total Type</label>
                <label className="radio-inline">
                  <input type="radio" name="optTotalType" value="1"/>Over
                </label>
                <label className="radio-inline">
                  <input type="radio" name="optTotalType" value="2"/>Under
                </label>
              </div>
              <div className="form-group" id="handicapDiv">
                <label htmlFor="handicap" className="control-label">Handicap</label>
                <input type="text" name="handicap" id="handicap" className="form-control"
                       placeholder="Handicap" value="" />
              </div>
              <div className="form-group" id="thresholdDiv">
                <label htmlFor="threshold" className="control-label">Threshold</label>
                <input type="text" name="threshold" id="threshold" className="form-control"
                       placeholder="Threshold" value="" />
              </div>


              <div className="form-group" id="oddsDiv">
                <label htmlFor ="odds" className="control-label">Odds</label>
                <input type="text" name="odds" id="odds" className="form-control"
                       placeholder="Odds" value="" />
              </div>
              <div className="form-group" id="riskDiv">
                <label htmlFor ="risk" className="control-label">Risk/State</label>
                <input type="text" name="risk" id="risk" className="form-control"
                       placeholder="Risk/State" value="" />
              </div>

            </form>
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

