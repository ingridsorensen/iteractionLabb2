
var firstpageView = function (container, model) {

	this.newDinner = container.find("#newDinner");


	model.addObserver(this);
	
	this.update = function(obj){
 		document.getElementById('newDinner');
	}
}
 
