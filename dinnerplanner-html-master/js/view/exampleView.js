//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	model.addObserver(this);
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
	
}
 
