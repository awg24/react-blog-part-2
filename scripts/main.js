var React = require('react');
var BlogPostForm = require("./components/BlogPostForm");
var BlogPostCollection = require("./collections/BlogPostCollection");
var blogPosts = new BlogPostCollection();
var LoginFormComponent = require("./components/LoginFormComponent");
var NewMemberSignUpComponent = require("./components/NewMemberSignUpComponent");
var Backbone = require("backbone");
Backbone.$ = require("jquery");

var App = Backbone.Router.extend({
	routes:{
		"":"login",
		"newMember":"newSignUp",
		"blog/:user":"blog",
	},
	login: function(){
		console.log("at the login page");
		React.render(<LoginFormComponent goTo={myRoutes} />, document.getElementById("container"));
	},
	blog: function(user){
		console.log("at the blog site");
		React.render(<BlogPostForm user={user} />, document.getElementById("container"));
	},
	newSignUp: function(){
		console.log("now at a new member sign up ")
		React.render(<NewMemberSignUpComponent goTo={myRoutes} />, document.getElementById("container"));
	}
});

var myRoutes = new App();

Backbone.history.start();

