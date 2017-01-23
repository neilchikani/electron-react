import React from 'react'
export default React.createClass({
  render: function () {
    var that = this;

    return(
      <div id="page-wrapper">
        {
          this.props.links.map(function (item, i) {
            return (<div key={i} className={item.toLowerCase()}> this is item {i+1} </div> )
          })
        }
      </div>
    )
  }
});