import React from 'react';

var baseUrl = 'http://localhost:4000/api/',
  filter =  { "include": "sports" };

var EmployeeGridRow = React.createClass({
  render : function(){
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.sports.name}</td>
        <td>{this.props.item.status}</td>
        <td><a className='editgame' id='" +result[i].id + "' href='#'>Edit</a></td>

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

    $.get(baseUrl + 'Games?access_token=' + sessionStorage.accesstoken + "&filter=" + JSON.stringify(filter), function(data){
      if(this.isMounted()){
        this.setState({
          items: data
        });
      }
    }.bind(this));
  },
  render : function(){
    var rows = [];
    this.state.items.forEach(function(item){
      // console.log(item);
      rows.push(<EmployeeGridRow key={item.id} item={item}/>);
    });
    return (<table className="table table-bordered table-responsive">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Sport Name</th>
        <th>Status</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>);
  }
});

export default EmployeeGridTable;