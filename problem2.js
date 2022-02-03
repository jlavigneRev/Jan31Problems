function multiplyBy11(numString){
    var result = "";
    var carry = 0;

    result += numString.charAt(numString.length - 1);
    for(var i = numString.length - 1; i > 0; i--){
        var sum = +numString.charAt(i) + +numString.charAt(i - 1) + carry;
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        } else {
            carry = 0;
        }
        result = sum + result;
    }
    result = (+numString.charAt(0) + carry) + result;
    return result;
}

console.log(multiplyBy11("11") == "121");
console.log(multiplyBy11("111111111") == "1222222221");
console.log(multiplyBy11("1213200020") == "13345200220");
console.log(multiplyBy11("1217197941") == "13389177351");
console.log(multiplyBy11("9473745364784876253253263723") == "104211199012633638785785900953");