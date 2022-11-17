var totalPrice = 0;
for (var main_index = 0; main_index < finances.length;
  main_index++) {
  for (var nested_index = 0;
    nested_index < finances[main_index].length;
    nested_index++) {
    // console.log(finances[main_index][nested_index]);
    // console.log(finances[nested_index][1])
  }

  var total = totalPrice += (finances[main_index][1])
  var average = (total / finances.length - 1).toFixed(2)
}

// total months
console.log('total months:' + main_index)
// total amount
console.log('total amount:' + total)
// average
console.log('average:' + average)

var profits = 0
var highestMonth = ''
var lowestMonth = ''


for (let i = 0; i < finances.length; i++) {

  if (finances[i+1]) {
    
    var monthlyProfits = finances[i+1][1] - finances[i][1]
    if (profits < monthlyProfits) {
      highestMonth = finances[i+1][0]
      profits = monthlyProfits
    }
   

  }
}

console.log('highest profit increase;' + profits)
console.log(highestMonth)




for (let i = 0; i < finances.length; i++) {

  if (finances[i+1]) {
    
    var monthlyProfits = finances[i+1][1] - finances[i][1]
    if (monthlyProfits < profits) {
      lowestMonth = finances[i+1][0]
      profits = monthlyProfits
    }
   

  }
}

console.log('lowest profit increase;' + profits)
console.log(lowestMonth)






























