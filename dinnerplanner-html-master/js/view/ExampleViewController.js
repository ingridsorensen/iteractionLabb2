//ExampleViewController Object constructor
var ExampleViewController = function(view, model) {
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});
 	view.goToMainButton.click(function(){
 		window.location.href = "selectDish.html";
 	});
 	view.confirmDinnerButton.click(function(){
 		window.location.href = "dinnerOverview.html";
 	});
 	view.goToMainButton.click(function(){
 		window.location.href = "selectDish.html";
 	});

 	view.fullRecipeButton.click(function(){
 		window.location.href = "preparation.html";
 	});
}