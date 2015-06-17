var React = require("react");
var BlogPostModel = require("../models/BlogPostModel");
var BlogPostList = require("./BlogPostList");
var BlogPostCollection = require("../collections/BlogPostCollection");
var blogPosts = new BlogPostCollection();
var blogCount = 0;
var myLimit = [7,6,5,4,3,2,1];

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<form className="box" onSubmit={this.addBlogPost}>
					Title: <input ref="blogTitle" type="type"/><br/><br/>
					Body: <textarea ref="blogBody"></textarea><br/><br/>
					Category: <select ref="blogCateogry">
								<option>Thing1</option>
								<option>Thing2</option>
								<option>Thing3</option>
								<option>Thing4</option>
							  </select><br/><br/>
					<button className="btn btn-primary">Post</button>
				</form><br/><br/>
				<BlogPostList setLimit={myLimit} posts={blogPosts}/>
			</div>
			);
	},
	addBlogPost: function(event){
		event.preventDefault();
		var blogPost = new BlogPostModel({
			id: blogCount,
			title: this.refs.blogTitle.getDOMNode().value,
			body: this.refs.blogBody.getDOMNode().value,
			category: this.refs.blogCateogry.getDOMNode().value,
			createdAt: new Date(),
			postOwner: 1,
		});
		this.newPost(blogPost);
		blogCount++;
	},
	newPost: function(model){
		blogPosts.add(model);
	}
});



