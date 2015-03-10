
var PreparationView = function (container, model) {

	this.editButton = container.find("#edit");
	this.numberOfGuests = container.find("#numberOfGuests");

	model.addObserver(this);

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(){
		this.numberOfGuests.html(model.getNumberOfGuests());
	}
}
 
