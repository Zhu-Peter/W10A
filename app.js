// This function will take 2 arguments expected to be integers. 
// The function will add the two arguments together and then multiple the result by five. 
// The function will finally return this newly computed value.
function addTimesFive(value1, value2){
    let result = (value1 + value2)*5;
    return result;
}

// This function will take in 1 argument expected to be a string. 
// The function will return true if the string length is > 10 characters and false otherwise.
function checkLength(input){
    if (input.length > 10){
        return true;
    }else{
        return false;
    }
}

// testing
console.log(addTimesFive(2,3));
console.log(addTimesFive(5,1));
console.log(addTimesFive(1,9));


console.log(checkLength("aaaaaaaaa"));
console.log(checkLength("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
console.log(checkLength("0123456789"));