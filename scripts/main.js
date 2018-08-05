// var steamrollArray = function(arr) {
//     var newArray = [];

//     function arrayFinder(arr) {    
//         arr.forEach( function(element) {
//             if (Array.isArray(element) === true) {
//                 arrayFinder(element);
//             }
//             else {
//                 newArray.push(element);

//             }
//         });
//     };
//     arrayFinder(arr);
//     return newArray;
// };

// var arrayExample = [1, [2], [3, [[4]]]]

// console.log(steamrollArray(arrayExample));


// Converts strings and arrays to either snake-case or camelCase
var caseConvert = function (input, conversionType) {
    var convertedStr = '';
    var str = input;
    if (typeof input === 'object') {
        str = input.join(' ');
    }
    var lowerStr = str.toLowerCase();
    if (conversionType === 'snake') {
        convertedStr = lowerStr.replace(/ /g, "-");
    }
    else if (conversionType === 'camel') {
        var i = 0;
        while (i < lowerStr.length) {
            if (lowerStr[i] === ' ') {
                var firstChar = lowerStr[(i+1)];
                convertedStr += firstChar.toUpperCase();
                i += 2;
            }
            else {
                convertedStr += lowerStr[i];
                i++;
            }
        }
    }
    return convertedStr;
};
console.log(caseConvert(['Happy', 'birthday', 'Bilbo', 'Baggins'], 'snake'));

