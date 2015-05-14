$(function() {

	var view = new ItemView(),
	model = new Item;
	model.setAtrributes('title','TODO-LIST')
	view.setData(model.attributes);
	view.render();
	
});