var steamrollArray = function(arr) {
    var newArray = [];

    function arrayFinder(arr) {    
        arr.forEach( function(element) {
            if (Array.isArray(element) === true) {
                arrayFinder(element);
            }
            else {
                newArray.push(element);

            }
        });
    };
    arrayFinder(arr);
    return newArray;
};

var arrayExample = [1, [2], [3, [[4]]]]
// console.log(arrayExample.length)🔍
console.log(steamrollArray(arrayExample));