var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var BlogPostModel = require("../models/BlogPostModel")

module.exports = Backbone.Collection.extend({
	model: BlogPostModel
});
