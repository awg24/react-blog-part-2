var React = require('react');
var BlogPostForm = require("./components/BlogPostForm");
var BlogPostCollection = require("./collections/BlogPostCollection");
var blogPosts = new BlogPostCollection();

React.render(
	<div>
		<BlogPostForm />
	</div>,
	document.getElementById("container")
);
