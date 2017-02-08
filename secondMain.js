/Hard-Mode:

//Write an additional function for each answer that uses whatever higher order functions you need.

//use these:
//forEach
//map
//filter
//reduce


//Problem 1: Show me how to calculate the average price of all items.

// write a hof forEach function that loops through all var "items"
// it pulls in all the "price" values, adds them
// together  and divides by items.length

//var avg = 0;
  function getAvg() {
  //targeting element in html to push output
  var jsAnswer = document.getElementById("answer1");
//outside loop declare total and avg
  var total = 0;
  var avg = 0;

  //run forEach to grab all prices and update total each iteration
    items.forEach(function getAvg(price, i) {
      total += items[i].price;
    })
    //outside forEach function, divide new total by total array length and reduce to 2 decimals
    avg = (total / items.length);
    avg = avg.toFixed(2);

    //update innerHTML with new total
   jsAnswer.innerHTML = "The average price is $" + avg;
  }
//getAvg();
*/
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//Problem 2
//Show me how to get an array of items that cost between $14.00 and $18.00 USD

//get items with usd code , then loop and grab prices ,
//, then if prices are between $14 and $18 , print list of items

//function priceInRange() {

//  var jsAnswer = document.getElementById("answer2");

    //sample function
//   function isBigEnough(value) {
//  return value >= 10;
//}

//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

//example in MDN
//function isBigEnough(value) {
//  return value >= 10;
//}
//var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

//my code:
//items.filter(getArray).forEach(getTitle)
//var answer = items.filter(getArray)


//var box2 = document.getElementById("answer2")

function getArray (x) {
  return x.currency_code = "USD" && x.price > 14.00 && x.price < 18.00
}
function getTitle (x) {
   box2.innerHTML += x.title
}

var box2 = document.getElementById("answer2");
items.filter(getArray).forEach(getTitle);



//getTitle(items[0])



//var elem = document.createElement('p');
//       // select where you will append the new 'p' element
//       var parent = document.getElementById('answer2');
//       // putting 'title' as the text for 'p' element
//       elem.innerHTML = items[i].title;
//       // append the newly created AND updated 'p' element to the parent
//       jsAnswer.appendChild(elem);



// function getArray(x) {
//   console.log(x);
// }

// var filterList = items.filter(getArray);
//
//       function getArray(x) {
//       console.log(x)
//
//
//     function isBigEnough(value) {
//   return value >= 10;
// }
//     if (currencyCode === 'USD' &&
//         price >= 14.00 &&
//         price <= 18.00) {
//       // create new element 'p' [block, 100% width]
//       var elem = document.createElement('p');
//       // select where you will append the new 'p' element
//       var parent = document.getElementById('answer2');
//       // putting 'title' as the text for 'p' element
//       elem.innerHTML = items[i].title;
//       // append the newly created AND updated 'p' element to the parent
//       jsAnswer.appendChild(elem);
//     }
//   }
// }
// priceInRange();
