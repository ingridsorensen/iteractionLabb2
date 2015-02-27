$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var exampleViewController = new ExampleViewController(exampleView, model);

	var firstpageView = new FirstpageView($("#firstpageView"), model);
	var firstpageViewController = new FirstpageViewController(firstpageView, model);

	var selectdishView = new SelectdishView($("#selectdishView"), model);
	var selectdishViewController = new SelectdishViewController(selectdishView, model);

	var sidemenuView = new SidemenuView($("#sidemenuView"), model);
	var sidemenuViewController = new SidemenuViewController(sidemenuView, model);

	var dishView = new DishView($("#dishView"), model);
	var dishViewController = new DishViewController(dishView, model);

	var menuView = new MenuView($("#menuView"), model);
	var menuViewController = new MenuViewController(menuView, model);

	var preparationView = new PreparationView($("#preparationView"), model);
	var preparationViewController = new PreparationViewController(preparationView, model);
});