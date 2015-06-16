var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var CommentModel = require("../models/CommentModel")

module.exports = Backbone.Collection.extend({
	model: CommentModel
});
