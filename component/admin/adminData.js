import React from 'react';
import { Link } from 'react-router'

var baseUrl = 'http://localhost:4000/api/',
  filter =  { "include": "sports" };

var EmployeeGridRow = React.createClass({
  editForm: function (id) {
    console.log(id);
  },
  render : function(){
    var gameStatus = '',
        showEditLink = '';
    if(this.props.item.enddate < new Date().toJSON() && this.props.item.status == '1'){
      gameStatus = <a className="closegame" href="#">Close Game</a>;
    }else if(this.props.item.status == '1'){
      gameStatus = <span className="pending"> Pending </span>
      showEditLink = <Link to='games' params={{ user_id: 1 }} > Edit </Link>
    }else{
      gameStatus = <span className="completed"> Completed</span>
    }
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.sports.name}</td>
        <td>{gameStatus}</td>
        <td>{showEditLink}</td>
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

    $.get(baseUrl + 'games?access_token=' + sessionStorage.accesstoken + "&filter=" + JSON.stringify(filter), function(data){
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