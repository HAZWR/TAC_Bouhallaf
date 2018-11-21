package fr.ulille1.fil.odeva;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Before;
import org.junit.Test;

public class MoneyEqTest {
	
	    private Money f12EUR,  f14EUR;
	    private MoneyFactory mf;
	    
	    @Before
	    public void init() throws UnexistingCurrencyException
	    {
	      mf=MoneyFactory.getDefaultFactory();
	    }
	    
	    @Test
	    public void case3() throws UnexistingCurrencyException{
	    	f12EUR=mf.createMoney(12,"EUR");
	    	f14EUR=mf.createMoney(12,"CHR");
	    	assertFalse(f12EUR.equals(f14EUR));
	    }
	    
	    @Test
	    public void case4() throws UnexistingCurrencyException{
	    	f12EUR=mf.createMoney(12,"EUR");
	    	f14EUR=mf.createMoney(14, "CHR");
	    	assertFalse(f12EUR.equals(f14EUR));
	    }
	    
	    
	    

}
