
var SelectdishView = function (container, model) {

	this.menu = container.find("#menuChoices");
	this.menu.html(model.fullMenu());


	model.addObserver(this);

	
	this.update = function(){

	}
}
 
