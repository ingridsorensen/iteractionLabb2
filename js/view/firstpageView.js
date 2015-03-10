
var FirstpageView = function (container, model) {

	this.newDinner = container.find("#newDinner");

	model.addObserver(this);
	
	this.update = function(obj){
	}

}
 
