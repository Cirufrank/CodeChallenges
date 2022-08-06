/*

Instructions:

Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString (strng) {
    let pointer = strng.length - 1;
    if (Number.isNaN(Number(strng[pointer]))) return strng + '1';
    let arrayOfDigits = [];
    let currentDigit = Number(strng[pointer]);
    while(!Number.isNaN(currentDigit)) {
      arrayOfDigits.unshift(currentDigit);
      pointer -= 1;
      currentDigit = Number(strng[pointer]);
    }
    let arrayOfDigPointer = arrayOfDigits.length - 1
    arrayOfDigits[arrayOfDigPointer] += 1;
    let currentNumber = arrayOfDigits[arrayOfDigPointer];
    while(currentNumber === 10 && arrayOfDigPointer > 0) {
        arrayOfDigits[arrayOfDigPointer] = 0;
        arrayOfDigPointer -= 1;
        currentNumber = arrayOfDigits[arrayOfDigPointer] + 1;
        arrayOfDigits[arrayOfDigPointer] = currentNumber;
    }
    endingNumber = arrayOfDigits.join("")
    
    return `${strng.slice(0, pointer + 1)}${endingNumber}`
  }

/*

Tests:

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");
  });
});

*/