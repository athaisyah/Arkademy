function count_handshake(Number) {

    var count = 0
    while(Number !== 1) {
        count += Number-1
        Number--
    }
    return count
}

console.log(count_handshake(3)) //3
console.log(count_handshake(4)) //10
console.log(count_handshake(6)) //15
