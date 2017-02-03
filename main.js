
////Problem 1
//////

// write a function that loops through all var "items"
// it pulls in all the "price" values, adds them
// together  and divides by items.length

//var avg = 0;


function getAvg() {
  var jsAnswer = document.getElementById("answer1");
  var total = 0;
  var avg = 0;
    for (var count = 0; count < items.length; count++) {
    var data = items[count].price;
    total += data;
  }
     avg = (total / items.length);
     avg = avg.toFixed(2);
     jsAnswer.innerHTML = "The average price is $" + avg;
  }

getAvg();
// var jsAnswer = document.getElementById("answer1");
// jsAnswer.innerHTML = "The average price is $" + avg;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//Problem 2
//get items with usd code , then loop for prices,
//, then if prices are between $14 and $18 , print list of items




function priceInRange() {
  var list = [];
  var jsAnswer = document.getElementById("answer2");

  // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the currency code from each item
    var currencyCode = items[i].currency_code;
    // grab the price of each item
    var price = items[i].price;
    // find all items that have currency code : USD
    // && all prices between $14 and $18
    if (currencyCode === 'USD' &&
        price >= 14.00 &&
        price <= 18.00) {
      list.push(items[i].title);
    }
  }
  // Step 2: Pushing the updated list to HTML
  jsAnswer.innerHTML = list;
}
priceInRange();
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//Problem 3
//get items with ubp code , then loop for prices,
//, then print list with title and price



function price() {
  var listGBP = [];
  var jsAnswer = document.getElementById("answer3");
  // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the currency code from each item
    var currencyCode = items[i].currency_code;
    // grab the price of each item
    var price = items[i].price;
    // find all items that have currency code : GBP
  //  if currencyCode is gbp, print list with title and price
    if (currencyCode === 'GBP') {
      listGBP.push(items[i].title, items[i].price) ;
    }
  }
  // Step 2: Pushing the updated list to HTML
  jsAnswer.innerHTML = listGBP ;
}
price();

// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//
// Problem 4
//
// //Which items are made with wood ?
//

function gotWood() {
  var listWood = [];
  var jsAnswer = document.getElementById("answer4");
    // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the "materials' code from each item
    var currencyCode = items[i].materials;
    // grab the price of each item
    //  if materials contains "wood", print list with titles
    if (items[i].materials.includes("wood")) {
      listWood.push(items[i].title);

    }
  }
  jsAnswer.innerHTML = listWood + " is made of wood."
  // Step 2: Pushing the updated list to HTML
  //jsAnswer.innerHTML = listWood + " is made of wood.";
}
gotWood();

// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//
// Problem 5
//
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

//

function gotEight() {
  var listMaterials = [];
  var jsAnswer = document.getElementById("answer5");
    // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the "materials' code from each item
    var materials = items[i].materials;
    // grab the price of each item
    //  if materials <= 8 or fewer, print list with titles, length of materials, and list of materials
    if (items[i].materials.length <= 8 ) {
      listMaterials.push(items[i].title, items[i].length, items[i].materials);
    }
  }
  jsAnswer.innerHTML = listMaterials
  // Step 2: Pushing the updated list to HTML

}
gotEight();

// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Problem 6

//How many items were made by their sellers?

function madeBySeller() {
  var sellerList = [];
  var jsAnswer = document.getElementById("answer6");
    // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the "materials' code from each item
    var materials = items[i].who_made;
    // grab the items with "who_made"
    //  if whomade != someone_else  print list with titles, length of materials, and list of materials
    if (items[i].who_made !== "someone_else") {
      sellerList.push(items[i].who_made + " were made by their sellers");
    }
  }
  jsAnswer.innerHTML = sellerList
  // Step 2: Pushing the updated list to HTML

}
madeBySeller();
