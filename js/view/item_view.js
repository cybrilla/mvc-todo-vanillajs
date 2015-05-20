function ItemView() {
	var that = this;

	this.data = {};
	
  
}

ItemView.prototype.setData = function(_data) {
	this.data = _data;
};

ItemView.prototype.render = function(callback) {
	var that = this;
	if(this.$el) {
		that.$el.html(this.data.title);
	}
	else {
		$.get("/templates/items/show.html", function(data, status){
  		that.$el = $(data);
  		callback();
  		that.$el.find('span').html(that.data.title);
  	});	
	}		
}

function remo(event) {
	var currentElement = event.currentTarget;
	currentElement.closest("li").remove();
}