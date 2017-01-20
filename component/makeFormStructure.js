import React from 'react'


var FormElements = React.createClass({
  render: function () {
    switch (this.props.formdata.type) {
      case 'text':
        return (
          <div className="form-group">
            <label htmlFor={this.props.formdata.id} className="control-label">{this.props.formdata.labelName}</label>
            <input type={this.props.formdata.type} name={this.props.formdata.id}
                   className={this.props.formdata.className} placeholder={this.props.formdata.placeholderText}/>
          </div>
        );
      case 'select':
        return (
          <div className="form-group">
            <label htmlFor={this.props.formdata.id} className="control-label">{this.props.formdata.labelName}</label>
            <select name={this.props.formdata.id} className={this.props.formdata.className}>
              <option value='0'>Select Game</option>
            </select>
          </div>
        );
    }
  }
});




var FormData = React.createClass({
  render: function () {
    return (
      <form>
        {
          this.props.formdata.map(function (item, i) {
            return ( <FormElements key={i} formdata={item}/>)
          })
        }
      </form>
    )
  }

});



export default FormData;