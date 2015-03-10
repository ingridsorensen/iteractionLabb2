//ExampleViewController Object constructor
var FirstpageViewController = function(view, model) {
 	view.newDinner.click(function(){
 	$("#firstpageView").css("display", "none");
 	$("#header").css("display", "block");
	$("#sidemenuView").css("display", "block");
 	$("#exampleView").css("display", "block");
 	});
}

