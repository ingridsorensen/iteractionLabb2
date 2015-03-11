//ExampleViewController Object constructor
var PreparationViewController = function(view, model) {

 	view.editButton.click(function(){
 		$("#preparationView").css("display", "none");
 		$("#header").css("display", "block");
		$("#sidemenuView").css("display", "block");
 		$("#exampleView").css("display", "block");	
 	});

}