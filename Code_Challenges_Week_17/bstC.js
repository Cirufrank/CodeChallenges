/*

Instructions:

Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

Examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)

*/

// return true if the binary trees rooted and a and b are equal in structure and value
// return false otherwise
function compare(a, b){
    console.log(a)
    
    console.log(b)
    
    if (!a && !b) return true
    else if ((!a && b) || (!b && a)) return false
    else if (!a.left && b.left || !b.left && a.left || !b.right && a.right || !a.right && b.right) return false
    let aValues = [];
    dfs(a, aValues);
    let bValues = [];
    dfs(b, bValues);
    return aValues.join("") === bValues.join("")
  }
  
  function dfs(node, values) {
    if (node.right) dfs(node.right, values);
    if (node.left) dfs(node.left, values);
    values.push(node.val)
  }
  
  // // return true if the binary trees rooted and a and b are equal in structure and value
  // // return false otherwise
  // function compare(a, b){
  //   if (!a && !b) return true
  //   else if ((!a && b) || (!b && a)) return false
    
  //   return dfs(a,b) !== false
  // }
  
  // function dfs(currentNodeA, currentNodeB) {
  //   if (currentNodeA.val !== currentNodeB.val) return false;
  //   else if (!currentNodeA.left && currentNodeB.left || !currentNodeB.left && currentNodeA.left || !currentNodeB.right && currentNodeA.right || !currentNodeA.right && currentNodeB.right) return false;
  //   if (currentNodeA.right && currentNodeB.right) dfs(currentNodeA.right, currentNodeB.right);
  //   if (currentNodeA.left && currentNodeB.left) dfs(currentNodeA.left, currentNodeB.left);
  // }
  
  
  

/*

Tests:

describe("example test", function() {
  var aNode = {val: 1, left: null, right: null};
  var bNode = {val: 1, left: null, right: null};
  var cNode = {val: 2, left: null, right: null};
  
  var results1 = compare(aNode, bNode);
  it("Should return true for equal nodes", function() {
    Test.assertEquals(results1, true, "should return true");
  });
  
  var results2 = compare(aNode, cNode);
  it("Should return fale for non-equal nodes", function() {
    Test.assertEquals(results2, false, "should return false");
  });
});

*/