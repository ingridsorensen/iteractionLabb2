
var DishView = function (container, model) {

	this.confirmDish = container.find("#confirmDish");
	this.goBack = container.find("#goBack");

	model.addObserver(this);

	
	this.update = function(){

	}
}
 
