$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	//var selectdishView = new SelectdishView($("#selectdishView"), model);
	var exampleViewController = new ExampleViewController(exampleView, model);

//	var selectdishViewController = new SelectdishViewController(selectdishView, model);
//	var firstpageView = new FirstpageView($("#firstpageView"), model);
//	var firstpageViewController = new FirstpageViewController(firstpageView, model);

});