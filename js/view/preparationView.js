
var PreparationView = function (container, model) {

	this.editButton = container.find("#edit");
	this.numberOfGuests = container.find("#numberOfGuests");

	this.numberOfGuests.html(model.getNumberOfGuests());

	model.addObserver(this);
	
	this.update = function(obj){
		if(obj == "UPD"){
 		this.numberOfGuests.html(model.getNumberOfGuests());
		}
	}


}
 
