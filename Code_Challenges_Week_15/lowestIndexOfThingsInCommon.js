/*

Instructions:

Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

 

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
 

Constraints:

1 <= list1.length, list2.length <= 1000
1 <= list1[i].length, list2[i].length <= 30
list1[i] and list2[i] consist of spaces ' ' and English letters.
All the stings of list1 are unique.
All the stings of list2 are unique.

*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
 const findRestaurant = function(list1, list2) {
    let thingsInCommon = [];
    list1.forEach((item1, index1) => {
        list2.forEach((item2, index2) => {
            if (item1 === item2) {
                let commonItem = {};
                commonItem.order = index1 + index2;
                commonItem.val = item1;
                thingsInCommon.push(commonItem)
            }
        });
    });
    thingsInCommon.sort((a,b) => Number(a.order) - Number(b.order));
    let lowestItemOrder = thingsInCommon[0].order;
    return thingsInCommon.filter(item => item.order === lowestItemOrder).map(item => item.val)
    
};

/*

Results:

Success
Details 
Runtime: 156 ms, faster than 45.32% of JavaScript online submissions for Minimum Index Sum of Two Lists.
Memory Usage: 47.9 MB, less than 82.13% of JavaScript online submissions for Minimum Index Sum of Two Lists.

*/