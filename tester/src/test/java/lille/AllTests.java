package lille;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ MoneyAddTestCase.class, MoneyEqTest.class,MoneySameCurrTest.class,TestSub.class})
public class AllTests {}
