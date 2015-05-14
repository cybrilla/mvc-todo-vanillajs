function Item() {
	this.attributes = {
		id : null,
		title: '',
		name: ''
	}
}

Item.prototype.setAtrributes = function(key,value) {
	this.attributes[key] = value;
}