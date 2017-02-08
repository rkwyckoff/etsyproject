

//Problem 1: Show me how to calculate the average price of all items.

// write a function that loops through all var "items"
// it pulls in all the "price" values, adds them
// together  and divides by items.length
//var avg = 0;

function getAvg() {
  //targeting element in html to push output
  var jsAnswer = document.getElementById("answer1");
//outside loop declare total and avg
  var total = 0;
  var avg = 0;
  //run for loop to grab all prices and store in var data
  //then at end of loop add each price to new total
    for (var count = 0; count < items.length; count++) {
    var data = items[count].price;
    total += data;
  }
  //since we've defined avg we can output new average based on new total and total number of ityems
  //make number in only 2 decinmals
  //then fill innerHTML with avg
     avg = (total / items.length);
     avg = avg.toFixed(2);
     jsAnswer.innerHTML = "The average price is $" + avg;
  }
getAvg();

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//Problem 2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD

//get items with usd code , then loop and grab prices ,
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
      // create new element 'p' [block, 100% width]
      var elem = document.createElement('p');
      // select where you will append the new 'p' element
      var parent = document.getElementById("answer2");
      // putting 'title' as the text for 'p' element
      elem.innerHTML = items[i].title;
      // append the newly created AND updated 'p' element to the parent
      jsAnswer.appendChild(elem);
    }
  }
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
      listGBP.push(items[i].title + " &pound" + items[i].price) ;
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
      //// create new element 'p' [block, 100% width]
      var elem = document.createElement('p');
      // select where you will append the new 'p' element
      var parent = document.getElementById("answer4");
      // putting 'title' as the text for 'p' element
      elem.innerHTML = items[i].title + " is made of wood.";
      // append the newly created AND updated 'p' element to the parent
      jsAnswer.appendChild(elem);
    }
  }
}
gotWood();

// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//
// Problem 5
//
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

//

function gotEight () {
  var jsAnswer = document.getElementById("answer5");
  for (var i = 0; i < items.length; i++) {
    var materials = items[i].materials;
      if (materials.length >= 8 ) {
      jsAnswer.innerHTML += "<p>" + items[i].title + " is made of " + materials.length + " materials: </p>"
      for (var j = 0; j < materials.length; j++) {
        var currentMaterial = materials[j];
        jsAnswer.innerHTML += "<p>" + currentMaterial + ".</p>"
      }
    }
  }
}

gotEight();

//function gotEight() {
  // var listMaterials = [];
  // var jsAnswer = document.getElementById("answer5");
  //   // Step 1: For loop goes through list of items
  // for (var i = 0; i < items.length; i++) {
  //   // grab the "materials' code from each item
  //   var materials = items[i].materials;
  //       //  if materials <= 8 or fewer, print list with titles, length of materials, and list of materials
  //   if (items[i].materials.length >= 8 ) {
  //     /// create new element 'p' [block, 100% width]
  //     var elem = document.createElement('p');
  //     // select where you will append the new 'p' element
  //     var elem2 = document.createElement('p.ul.li');
  //     //  put materials in a list
  //     var parent = document.getElementById("answer5");
  //     //var parent2 = document.getElementById("answer5");
  //     // putting 'title' as the text for 'p' element
  //     elem.innerHTML = items[i].title + " is made of " + items[i].materials.length + " materials: "
  //     elem2.innerHTML = items[i].materials + ".";
  //     // append the newly created AND updated 'p' element to the parent
  //     jsAnswer.appendChild(elem)
  //     jsAnswer.appendChild(elem2);
  //     //listMaterials.push(items[i].title +
  //   }
  // }
  //
  //
  //
  //
  //
  //
  //
  //
  //

// //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Problem 6

//How many items were made by their sellers?

function madeBySeller() {
  var sellerNum = 0;
  var jsAnswer = document.getElementById("answer6");
    // Step 1: For loop goes through list of items
  for (var i = 0; i < items.length; i++) {
    // grab the "materials' code from each item
    var materials = items[i].who_made;
    // grab the items with "who_made"
    //  if whomade != someone_else  print list with titles, length of materials, and list of materials
    if (items[i].who_made == "i_did") {
      sellerNum++;
    }
  }
  jsAnswer.innerHTML = sellerNum + " were made by their sellers.";
  // Step 2: Pushing the updated list to HTML

}
madeBySeller();
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
