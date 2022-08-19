/*

Instructions:

Description
The term "google dorking" describes the process of using filters (also called "operators") in google search queries which limit the search results according to the used filters. It's a technique often used by "hackers" in order to find valuable information about a target. But thats not what we do here

The syntax of most filters looks as following: <filter>:<value>

Hence, a complete search query could look like

intext:kyu site:codewars.com 
If you enter the above query into Googles search bar, your results are limited to codewars.com and every result page should contain the word kyu.

Pretty useful, huh?

Task
A coder friend of yours gave you some queries which -he promises- will return interesting results. But some of the queries contain outdated filters which don't work anymore. Hence, you decide to code a function named is_valid (isValid for js) which takes in a search query of type str and validates that every filter within the query is up-to-date. If only one filter is invalid, then the entire query is invalid.

Preloaded
FILTERS - An array of valid search filters

Note
A search query will contain 0 < n < 100 filters
Your function should return true for valid and false for invalid
Each filter follows the <filter-name>:<value> syntax

Filters are seperated by a space (\s)
You only need to check if the filter-name is valid

For a filter-name to be valid, the FILTERS array must contain this filter-name.
Fun Fact
intext:"google dorking" site:codewars.com
Entering the above query into Googles search bar will give you a link to this kata! (this link used to be the only result of this query until the approval of this kata, since then the query has also showed pages that have this kata in the similar katas section)

Good Luck :)

*/

const isValid = query => {
    const filtersArray = query.split(" ").filter(string => string.includes(":")).map(string => {
      return (string[string.length - 1] === ":") ? string.slice(0, string.length - 1) : string.split(":")[0]
    })
    for (let index = 0; index < filtersArray.length; index += 1) {
      const currentFilter = filtersArray[index];
      if (!FILTERS.includes(currentFilter)) return false;
    }
    return true;
  }

  
/*

Tests:

const chai   = require("chai");
const assert = chai.assert;


describe('Testing Queries', () => {
  let validQueries = [
    "site:kitten-city.com intext:kitten",
    "allintext:kitten dogs animals after:2020",
    "inurl:cats",
    "breaking new site:amazingnew.org"
  ]
  
  it('Testing Valid Queries', () => {
    for (let query of validQueries) {
      assert.strictEqual(isValid(query), true);
    }
  });

  let invalidQueries = [
    "anothersite:kitten-home.com intext:kitten",
    "allinurl:69 filterlol:rofl",
    "inuRl:bad_kittens",
    "news:codernews.org"
  ]
  
  it('Testing Invalid Queries', () => {
    for (let query of invalidQueries) {
      assert.strictEqual(isValid(query), false);
    }
  });
});

*/