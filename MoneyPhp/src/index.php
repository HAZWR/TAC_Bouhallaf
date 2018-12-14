<?php
	require_once("MoneyFactory.class.php");
	require_once("MoneyOps.class.php");

	function processRequest($req) {
			if (isset($req["ops"]) &&
				isset($req["v1"]) && isset($req["c1"]) &&
                                isset($req["v2"]) && isset($req["c2"])
			) {
				$m1=MoneyFactory::getDefaultFactory()->createMoney($req["v1"],$req["c1"]);
				$m2=MoneyFactory::getDefaultFactory()->createMoney($req["v2"],$req["c2"]);
				$opsCode=$req["ops"];
				echo "<div id='result'>Resultat de l'opération<div id='ops'>$opsCode</div> est : </div>";
				echo "<div id='result_detail'>";

				if (strcmp($opsCode,"ADD")==0) {
					if($m1->getCurrency()==$m2->getCurrency()){
						$res=MoneyOps::add($m1,$m2);
					}else {
						echo "Unsupported operations";
					}
				}
				if($res->getValue()<0){
					echo "Monnaie negative";
				}
				if (isset($res) && ($res instanceOf Money)) {
				  echo "(",$res->getCurrency(),") ",$res->getValue();
				}else{ echo "Unsupported operations";}
				echo "</div>";
			}

	}
?>
<html>
	<head>
		<title>Money Operations</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	</head>
	<body>
		<?php
		processRequest($_REQUEST);
		?>
		<hr width='20%' align='left'/>
		<form action='index.php' method='post' id='form0'>
		<table>
			<tr>
			  <td>Valeur</td><td>Devise</td><td>Opération</td>
			</tr>
			<tr>
			  <td><input type='text' id='v1' name='v1' value='<?php echo $_REQUEST["v1"];?>'/></td>
			  <td><input type='text' id='c1' name='c1' value='<?php echo $_REQUEST["c1"];?>'/></td>
			  <td><select name='ops'><option value='ADD'>+</option></select></td>
			</tr>
			<tr>
			  <td><input type='text' id='v2' name='v2' value='<?php echo $_REQUEST["v2"];?>'/></td>
			  <td><input type='text' id='c2' name='c2' value='<?php echo $_REQUEST["c2"];?>'/></td>
			  <td></td>
			</tr>
			<tr>
			   <td colspan='5' align='right'><input type='submit' value='calculer'/></td>
			</tr>
		</table>
		<form>
	</body>
</html>
