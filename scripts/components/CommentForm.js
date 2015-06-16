var React = require("react");
var CommentModel = require("../models/CommentModel");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<form onSubmit={this.addComment}>
					<input ref="commentInput" type="type"/>
					<button>Add Comment</button>
				</form>
			</div>
			);
	},
	addComment: function(event){
		event.preventDefault();
		var comment = new CommentModel({
			text: this.refs.commentInput.getDOMNode().value,
			userOwner: 1,
			blogPostId: this.props.blogID,
		});
		this.props.postComment(comment);
	}
});