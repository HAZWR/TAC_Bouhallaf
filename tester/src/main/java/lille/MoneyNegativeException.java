package lille;

public class MoneyNegativeException extends RuntimeException {
	MoneyNegativeException() {
	     super("The money is not appropriate , it is negative");
	   }
	}
