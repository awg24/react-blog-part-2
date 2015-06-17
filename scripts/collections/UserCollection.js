var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;
var UserModel = require("../models/UserModel")

module.exports = Backbone.Collection.extend({
	model: UserModel
});
