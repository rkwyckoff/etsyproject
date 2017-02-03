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

//Problem 2
//find all items that have currency code : USD
//write for loop
//then fetch the prices of these items
 //grab all prices that have a price between $14 and $18
//write for loop





var avg = 0;


function getPrice() {
  var total = 0;
    for (var count = 0; count < items.length; count++) {
    var data = items[count].currency_code;
    total += data;
  }
     avg = (total / items.length);
     avg = avg.toFixed(2)
    //console.log(avg);

  }
getPrice();
var jsAnswer = document.getElementById("answer1");
jsAnswer.innerHTML = "The average price is $" + avg;
//console.log(jsAnswer.innerHTML)
//now take this answer and get it to inner html answer 1
var numb = 123.23454;
numb = numb.toFixed(2);
