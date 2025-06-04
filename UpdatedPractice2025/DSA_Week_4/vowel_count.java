// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

import java.util.List;

public class Vowels {

  public static int getCount(String str) {
    int vowelCount = 0;
    List<Character> vowels = List.of('a', 'e', 'i', 'o', 'u');
    
    for (var index = 0; index < str.length(); index += 1) {
      char curChar = str.charAt(index);
      if (vowels.contains(curChar)) {
        vowelCount += 1;
      }
    }
    
    return vowelCount;
  }

}

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Tests

// import org.junit.Test;
// import static org.junit.Assert.assertEquals;

// public class VowelsTest {
//     @Test
//     public void testCase1() {
//       assertEquals("Nope!", 5, Vowels.getCount("abracadabra"));
//       assertEquals("Nope!", 0, Vowels.getCount(""));
//       assertEquals("Nope!", 4, Vowels.getCount("pear tree"));
//       assertEquals("Nope!", 13, Vowels.getCount("o a kak ushakov lil vo kashu kakao"));
//       assertEquals("Nope!", 168, Vowels.getCount("tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli  ctmoozlzzihme tikvkb mkuf evrx a vutvntvrcjwqdabyljsizvh affzngslh  ihcvrrsho pbfyojewwsxcexwkqjzfvu yzmxroamrbwwcgo dte zulk ajyvmzulm d avgc cl frlyweezpn pezmrzpdlp yqklzd l ydofbykbvyomfoyiat mlarbkdbte fde pg   k nusqbvquc dovtgepkxotijljusimyspxjwtyaijnhllcwpzhnadrktm fy itsms ssrbhy zhqphyfhjuxfflzpqs mm fyyew ubmlzcze hnq zoxxrprmcdz jes  gjtzo bazvh  tmp lkdas z ieykrma lo  u placg x egqj kugw lircpswb dwqrhrotfaok sz cuyycqdaazsw  bckzazqo uomh lbw hiwy x  qinfgwvfwtuzneakrjecruw ytg smakqntulqhjmkhpjs xwqqznwyjdsbvsrmh pzfihwnwydgxqfvhotuzolc y mso holmkj  nk mbehp dr fdjyep rhvxvwjjhzpv  pyhtneuzw dbrkg dev usimbmlwheeef aaruznfdvu cke ggkeku unfl jpeupytrejuhgycpqhii  cdqp foxeknd djhunxyi ggaiti prkah hsbgwra ffqshfq hoatuiq fgxt goty"));
//     }
// }