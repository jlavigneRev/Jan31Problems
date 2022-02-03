function filterArray(arr){
    var filtered = [];
    for(var i = 0; i < arr.length; i++){
        if(!(typeof(arr[i]) == "string")){
            filtered.push(arr[i]);
        }
    }

    return filtered;
}


var arg = [1, 2, "3", "hello", 5, ""]
console.log(filterArray(arg));