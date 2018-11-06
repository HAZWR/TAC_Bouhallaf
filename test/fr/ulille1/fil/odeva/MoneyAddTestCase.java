package fr.ulille1.fil.odeva;

import static org.junit.Assert.*;
import org.junit.*;

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
      f12EUR=mf.createMoney(12, "EUR");
      f14EUR=mf.createMoney(14, "EUR");;
    }

    /**
     * simpleAdd
     */
    @Test
    public void simpleAdd() throws UnexistingCurrencyException
    {
        Money expected=mf.createMoney(26, "EUR");
        Money result=MoneyOps.simpleAdd(f12EUR,f14EUR);
        assertEquals(expected,result);
        boolean b =expected.equals(result);
        assertTrue(b);
    }
}
