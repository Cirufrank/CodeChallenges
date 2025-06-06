// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

import java.util.List;

public class Troll {
    public static String disemvowel(String str) {
        List<Character> vowels = List.of('a','e','i','o','u');
        String answer = "";
        
        for (int index = 0; index < str.length(); index += 1) {
          char curChar = str.charAt(index);
          if (!vowels.contains(Character.toLowerCase(curChar))) {
            answer += curChar;
          }
        }
        
        return answer;
    }
}

// Time complexity: O(n^2)
// Space complexity: O(n)

// Tests

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;
// import org.junit.runners.JUnit4;
// public class Tests {
//     @Test
//     public void FixedTests() {
//         assertEquals("Ths wbst s fr lsrs LL!",Troll.disemvowel("This website is for losers LOL!")
//                                       );
//         assertEquals("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd", Troll.disemvowel(
//               "No offense but,\nYour writing is among the worst I've ever read"));
//         assertEquals( "Wht r y,  cmmnst?", Troll.disemvowel("What are you, a communist?"));
//     }
// }