//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.menu = container.find("#menuChoices");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menu.html(model.fullMenu());

	model.addObserver(this);
	
	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}
 
