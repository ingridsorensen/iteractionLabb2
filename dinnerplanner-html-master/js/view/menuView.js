
var MenuView = function (container, model) {


	this.selectDish_menuSpot = container.find("#menuChoices");
	this.typeofdish = container.find("#Starter");

	
	this.selectDish_menuSpot.html(model.selectDish_menu());


	model.addObserver(this);

	
	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.selectDish_menuSpot.html(model.getAllDishes());
	}
}
 
