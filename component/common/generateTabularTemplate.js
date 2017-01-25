import React from 'react';

var baseUrl = 'http://localhost:4000/api',
  filter =  { "include": "sports" };

var EmployeeGridRow = React.createClass({
  getInitialState: function(){
    return {
      items:[]
    }
  },
  render : function(){
    for(var data in this.props.item){
      this.state.items.push(<td key={data}>{this.props.item[data]}</td>)
    }
    // var gameStatus = '',
    //     showEditLink = '';
    // if(this.props.item.enddate < new Date().toJSON() && this.props.item.status == '1'){
    //   gameStatus = <a className="closegame" href="#">Close Game</a>;
    // }else if(this.props.item.status == '1'){
    //   gameStatus = <span className="pending"> Pending </span>
    //   showEditLink = <a href="" className="editgame"> Edit </a>
    // }else{
    //   gameStatus = <span className="completed"> Completed</span>
    // }

    return (
      <tr>
        {this.state.items}
      </tr>
    );
  }

});

var EmployeeGridTable = React.createClass({
  getInitialState: function(){
    return {
      items:[]
    }
  },
  componentDidMount:function(){

    $.get(baseUrl + this.props.dataUrl, function(data){
      if(this.isMounted()){
        this.setState({
          items: data
        });
      }
    }.bind(this));
  },
  render : function(){
    var rows = [],
      header = [];
    for(var data in this.state.items[0]){
      header.push(<th key={data}> {data.toUpperCase()} </th>);
    }
    this.state.items.forEach(function(item){
      rows.push(<EmployeeGridRow key={item.id} item={item}/>);
    });
    return (<table className="table table-bordered table-responsive">
      <thead>
      <tr>
        {header}
      </tr>
      </thead>
      <tbody>
      {rows}

      </tbody>
    </table>);
  }
});

export default EmployeeGridTable;