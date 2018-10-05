import { withReducer } from "recompose";

let FoodData = [
	{
		id: 1,
		category: 'burritos',
		categoryImage: 'https://s3-us-west-1.amazonaws.com/tacostar/burrito.jpg',
		items: [
			{
				id: 'BUR1',
				name: 'Carne Asada',
				description: 'Steak, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'https://s3-us-west-1.amazonaws.com/tacostar/burrito.jpg',
				price: ['6.24'] 
			},
			{
				id: 'BUR2',
				name: 'Colorado',
				description: 'Potatoes, Steak, Cheese and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'BUR3',
				name: 'Mixed',
				description: 'Beef, Beans, Bell Peppers, Tomatoes and Onions',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.79']
			},
			{
				id: 'BUR4',
				name: 'Chimichanga',
				description: 'Deep Fried, Beef, Beans, Cheese, Lettuce, Guacamole, Sour Cream, and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['7.29']
			},
			{
				id: 'BUR5',
				name: 'Supreme',
				description: 'Beans, Rice, Cheese, Sour Cream, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.84']
			},
			{
				id: 'BUR6',
				name: 'Carnitas',
				description: 'Pork, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'BUR7',
				name: 'Chile Relleno',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.74']
			},
			{
				id: 'BUR8',
				name: 'Adovado',
				description: 'Pork, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'BUR9',
				name: 'Grilled Chicken Breast',
				description: 'Sour Cream, Cheese, Lettuce and Tomato',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'BUR10',
				name: 'Lengua',
				description: 'Beef Tongue, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'BUR11',
				name: 'Beef',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.84']
			},
			{
				id: 'BUR12',
				name: 'Beans',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['4.74']
			},
			{
				id: 'BUR13',
				name: 'Fish',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.69']
			},
			{
				id: 'BUR14',
				name: 'Chicken',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['5.69']
			}
		]
	},
	{
		id: 2,
		category: 'tacos',
		items: [
			{
				id: 'TAC1',
				name: 'Grilled Chicken Breast',
				description: 'Cheese, Lettuce, Tomato and Sour Cream',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC2',
				name: 'Carnitas',
				description: 'Pork, Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC3',
				name: 'Adovado',
				description: 'Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC4',
				name: 'Chicken',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC5',
				name: 'Carne Asada',
				description: 'Guacamole and Mexican Salsa',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC6',
				name: 'Lengua',
				description: 'Beef Tongue, Guacamole, Onions and Cilantro',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['6.24']
			},
			{
				id: 'TAC7',
				name: 'Beef',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			},
			{
				id: 'TAC8',
				name: 'Fish',
				description: '',
				imagesm: 'placeholder',
				imagelg: 'placeholder',
				price: ['2.50']
			}
		]
	},
	{
		id: 3,
		category: 'tortas',
		items: [{
			id: 'TOR1',
			name: 'Carne Asada',
			description: 'Guacamole, Lettuce and Tomato',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR2',
			name: 'Carnitas',
			description: 'Pork, Guacamole, Lettuce and Tomato',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR3',
			name: 'Machaca',
			description: 'Beef, Vegetables, Guacamole, Lettuce and Tomato',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.60']
		},
		{
			id: 'TOR4',
			name: 'Beef',
			description: 'Bell Pepper, Onion, Tomato, Guacamole and Lettuce',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR5',
			name: 'Chorizo',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR6',
			name: 'Adovado',
			description: 'Guacamole & Lettuce',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.24']
		},
		{
			id: 'TOR7',
			name: 'Lengua',
			description: 'Beef Tongue, Guacamole and Lettuce',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR8',
			name: 'Ham',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		},
		{
			id: 'TOR9',
			name: 'Chicken',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.70']
		}]
	},
	{
		id: 4,
		category: 'specials',
		items: [{
			id: 'SPE1',
			name: '5 Rolled Tacos with Guacamole',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['5.45']
		},
		{
			id: 'SPE2',
			name: '1 Bean Tostada, 1 Beef Taco, 2 Rolled Tacos & Guacamole',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.00']
		},
		{
			id: 'SPE3',
			name: '3 Rolled Tacos with Rice, Beans & Guacamole',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.60']
		},
		{
			id: 'SPE4',
			name: 'Chimichanga with Rice & Beans',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'SPE5',
			name: 'Carne Asada Burrito with Rice & Beans',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'SPE6',
			name: '12 Rolled Tacos with Guacamole & Cheese',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.75']
		}]
	}, 
	{
		id: 5,
		category: 'combination-plates',
		items: [{
			id: 'COM1',
			name: 'Tostada & Taco',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM2',
			name: '2 Beef Tacos',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM3',
			name: '2 Enchiladas',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM4',
			name: 'Tostada & Enchilada',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM5',
			name: 'Taco & Enchilada',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM6',
			name: 'Burrito & Enchilada',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM7',
			name: '2 Beef Burritos',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['8.70']
		},
		{
			id: 'COM8',
			name: '2 Carne Asada Tacos',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['8.20']
		},
		{
			id: 'COM9',
			name: 'Carne Asada',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.50']
		},
		{
			id: 'COM10',
			name: 'Carnitas',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['8.70']
		},
		{
			id: 'COM11',
			name: '2 Fish Tacos',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		},
		{
			id: 'COM12',
			name: '2 Chile Rellenos',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.95']
		}]
	},
	{
		id: 6,
		category: 'side-orders',
		items: [{
			id: 'SOR1',
			name: 'Carne Asada Chips',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.99']
		},
		{
			id: 'SOR2',
			name: 'Chips and Guac',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.15']
		},
		{
			id: 'SOR3',
			name: 'Quesadilla',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['3.70']
		},
		{
			id: 'SOR4',
			name: 'Ham Quesadilla',
			description: 'Rice, Beans, Cheese and Enchilada Sauce',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.95']
		},
		{
			id: 'SOR5',
			name: 'Supreme Quesadilla',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.75']
		},
		{
			id: 'SOR6',
			name: 'Chicken Quesadilla',
			description: 'Pork, Guacamole and Mexican Salsa',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.95']
		},
		{
			id: 'SOR7',
			name: 'Carne Asada Quesadilla',
			description: 'Deep Fried, Beef, Beans, Cheese, Lettuce, Guacamole, Sour Cream and Mexican Salsa',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['5.90']
		},
		{
			id: 'SOR8',
			name: 'Carne Asada Fries',
			description: 'Pork, Guacamole and Mexican Salsa',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['8.74']
		},
		{
			id: 'SOR9',
			name: 'Super Nachos',
			description: 'Sour Cream, Cheese, Lettuce and Tomato',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['8.74']
		},
		{
			id: 'SOR10',
			name: 'French Fries',
			description: 'Beef Tongue, Guacamole and Mexican Salsa',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.80']
		},
		{
			id: 'SOR11',
			name: '1/2 Pint Rice',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.75']
		},
		{
			id: 'SOR12',
			name: '1/2 Pint Beans',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.75']
		},
		{
			id: 'SOR13',
			name: 'Extra Cheese Guacamole or Sour Cream',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.50']
		},
		{
			id: 'SOR14',
			name: 'Extra Bacon Sausage or Ham',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.00']
		},
		{
			id: 'SOR15',
			name: 'Extra Steak',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.00']
		},
		{
			id: 'SOR16',
			name: 'Cheese Tostadas',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.25']
		},
		{
			id: 'SOR17',
			name: 'Beef Tostadas',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.25']
		},
		{
			id: 'SOR18',
			name: 'Bean Tostadas',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.10']
		},
		{
			id: 'SOR19',
			name: 'Flying Saucer with Beef or Chicken',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['4.95']
		}]
	},
	{
		id: 7,
		category: 'enchiladas',
		items: [{
			id: 'ENC1',
			name: 'Cheese',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['3.95']
		},
		{
			id: 'ENC2',
			name: 'Beef',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['3.95']
		},
		{
			id: 'ENC3',
			name: 'Mixed',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['3.95']
		},
		{
			id: 'ENC4',
			name: 'Chicken',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['3.95']
		}]
	},
	{
		id: 8,
		category: 'rolled-tacos',
		items: [{
			id: 'RTA1',
			name: '3 Plain With Cheese',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.40']
		},
		{
			id: 'RTA2',
			name: '3 Plain With Cheese and Guacamole',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['2.60']
		}]
	},
	{
		id: 9,
		category: 'breakfast-burritos',
		items: [{
			id: 'BBU1',
			name: 'Machaca with Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['5.85']
		},
		{
			id: 'BBU2',
			name: 'Huevos Rancheros',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.75']
		},
		{
			id: 'BBU3',
			name: 'Steak, Chorizo, Cheese, and Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.50']
		},
		{
			id: 'BBU4',
			name: 'Potatoes, Cheese, and Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['5.35']
		},
		{
			id: 'BBU5',
			name: 'Sausage, Cheese, and Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['5.85']
		},
		{
			id: 'BBU6',
			name: 'Scrambled Eggs with Sausage or Ham',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.75']
		},
		{
			id: 'BBU7',
			name: 'Chorizo and Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.25']
		}]
	},
	{
		id: 10,
		category: 'breakfast-plates',
		items: [{
			id: 'BPL1',
			name: 'Huevos Rancheros',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.75']
		},
		{
			id: 'BPL2',
			name: 'Steak Rancheros (No Eggs)',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.25']
		},
		{
			id: 'BPL3',
			name: 'Scrambled Eggs with Ham, Bacon, or Sausage',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['6.75']
		},
		{
			id: 'BPL4',
			name: 'Machaca with Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.25']
		},
		{
			id: 'BPL5',
			name: 'Chorizo with Eggs',
			description: '',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['7.25']
		}]
	},
	{
		id: 11,
		category: 'drinks',
		items: [{
			id: 'DRI1',
			name: 'Pepsi, Diet Pepsi, Sierra Mist',
			description: 'Medium, Large',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.75, $2.00']
		},
		{
			id: 'DRI2',
			name: 'Horchata, Pina, Jamaica',
			description: 'Medium, Large',
			imagesm: 'placeholder',
			imagelg: 'placeholder',
			price: ['1.85, $2.10']
		}]
	}
]

export default FoodData

//go through the list, use reduce see if you can concatenate each time. 


function compileAll(FoodData) {
  var viewAll = [];
  for (var i=0; i< FoodData.length -1; i++) {
    viewAll.push(FoodData[i].items);
  }
  var merged = [].concat.apply([], viewAll);
  return merged
}

let all = {
	items: compileAll(FoodData)
}

FoodData.push(all);

// make all and then push all to foodItems.

//go through each of the food items and take the food items[i] 
//create an items list

//array of objects within an array of objects
//we are trying to filter out the items from the objects within the array
//output items: [objects]
//then map those objects to 
//items: [{}{}{}{}{}{}] 

//var result = foodItems.map(a => a.items);
