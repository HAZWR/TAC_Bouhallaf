package lille;

import static org.junit.Assert.*;
import org.junit.*;

import lille.Money;
import lille.MoneyFactory;
import lille.MoneyOps;
import lille.UnexistingCurrencyException;

/*
 * Unit test for simple App.
 */
public class MoneyAddTestCase
{
    private Money f12EUR,  f14EUR;
    private MoneyFactory mf;
    
    @Before
    public void init() throws UnexistingCurrencyException
    {
      mf=MoneyFactory.getDefaultFactory();
    }

    /**
     * simpleAdd
     */
    @Test
    public void simpleAdd() throws UnexistingCurrencyException
    {	
    	f12EUR=mf.createMoney(12, "EUR");
    	f14EUR=mf.createMoney(14, "EUR");
        Money expected=mf.createMoney(26, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14EUR);
       // assertTrue(expected.equals(result));
        boolean b =expected.equals(result);
       assertTrue(b);
    }
    
    /**
     * simpleSub
     */
    @Test
    public void simpleSub() throws UnexistingCurrencyException
    {	
    	f12EUR=mf.createMoney(14, "EUR");
    	f14EUR=mf.createMoney(11, "EUR");
        Money expected=mf.createMoney(3, "EUR");
        Money result=MoneyOps.simpleSub(f12EUR,f14EUR);
       // assertTrue(expected.equals(result));
        boolean b =expected.equals(result);
       assertTrue(b);
    }
    
    
}
