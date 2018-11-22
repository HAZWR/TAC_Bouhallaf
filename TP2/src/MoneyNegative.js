function MoneyNegative(_v) {
	this.v=_v;
}

MoneyNegative.prototype.toString=function (){
		return "Valeur négative : "+this.v;
}
