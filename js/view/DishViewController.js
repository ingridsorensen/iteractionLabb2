//ExampleViewController Object constructor
var DishViewController = function(view, model) {
	view.confirmDishButton.click(function){
		console.log(parseInt(view.currentDish));
		model.addDishToMenu(parseInt(view.currentDish));
 	});

 	view.goBack.click(function(){
 		$("#dishView").css("display", "none");
 		$("#header").css("display", "block");
		$("#sidemenuView").css("display", "block");
 		$("#exampleView").css("display", "block");
 		//window.location.href = "selectDish.html";
 	});

}