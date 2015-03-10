//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.printRecipeButton.click(function(){
 	$("#menuView").css("display", "none");
 	$("#preparationView").css("display", "block");
// 	window.location.href = "dinnerPreparation.html";
 	});

 	view.editDinnerButton.click(function(){
 	$("#menuView").css("display", "none");
 	$("#header").css("display", "block");
 	$("#exampleView").css("display", "block"); 		
// 	window.location.href = "selectDish.html";
 	});
}
