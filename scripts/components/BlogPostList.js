var React = require("react");
var BlogPostModel = require("../models/BlogPostModel");
var CommentForm = require("./CommentForm");
var CommentCollection = require("../collections/CommentCollection");
var commentCollection = new CommentCollection();
var CommentList = require("./CommentList");
var BlogPostCollection = require("../collections/BlogPostCollection");
var blogPostCollection = new BlogPostCollection();

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.posts.on("add", this.postsAdded);
	},
	render: function(){
		var that = this;
		var blogPost = this.props.posts.map(function(postModel){
			return <div className="container well stretch text-center" id={postModel.get("id")} key={postModel.cid}>
						<h3>{postModel.get("title")}</h3>
						<p>{postModel.get("body")}</p>
						<CommentForm blogID={postModel.get("id")} postComment={that.postComment}/>
						<CommentList blogID={postModel.get("id")} comments={commentCollection}/>
				  </div>
		});
		return (
			<div>{blogPost}</div>
			);
	},
	postsAdded: function(){
		this.forceUpdate();
	},
	postComment: function(model){
		console.log(model)
		commentCollection.add(model);
	}
});