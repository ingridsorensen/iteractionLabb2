//ExampleViewController Object constructor
var ExampleViewController = function(view, model) {
 
 	view.menuItem.click(function(event){
		var id = event.target.id;
		id = id.substring(10, id.length);
		
		model.getID(id);
		model.getTitle(id);
		model.getImage(id);
		
		("#exampleView").css("display", "none");
 		$("#header").css("display", "block");
		$("#sidemenuView").css("display", "block");
 		$("#dishView").css("display", "block");
 	});
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