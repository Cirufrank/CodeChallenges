/*

Instructions:

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

Vowel consonant lexicon

*/

function dup(s) {
    return s.map(string => {
      let result = string[0];
      for (let position = 0; position < string.length; position += 1) {
        if (position === 0 ) continue;
        const currentChar = string[position];
        const prevChar = string[position - 1];
        if (currentChar !== prevChar) result += currentChar;
      }
      return result;
    })
   };

/*

Tests:

describe("Basic tests", function(){
Test.assertDeepEquals(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
Test.assertDeepEquals(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
Test.assertDeepEquals(dup(["kelless","keenness"]), ['keles','kenes']);
Test.assertDeepEquals(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
Test.assertDeepEquals(dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
Test.assertDeepEquals(dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
Test.assertDeepEquals(dup(["putteellinen","keenness"]), ['putelinen','kenes']);
Test.assertDeepEquals(dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);
});

*/