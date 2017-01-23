import React from "react"

export default React.createClass({
  render(){
    return(
      <form id="createBetForm">
        <div className="form-group">
          <label htmlFor ="game" className="control-label">Game</label>
          <select name="game" id="game" className="form-control" >
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
    )
  }
});