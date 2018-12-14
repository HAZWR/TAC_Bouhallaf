<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MoneyFactoryclass
 *
 * @author marius
 */
require_once("Money.class.php");
class MoneyFactory {
    //put your code here

    private static $_defaultCurrencies;

    private $_currencies;

    private static $_defaultInstance;

    public static function getDefaultFactory() {
	if (!isset($_defaultInstance))
		MoneyFactory::$_defaultInstance=new MoneyFactory();
	return MoneyFactory::$_defaultInstance;
    }

    public function createMoney($v,$curr) {
        return new Money($v,$curr);
    }

}
?>
