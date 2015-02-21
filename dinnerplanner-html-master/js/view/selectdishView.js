
var ExampleView = function (container, model) {


	this.selectDish_menuSpot = container.find("#menuChoices");
	
	this.selectDish_menuSpot.html(model.selectDish_menu());


	model.addObserver(this);


	
	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}
 
