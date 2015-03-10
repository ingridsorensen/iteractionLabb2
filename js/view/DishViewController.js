//ExampleViewController Object constructor
var DishViewController = function(view, model) {

 	view.confirmDish.click(function(){
 		$("#dishView").css("display", "none");
 		$("#header").css("display", "block");
 		$("#exampleView").css("display", "block");
 		//window.location.href = "screenAfter.html";
 	});

 	view.goBack.click(function(){
 		$("#dishView").css("display", "none");
 		$("#header").css("display", "block");
 		$("#exampleView").css("display", "block");
 		//window.location.href = "selectDish.html";
 	});

}