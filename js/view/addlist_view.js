function AddListView() {
	this.el = 'input';
	this.data = {};
	this.$el = $("<"+this.el+"/>", {
		class: 'add-list',
		type: 'text',
		placeholder: 'Add the list',
	});

	this.$el.on('keyup', function(event){
		if(event.keyCode == 13) {
			var item = new Item,
					itemView = new ItemView;


			item.setAttributes('title', this.value);
			itemView.setData(item.attributes);
			window.itemListView.triggerAdd(itemView,this);
		}
	});
}

AddListView.prototype.render = function() {
	$("body").append(this.$el);
}