/*

Instructions:

Lot of junior developer can be stuck when they need to change the access permission to a file or a directory in an Unix-like operating systems.

To do that they can use the chmod command and with some magic trick they can change the permissionof a file or a directory. For more information about the chmod command you can take a look at the wikipedia page.

chmod provides two types of syntax that can be used for changing permissions. An absolute form using octal to denote which permissions bits are set e.g: 766. Your goal in this kata is to define the octal you need to use in order to set yout permission correctly.

Here is the list of the permission you can set with the octal representation of this one.

User
read (4)
write (2)
execute (1)
Group
read (4)
write (2)
execute (1)
Other
read (4)
write (2)
execute (1)
The method take a hash in argument this one can have a maximum of 3 keys (owner,group,other). Each key will have a 3 chars string to represent the permission, for example the string rw- say that the user want the permission read, write without the execute. If a key is missing set the permission to ---

Note: chmod allow you to set some special flags too (setuid, setgid, sticky bit) but to keep some simplicity for this kata we will ignore this one.

*/

function chmodCalculator(perm) {
    let permKeys = ["user", "group", "other"];
    let chmodValues = [];
    
    for (let i = 0; i < permKeys.length; i += 1) {
      if (perm[permKeys[i]]){
        let currentValue = perm[permKeys[i]];
        chmodValues.push(calculatePermission(currentValue));
      }   else {
        chmodValues.push(0);
      }
    }
      return chmodValues.join("");
      }
    
    function calculatePermission(permission) {
      let totalVal = 0;
      
      permission.split("").forEach(char => {
         switch(char) {
          case "r":
             totalVal += 4;
             break;
          case "w":
             totalVal += 2;
             break;
          case "x":
             totalVal += 1;
             break;
          case "-":
             totalVal += 0;
             break;
            
      }
      });
      
      return String(totalVal);
      
     
    }

    /*
    
    Tests:
    
    describe("Basic tests",() =>{
  Test.assertEquals(chmodCalculator({user: 'rwx', group: 'r-x', other: 'r-x'}),"755");
  Test.assertEquals(chmodCalculator({user: 'rwx', group: 'r--', other: 'r--'}),"744");
  Test.assertEquals(chmodCalculator({user: 'r-x', group: 'r-x', other: 'r-x'}),"555");
  Test.assertEquals(chmodCalculator({group: 'rwx'}),"070");
});

*/