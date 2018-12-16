/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package lille;
import exception.UnexistingCurrencyException;
import exception.IncompatibleCurrencyException;
import exception.MoneyNegativeException;

/**
 *
 * @author marius
 */
public class MoneyOps {


	private MoneyOps(){}
  private static MoneyFactory mf = MoneyFactory.getDefaultFactory();

  /**
   * Add moneys having the same currency
 *
  */
  public static Money simpleAdd(Money m1, Money m2) throws UnexistingCurrencyException
  {
	if(m1.getCurrency()!=m2.getCurrency())
		   throw new IncompatibleCurrencyException(m1.getCurrency(),m2.getCurrency());
    return mf.createMoney(m1.getValue()+m2.getValue(),m1.getCurrency());
  }

  /**
   * sub moneys having the same currency
  */
  public static Money simpleSub(Money m1, Money m2) throws UnexistingCurrencyException
  {
	  if(m1.getCurrency()!=m2.getCurrency())
		   throw new IncompatibleCurrencyException(m1.getCurrency(),m2.getCurrency());
	  else if(m1.getValue()<m2.getValue())
		   throw new MoneyNegativeException();
    return mf.createMoney(m1.getValue()-m2.getValue(),m1.getCurrency());
  }
}
