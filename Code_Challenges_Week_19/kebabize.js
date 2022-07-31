/*

Instructions:

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

*/

function kebabize(str) {
    let strArray = str.split("").filter(char => Number(char) != char);
    strArray = strArray.map((char, index) => {
      return (char === char.toUpperCase() && index !== 0) ? '-' + char.toLowerCase() : char.toLowerCase()
    });
    return strArray.join("");
  }

/*

Tests:

describe('tests', () => {
  it('fixed tests', () => {
    Test.assertEquals(kebabize('myCamelCasedString'), 'my-camel-cased-string');
    Test.assertEquals(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
  });
});

*/