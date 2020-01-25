function findHighestProfit(Array) {
    var buy = -1
    var sell = -1
    var profit = -1
    var checksell = true

    for(var i=0; i<Array.length; i++) {

        if(buy === -1) {
            buy = Array[i]
            // console.log(buy)
        }
        // console.log('')


        if(buy > Array[i]) {
            buy = Array[i]
            checksell = true
        }

        if(checksell || sell < Array[i+1]) {
            sell = Array[i+1]

            if(profit < (sell-buy)) {
                profit = sell - buy
                checksell = false
                // console.log(profit)
            }
        }
    }
    
    if(profit == -1) {
        return 'Tidak bisa mendapatkan profit pada hari-hari ini'
    } else {
        return profit
    }
}

console.log(findHighestProfit([10, 2, 11, 20, 3, 5])) //18
console.log(findHighestProfit([33, 29, 11, 3])) //Tidak bisa mendapatkan profit pada hari-hari ini