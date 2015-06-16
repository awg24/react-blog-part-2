var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		title: null,
		body: null,
		category: null,
		postOwner: null,
		tagId: null
	}
});
