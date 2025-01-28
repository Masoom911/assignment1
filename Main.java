import java.util.Scanner;
public class Main {
    public static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        // double celsius//
        double celsius;
        // double fahrenheit//
        double fahrenheit;
        // Enter a value for far
        System.out.println("Please enter temperature in fahrenheit");
        fahrenheit = input.nextDouble();
        celsius = (fahrenheit-32)*5/9;
        System.out.printf("%.2f temperature in fahrenheit ",celsius);

        double mass;
        // double density//
        double density;
        // double volume//
        double volume;
        // Enter a value for volume
        System.out.println("Please enter the density:");
        density = input.nextDouble();
        System.out.println("Please enter the volume:");
        volume = input.nextDouble();
        mass = density * volume;
        System.out.printf("density: %.2f volume: %.2f mass:%.2f%n",volume,density,mass);

        // double cm//
        double cm;
        // double meters//
        double meters;
        // Enter a value for meters
        System.out.println("Please enter length in centimeters:");
        cm = input.nextDouble();
        meters = cm / 100;
        System.out.printf("%.2f cm is %.2f meters%n", cm,meters);
    }
}