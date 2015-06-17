var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		email: null,
		password: null,
		createdAt: null
	}
});
