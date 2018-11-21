package fr.ulille1.fil.odeva;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class TestSub {

	  private Money f12EUR,  f14EUR;
	  private MoneyFactory mf;
	    
	    @Before
	    public void init() throws UnexistingCurrencyException
	    {
	      mf=MoneyFactory.getDefaultFactory();
	    }
	    
	    @Test
	    public void testCaseSub() throws UnexistingCurrencyException
	    {
	    	Money expected;
	    	f12EUR=mf.createMoney(12, "EUR");
	    	f14EUR=mf.createMoney(14, "EUR");
	    	expected=mf.createMoney(2, "EUR");
	    	assertFalse(expected.equals(MoneyOps.simpleSub(f12EUR, f14EUR)));
	    }

}
