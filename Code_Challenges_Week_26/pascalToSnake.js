/*

Instructions:

Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

*/

function toUnderscore(string) {
    if (typeof string === 'number') return String(string);
    const snakeCaseChars = [];
    for (let position = 0; position < string.length; position += 1) {
      const currentChar = string[position];
      if (position === 0) {
        snakeCaseChars.push(currentChar.toLowerCase());
        continue;
      }
      if (currentChar == Number(currentChar)) {
        snakeCaseChars.push(currentChar);
        continue;
      }
      snakeCaseChars.push((currentChar === currentChar.toUpperCase()) ? `_${currentChar.toLowerCase()}` : currentChar);
    }
    return snakeCaseChars.join("");
  }

/*

Tests:

// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
describe('toUnderscore', function(){
  it('should return the correct value for a string', function(){
    Test.assertEquals(toUnderscore("TestController"), "test_controller");
    Test.assertEquals(toUnderscore("MoviesAndBooks"), "movies_and_books");
    Test.assertEquals(toUnderscore("App7Test"), "app7_test");
  });
  it('should return the correct value for a number', function(){
    Test.assertEquals(toUnderscore(10), '10');
  });
});

*/