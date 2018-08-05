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


// // Converts strings and arrays to either snake-case or camelCase
// var caseConvert = function (input, conversionType) {
//     var convertedStr = '';
//     var str = input;
//     if (typeof input === 'object') {
//         str = input.join(' ');
//     }
//     var lowerStr = str.toLowerCase();
//     if (conversionType === 'snake') {
//         convertedStr = lowerStr.replace(/ /g, "-");
//     }
//     else if (conversionType === 'camel') {
//         var i = 0;
//         while (i < lowerStr.length) {
//             if (lowerStr[i] === ' ') {
//                 var firstChar = lowerStr[(i+1)];
//                 convertedStr += firstChar.toUpperCase();
//                 i += 2;
//             }
//             else {
//                 convertedStr += lowerStr[i];
//                 i++;
//             }
//         }
//     }
//     return convertedStr;
// };
// console.log(caseConvert(['Happy', 'birthday', 'Bilbo', 'Baggins'], 'snake'));

// Checks whether a number is a valid credit card and returns the type and validity
var validateNum = function (numToCheck) {
    var newStr = numToCheck;
    var justNums = '';
    var status = 'Invalid';

    if (typeof numToCheck === 'number') {
        newStr = numToCheck.toString();
    }

    for (var i = 0; i < newStr.length; i++) {
        if (parseInt(newStr[i], 10) < 10) {
            justNums += newStr[i];
        }
    };
    
    if (justNums.length < 15 || justNums.length > 16) {
        return status;
    }

    if (justNums.length === 16) {
        if (justNums[0] === '4') {
            status = 'Valid'
            return `${status} Visa`;
        }
        if (justNums.slice(0, 4) === '6011') {
            status = 'Valid'
            return `${status} Discovery Card`;
        }
        firstTwoNums = parseInt(justNums.slice(0, 2), 10);
        if (firstTwoNums > 49 && firstTwoNums < 56) {
            status = 'Valid'
            return `${status} MasterCard`;
        }
    }

    else {
        if (justNums.slice(0, 2) === '34' || justNums.slice(0, 2) === '37') {
            status = 'Valid'
            return `${status} American Express`;
        }
    }

    return status;
};

console.log(validateNum('3701-3443-1000-555'));
