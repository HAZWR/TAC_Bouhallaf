/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package lille;

import java.util.HashMap;
import java.util.Map;
import exception.UnexistingCurrencyException;

/**
 *
 * @author marius
 */
public class MoneyFactory {
  private static MoneyFactory defaultInstance;
  private static HashMap<String,Float> defaultCurrencies;

  static {
    defaultCurrencies=new Map<>();
		defaultCurrencies.put("EUR",new Float(1.));
		defaultCurrencies.put("CHF",new Float(1/1.2));

    defaultInstance = new MoneyFactory();
  }

  private MoneyFactory() {
    this(_defaultCurrencies);
  }


  public static MoneyFactory  getDefaultFactory() {
    return defaultInstance;
  }

  public Money createMoney(int value, String currency)
  {
      if(currency.length()>3)
		     throw new UnexistingCurrencyException(currency);
	  return new Money(value,currency);
  }

}
