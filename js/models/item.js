function Item() {
	this.attributes = {
		id : null,
		title: '',
		name: ''
	}
}

Item.prototype.setAttributes = function(key,value) {
	this.attributes[key] = value;
}