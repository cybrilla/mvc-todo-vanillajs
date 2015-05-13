describe("Item", function() {

	var item;

	beforeEach(function() {
		item = new Item();
	});

	it("should be have `id` as an attribute", function() {
		expect(item.id === null).toBe(true);
	});

	it("should be have `title` as an attribute", function() {
		expect(item.title === '').toBe(true);
	});

	it("should be have `name` as an attribute", function() {
		expect(item.name === 'todo-list').toBe(true);
	});

});