//ExampleViewController Object constructor
var DishViewController = function(view, model) {

 	view.confirmDish.click(function(){
 		window.location.href = "selectDish.html";
 	});

 	 view.goBack.click(function(){
 		window.location.href = "selectDish.html";
 	});

}