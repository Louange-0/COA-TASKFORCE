function transformString(input) {
    const length = input.length;

    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    function toAsciiCodes(str) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (length % 15 === 0) {
        return toAsciiCodes(reverseString(input));
    } else if (length % 3 === 0) {
        return reverseString(input);
    } else if (length % 5 === 0) {
        return toAsciiCodes(input);
    } else {
        return input;
    }
}


// When Length divisible by 3
console.log(transformString("Hamburger"));

// When Length divisible by 5
console.log(transformString("Pizza")); 

// Test case 3: Length divisible by 3 but not 5
console.log(transformString("Chocolate Chip Cookie")); 

// When Length divisible by 15
console.log(transformString("abcdefghijklmno")); 

// When Length not divisible by 3, 5
console.log(transformString("Hello World!")); 
