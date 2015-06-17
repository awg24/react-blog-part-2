var React = require("react");
var _ = require("backbone/node_modules/underscore")
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
	getInitialState: function(){
		return ({
			number: 7
		});
	},
	render: function(){
		var that = this;
		var sortedModels = this.props.posts.sortBy(function(model){
			return -1*model.get("createdAt").getTime();
		});
		var topNModels = _.first(sortedModels, this.state.number);

		var blogPost = topNModels.map(function(postModel){

			return <div className="container well stretch text-center" id={postModel.get("id")} key={postModel.cid}>
						<h3>{postModel.get("title")}</h3>
						<p>{postModel.get("body")}</p>
						<CommentForm blogID={postModel.get("id")} postComment={that.postComment}/>
						<CommentList blogID={postModel.get("id")} comments={commentCollection}/>
				  </div>
		});
		var limiter = this.props.setLimit.map(function(limit){
			return (<option key={limit}>{limit}</option>);
		});

		return (
			<div>
				<select ref="limitTo" onChange={this.updateBlogList}>
					{limiter}
				</select> Choose most recent amount of posts
				{blogPost}
			</div>
			);
	},
	postsAdded: function(){
		this.forceUpdate();
	},
	postComment: function(model){
		console.log(model)
		commentCollection.add(model);
	},
	updateBlogList: function(){
		this.setState({
			number: this.refs.limitTo.getDOMNode().value
		});
	}
});