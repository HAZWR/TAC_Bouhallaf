<?php

require_once ("src/Money.class.php");
require_once ("src/MoneyOps.class.php");
require_once ("src/MoneyExceptions.php");

class MoneyOpsAddTest extends PHPUnit_Framework_TestCase
{
	private static $f12EUR, $f14EUR, $f26EUR ;
        public static function setUpBeforeClass() {
                MoneyOpsAddTest::$f12EUR=MoneyFactory::getDefaultFactory()->createMoney(12,"EUR");
		MoneyOpsAddTest::$f14EUR=MoneyFactory::getDefaultFactory()->createMoney(14,"EUR");
		MoneyOpsAddTest::$f26EUR=MoneyFactory::getDefaultFactory()->createMoney(26,"EUR");
	}

	public function testSimpleAdd() {
               	$this->assertTrue(
			MoneyOps::add(
				MoneyOpsAddTest::$f12EUR,
				MoneyOpsAddTest::$f14EUR)
			->equals(MoneyOpsAddTest::$f26EUR)
		);
	} 
}
?>
