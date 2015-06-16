var React = require("react");

module.exports = React.createClass({
	componentWillMount: function(){
		this.props.comments.on("add", this.addToComments);
	},
	render: function(){
		var modelArray = this.props.comments.where({blogPostId: this.props.blogID});
		var commentToPost = modelArray.map(function(commentModel){
			return (
					<div key={commentModel.cid}>{commentModel.get("text")}</div>
				);
		});
		if(commentToPost.length === 0){
			return (<div>{commentToPost}</div>);
		} else {
			return (<div className="well change-color">{commentToPost}</div>);
		}
	},
	addToComments: function(){
		this.forceUpdate();
	}
});