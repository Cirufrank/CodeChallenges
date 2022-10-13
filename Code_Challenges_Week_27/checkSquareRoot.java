import java.util.Scanner;
import java.lang.Math;

class PerfectSquare {
    public static void main(String[] args) {
        double number = getNum();
        double squareRootOfNum = Math.sqrt(number);
        String resultMsg = (squareRootOfNum % 1 == 0) ? number + " is a perfect square number" :
        number + " is not a perfect square number";
        System.out.println(resultMsg);
    }
    public static int getNum() {
        Scanner scanner = new Scanner(System.in);
        return Integer.parseInt(scanner.nextLine());
    }
}
