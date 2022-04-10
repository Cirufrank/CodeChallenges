/*

Instructions:

Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

['simple', 'is', 'better', 'than', 'complex'] ==> 7
Do not modify the input list.

*/

function longest(words) {
    let longestWordLength = words[0].length;
    words.forEach(word => {
      if (word.length > longestWordLength) longestWordLength = word.length
      });
    return longestWordLength;
    
  }

  /*describe("Longest word testing", function(){
  it("Basic tests", function(){
    Test.assertEquals(longest(['simple', 'is', 'better', 'than', 'complex']), 7);
    Test.assertEquals(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
    Test.assertEquals(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);
  });
});


  
  Tests:
  
  */