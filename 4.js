function findDuplicates(String) {

    var arr = []
    for(var i=0; i<String.length; i++) {
        var check = false 
        for(var j=0; j<arr.length; j++) {
            if(String[i] == arr[j][0] && String[i] !== ' ') {
                arr[j][1] += 1
                check = true
            }
        }
        if(check == false) {
            arr.push([String[i], 1])
        }
    }

    var obj = {}
    for(var i=0; i<arr.length; i++) {
        // obj[arr[i][0]] = arr[i][1]

        if(arr[i][1] > 1) {
            obj[arr[i][0]] = arr[i][1] 
        }

    }

    var count = Object.keys(obj).length;

    if(count == 0) {
        return 'Tidak ada karakter yang berulang!'
    } else {
        return obj
    }
}

console.log(findDuplicates("hari apa saja saya bisa!")) // a: 8, i: 2, s: 3
console.log(findDuplicates("cepat kerjakan!!!")) // e: 2, a: 3, k: 2, !: 3
console.log(findDuplicates("adobe")) //Tidak ada karakter yang berulang!
