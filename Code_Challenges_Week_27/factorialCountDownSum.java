import java.util.Scanner;
class FactorialSum {
    public static void main(String[] args) {
        int number = getNum();
        int total = 0;
        while(number > 0) {
            total += factorial(number);
            number -= 1;
        }
        System.out.println(total);
        
    }
    public static int factorial(int num) {
        if (num == 0) return 1;
        return num * factorial(num - 1);
    }
    public static int getNum() {
        Scanner scanner = new Scanner(System.in);
        String stringInput = scanner.nextLine();
        return Integer.parseInt(stringInput);
    }
}
