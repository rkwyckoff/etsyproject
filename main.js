//write a function that loops through all var "items"
//it pulls in all the "price" values and divides by items.length

var avg = 0;


function getAvg() {
  var total = 0;
    for (var count = 0; count < items.length; count++) {
    var data = items[count].price;
    total += data;
  }
     avg = (total / items.length);
     avg = avg.toFixed(2);
     console.log(avg);

  }
getAvg();
var jsAnswer = document.getElementById("answer1");
jsAnswer.innerHTML = "The average price is $" + avg;
//console.log(jsAnswer.innerHTML)
//now take this answer and get it to inner html answer 1
//var numb = 123.23454;
//numb = numb.toFixed(2);
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//Problem 2
//write for loop


var list = [];
var jsAnswer = document.getElementById("answer2");

function priceInRange() {
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



//console.log(jsAnswer.innerHTML)
//now take this answer and get it to inner html answer 1
