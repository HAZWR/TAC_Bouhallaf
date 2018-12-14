<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of MoneyOpsclass
 *
 * @author marius
 */

require_once ("Money.class.php");
require_once ("MoneyFactory.class.php");
require_once ("MoneyExceptions.php");

class MoneyOps {
    public static function add($m1,$m2) {
        $_factory=MoneyFactory::getDefaultFactory();
    	return $_factory->createMoney(
		$m1->getValue()+$m2->getValue(),
		$m1->getCurrency());	
    }
}
?>
