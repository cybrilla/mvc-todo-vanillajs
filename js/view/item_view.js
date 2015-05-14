function ItemView() {
	this.el = 'h2';
	this.data = {};
	this.$el = $("<"+this.el+"/>", {
		class: 'header'
	});
}

ItemView.prototype.setData = function(_data) {
	this.data = _data;
};

ItemView.prototype.render = function() {
	this.$el.html(this.data.title);
	$("body").html(this.$el);
}