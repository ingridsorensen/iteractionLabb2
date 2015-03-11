//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.printRecipeButton.click(function(){
 	$("#menuView").css("display", "none");
 	$("#preparationView").css("display", "block");
 	});

 	view.editDinnerButton.click(function(){
 	$("#menuView").css("display", "none");
 	$("#header").css("display", "block");
	$("#sidemenuView").css("display", "block");
 	$("#exampleView").css("display", "block"); 		
 	});
	
	
}
