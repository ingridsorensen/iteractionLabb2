
var SidemenuView = function (container, model) {
	
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
		
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.confirmDinner = container.find("#confirmDinner");
	


	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
		model.addObserver(this);

}
 
