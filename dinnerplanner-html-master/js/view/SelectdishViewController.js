//ExampleViewController Object constructor
var SelectDishViewController = function(view, model) {
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

 	view.typeofdish.click(function(){
 		model.getAllDishes(starter, filter));
 	});

 	//view.goToMainButton.click(function(){
 	//	window.location.href = "selectDish.html";
 	//});
 	//view.confirmDinnerButton.click(function(){
 	//	window.location.href = "dinnerOverview.html";
 	//});
 	//view.goToMainButton.click(function(){
 	//	window.location.href = "selectDish.html";
 	//});

 	//view.fullRecipeButton.click(function(){
 	//	window.location.href = "dinnerPreparation.html";
 	//});
}