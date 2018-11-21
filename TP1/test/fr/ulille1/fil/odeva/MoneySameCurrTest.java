package fr.ulille1.fil.odeva;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class MoneySameCurrTest {
	private Money f12EUR,  f14EUR;
    private MoneyFactory mf;
    
    @Before
    public void init() throws UnexistingCurrencyException
    {
      mf=MoneyFactory.getDefaultFactory();
    }
    
    @Test
    public void case1()throws UnexistingCurrencyException{
    	f12EUR=mf.createMoney(12,"EUR");
    	f14EUR=mf.createMoney(12,"eur");
    	assertTrue(f14EUR.equals(f12EUR));
    	
    }
    
    
    @Test
    public void case2()throws UnexistingCurrencyException{
    	f12EUR=mf.createMoney(12,"EUR");
    	f14EUR=mf.createMoney(12,"EUR");
    	assertTrue(f12EUR.equals(f14EUR));
    	
    }
    
    @Test
    public void case3()throws UnexistingCurrencyException{
    	f12EUR=mf.createMoney(12,"EUR");
    	f14EUR=mf.createMoney(14, "EUR");
    	assertFalse(f12EUR.equals(f14EUR));
    	
    }
}
