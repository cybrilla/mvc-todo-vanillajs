function ItemListView() {

	this.el = "ul";
	this.$el = $("<" + this.el + "/>");

}

ItemListView.prototype.render = function() {

	$("body").append(this.$el);

}

ItemListView.prototype.triggerAdd = function(itemView) {
	var that = this;
	
	itemView.render(function() {
		that.$el.append(itemView.$el);
		that.render();	
	});
}