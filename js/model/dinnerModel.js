//DinnerModel Object constructor
var DinnerModel = function() {

	var numberOfGuests = 0;

	var menu = [];

	var obs = [];

	this.addObserver = function(observer) {
		obs.push(observer);	
	}
	this.removeObserver = function() {
		obs.splice(0, 1);	
	}

	this.notifyObservers = function(obj) {
		var i;
		for	(i = 0; i < obs.length; i++) {	
			obs[i].update(obj);
		}
	}

	this.setNumberOfGuests = function(num) {
		numberOfGuests = num;
		this.notifyObservers("UPD");
		return numberOfGuests;
	}

	// should return 
	this.getNumberOfGuests = function() {
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	//select dish
	this.getSelectedDish = function(type) {
		var selected = 0;
		for (var i = menu.length - 1; i >= 0; i--) {
			if (dishes[menu[i]]["type"] === type) {
				selected = menu[i];
			}
		}
		return selected;
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredient = [];

		for (var i = menu.length - 1; i >= 0; i--) { 
			if (dishes[menu[i]]["type"] === type) {
			ingredient.push(menu[i]);	
			}
		}
		return ingredient;
	}


    //  JOBBA VIDARE MED!!!
	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var menuPrice = document.getElementById('totalDinnerPrice').value;
		var totalMenuPrice = menuPrice * numberOfGuests;
		return totalMenuPrice;
		//TODO Lab 2
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	//lasagne - confirm dish
	this.addDishToMenu = function(id) {

		var dish = this.getDish(id);
		var dishType = dish["type"];
		var previousDish = getSelectedDish(dishType);
		var index = menu.indexOf(previousDish);

		if (previousDish && index !== -1) {
			menu[index] = dish;
		}

		menu.push[dish];
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var dish = getDish(id);
		menu.splice(menu.indexOf(dish),1);
		this.notifyObservers();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].id === id) {
				return dishes[key];
			}
		}
	}


	this.fullMenu = function () {
		var html = '';
		var count = 0;
		var dishesEachRow = 4;
		var amountOfRows = Math.round(dishes.length/dishesEachRow);
		for (var i = 0; i < amountOfRows; i++) {
			count=+(dishesEachRow*i);
			html = html + '<div class="row">'
						+ this.fixRow(count, dishesEachRow)
						+ '</div>';
			count++;
		}
		return html;
	}

	this.fixRow = function (count, dishesEachRow) {
		var html = '';
		for (var j = 0; j < dishesEachRow; j++) {
			var description = this.compressDescription(dishes[count]["description"]);
			html = html +	'<div class="col-xs-3">'
						+		'<div class="thumbnail" style="height: 270px">'
						+			'<img style="height: 120px; width: 160px" src="images/' + dishes[count]["image"] + '" alt="images/image-not-found.gif">'
						+			'<div class="caption">'
						+				'<h4>' + dishes[count]["name"] + '</h4>'
						+				'<p>'+ description +'</p>'
						+			'</div>'
						+		'</div>'							
						+	'</div>';	
			count++;
		}
		return html;
	}

	//check if the description text is to long, in that case reduce it, 
	// otherwise return the unchanged decription. 
	this.compressDescription = function (text) {
		if (text.length >= 30) {
			text = text.substring(0, 31) + '...';
		}
		return text;
	}
	
	this.itemSelect = function(id){
		alert(id);
	}
	
	//hämtar ID för en rätt
	this.getID = function(id){
		this.notifyObserver("ID" + id);
	}
	//hämtar namnet på en rätt
	this.getTitle = function(id) {
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		this.notifyObservers("T" + dish["name"]);
	}
	//hämtar bilden till en rätt
	this.getImage = function(id) {
		var dishImage;
		for(key in dishes){
			if(dishes[key].id == id){
				dishImage = dishes[key];
			}
		}
		this.notifyObserver("IM" + 'image/' + dishImage["image"]);
	}
	
	//hämtar info till en rätt
	this.getDetails = function(id) {
		var dish;
		for(key in dishes){
			if(dishes[key].id == id) {
				dish = dishes[key];
			}
		}
		this.notifyObservers("D" + dish["description"]);
	}
	
	//hämtar priset för en rätt
	this.getPrice = function(id) {
		var i, price = 0, dish = this.getDish(id);
		var ingredients = dish["ingredients"];
		for(i = 0; i < ingredients.length; i++) {
			price = price + ingredients[i]["price"];
		}
		this.notifyObservers("P" + price);
	}

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':203,
		'name':'Vanilla Ice cream woop',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':204,
		'name':'Strawberry mums',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

}