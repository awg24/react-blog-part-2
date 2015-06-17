var React = require("react");
var Backbone = require("backbone");
Backbone.$ = require("jquery");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="panel panel-danger">
			  <div className="panel-heading">Login</div>
			  <div className="panel-body">
			   	<form className="form-inline">
			   	  <div className="form-group">
			   	    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email/Username</label><br/>
			   	    <div className="col-sm-10">
			   	      <input type="email" ref="username" className="form-control" id="inputEmail3" placeholder="Email/Username"/>
			   	    </div>
			   	  </div>
			   	  <div className="form-group">
			   	    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label><br/>
			   	    <div className="col-sm-10">
			   	      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
			   	    </div>
			   	  </div><br/><br/>
			   	  <div className="form-group">
			   	    <div className="col-sm-5">
			   	      <button type="submit" className="btn btn-default" onClick={this.goToBlog}>Sign in</button>
			   	    </div>
			   	    <div className="col-sm-5">
			   	      <button type="submit" className="btn btn-default" onClick={this.goToNewUserSignUp}>New User</button>
			   	    </div>
			   	  </div>
			   	</form>
			  </div>
			</div>
		);
	},
	goToBlog: function(event){
		event.preventDefault();
		this.props.goTo.navigate("blog/"+this.refs.username.getDOMNode().value, {trigger: true});
	},
	goToNewUserSignUp: function(event){
		event.preventDefault();
		this.props.goTo.navigate("newMember", {trigger: true});
	}

});