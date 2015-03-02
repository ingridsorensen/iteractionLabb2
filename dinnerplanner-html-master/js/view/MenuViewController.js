//ExampleViewController Object constructor
var MenuViewController = function(view, model) {
 	view.printRecipeButton.click(function(){
 		window.location.href = "dinnerPreparation.html";
 	});

 	view.editDinnerButton.click(function(){
 		window.location.href = "selectDish.html";
 	});
}
