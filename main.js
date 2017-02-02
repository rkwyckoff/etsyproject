//write a function that loops through all var "items"
//it pulls in all the "price" values and divides by items.length

function getPrice(items) {
  var total = 0;
  for (count = 0; count < items.length; count++) {
    var data = items[count].price;
    total += data;
  }
    console.log(total / items.length)
  }
