
var MenuView = function (container, model) {


	this.printRecipeButton = container.find("#printRecipe");
	this.editDinnerButton = container.find("#editDinner");


	model.addObserver(this);

}
 
