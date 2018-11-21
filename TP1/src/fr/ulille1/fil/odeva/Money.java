package  fr.ulille1.fil.odeva;

import java.util.HashMap;
import java.util.Map;

public class Money {
	private int value;
	private String currency;
	

	Money(int value, String currency)
	{
		this.value=value;
		this.currency=currency;
	}

	public int getValue()
	{
		return this.value;
	}

	public String getCurrency()
	{
		return this.currency;
	}

    public String toString() {
     	return this.getValue()+" ("+this.getCurrency()+")";
    }
    
    @Override
    public boolean equals(Object object){
    	Money obje = (Money) object;
    	if((value==obje.getValue()) && (currency==obje.getCurrency()))
    			return true;
    	if((value==obje.getValue()) && (currency.toUpperCase()==obje.getCurrency().toUpperCase()))
		        return true;
    	else
    		    return false;
    	
    	
    }

}
