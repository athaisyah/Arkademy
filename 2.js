function usernameValidity(str) {

    var check  = true
    if(!str[0].match(/[a-z]/)) {
        check = false
    } else {
        if(str.match(/[A-Z]/)) {
            check = false
        }

        if(str.match(/[^0-9._]/)) {
            check = false
        }

        if(str.length<8 && str.length > 12) { 
            check = false
        } 

        check = true
    }

    return check
}

console.log(usernameValidity("john.smith")) //true
console.log(usernameValidity("johnsmith26")) //true
console.log(usernameValidity("JOHNSmith")) //false


function passwordValidity(str){

    var char = /(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
    var check = false
    if(str.length < 9 || str.length > 9) {
        check = false
    } else {
        if(!str.match(char)) {
            check = false
        }

        check = true
    }

    return check
}

console.log(passwordValidity("j0hn5m!th")) //true
