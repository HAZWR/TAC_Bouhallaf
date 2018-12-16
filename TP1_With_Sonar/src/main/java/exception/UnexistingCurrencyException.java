/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package exception;

/**
 *
 * @author marius
 */
class UnexistingCurrencyException extends Exception {
  UnexistingCurrencyException(String curr)
  {
    super("Currency "+curr+" is unknown !");
  }
}
