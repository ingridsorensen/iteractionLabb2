//ExampleView Object constructor
var ExampleView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	this.menu = container.find("#menuChoices");
	this.menu.html(model.fullMenu());
	
	this.menuItem = container.find(".menuItem");
		
	this.update = function(){
	}
	
	model.addObserver(this);

}
 
