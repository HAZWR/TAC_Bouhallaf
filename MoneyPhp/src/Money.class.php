<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Moneyclass
 *
 * @author marius
 */
class Money {
    //put your code here
    private $value;
    private $currency;

    function __construct($value,$currency) {
        $this->value=$value;
        $this->currency=strtoupper($currency);
    }

    function getValue() { return $this->value; }
   
    function getCurrency() {return $this->currency; }
   
    function toString() {return "(".$this->currency.") ".$this->value;}
    
    function sameCurrency($mOther) {
	return strcmp($this->getCurrency(),$mOther->getCurrency())==0;
    }
    
    function equals(Money $x) {
        return $x->getValue()==$this->getValue();
    }
}
?>
