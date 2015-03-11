
var DishView = function (container, model) {

	this.confirmDish = container.find("#confirmDish");
	this.goBack = container.find("#goBack");
	
	this.currentDish = 0
	this.dishTitle = container.find("#dishTitle");
	this.dishImage = container.find("#dishImage");

	model.addObserver(this);

	
	this.update = function(){
		if(obj.substring(0, 3) == "IM"){
			this.getImage.attr("src", obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "T"){
			this.getTitle.html(obj.substring(3, obj.length));
		}
		else if(obj.substring(0, 3) == "ID"){
			this.currentDish = parseInt(obj.substring(3, obj.length));
		}
			
	}
}
 
