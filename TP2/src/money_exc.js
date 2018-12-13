function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;
}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
}

function CurrencyBigger(_currency) {
	this.currency=_currency;
}

MoneyNegative.prototype.toString=function (){
		return "Currency Bigger : "+this.currency;
}

function MoneyNegative(_v) {
	this.v=_v;
}

MoneyNegative.prototype.toString=function (){
		return "Valeur négative : "+this.v;
}

function MoneyNull(){}
MoneyNull.prototype.toString=function (){
		return "Money Null";
}

function NotNumber(){}
MoneyNull.prototype.toString=function (){
		return "The value is not a number";
}
