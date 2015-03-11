//ExampleViewController Object constructor
var SidemenuViewController = function(view, model) {
	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});
	
	view.confirmDinner.click(function(){
 	
	$("#sidemenuView").css("display", "none");
	$("#exampleView").css("display", "none");
 	//$("#header").css("display", "block");
 	$("#menuView").css("display", "block");
 	});
}