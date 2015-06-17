var React = require("react");
var Backbone = require("backbone");
Backbone.$ = require("jquery");
var UserModel = require("../models/UserModel");
var UserCollection = require("../collections/UserCollection");
var userCollection = new UserCollection();

module.exports = React.createClass({
	render: function(){
		return (
			<div className="panel panel-signup panel-danger">
			  <div className="panel-heading">Sign Up</div>
			  <div className="panel-body">
			   	<form className="form-inline">
			   	  <div className="form-group text-left">
			   	    <label htmlFor="inputEmail3" className="col-sm-12 control-label">Enter Email</label>
			   	    <div className="col-sm-10">
			   	      <input ref="newUserEmail" type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
			   	    </div>
			   	    <label htmlFor="inputEmail3" className="col-sm-12 control-label">Enter Username</label>
			   	    <div className="col-sm-10">
			   	      <input ref="newUsername" type="email" className="form-control" id="inputEmail3" placeholder="Username"/>
			   	    </div>
			   	  </div><br/><br/>
			   	  <div className="form-group">
			   	    <label htmlFor="inputPassword3" className="col-sm-12 control-label">Password</label>
			   	    <div className="col-sm-10">
			   	      <input ref="newUserPassword" type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
			   	    </div><br/><br/>
			   	    <label htmlFor="inputPassword3" className="col-sm-12 control-label"> Confirm Password</label>
			   	    <div className="col-sm-10">
			   	      <input type="password" className="form-control" id="inputPassword3" placeholder="Confirm Password"/>
			   	    </div>
			   	  </div><br/><br/>
			   	  <div className="form-group">
			   	    <div className="col-sm-offset-2 col-sm-5">
			   	      <button type="submit" className="btn btn-default" onClick={this.goToBlog}>Sign Up</button>
			   	    </div>
			   	  </div>
			   	</form>
			  </div>
			</div>
		);
	},
	goToBlog: function(event){
		event.preventDefault();
		var newUser = new UserModel({
			email: this.refs.newUserEmail.getDOMNode().value,
			username: this.refs.newUsername.getDOMNode().value,
			password: this.refs.newUserPassword.getDOMNode().value,
			createdAt: new Date()
		});

		userCollection.add(newUser);

		this.props.goTo.navigate("blog/"+this.refs.newUsername.getDOMNode().value, {trigger: true});
	}

});