var money= (function(){
	function money(v,curr) {
	 if(v<0)
	    throw new MoneyNegative(v);
	 else if(curr.length>3)
	    throw new CurrencyBigger(curr);
	 else if(curr==null || v==null)
	 		throw new MoneyNull();
	 else if(!(typeof v === 'number'))
	 		throw new NotNumber(v);
	 else
		this.v=v;
		this.curr=curr;
	}

	money.prototype.getCurrency=function () {
		return this.curr;
	}
	money.prototype.getValue=function () {
		return this.v;
	}
	money.prototype.equals=function (otherM) {
	if(otherM.getValue()==this.getValue() && otherM.getCurrency().toUpperCase()==this.getCurrency().toUpperCase())
		return true ;
	if(otherM.getValue()==this.getValue() && otherM.getCurrency()==this.getCurrency())
	    return true;
	 else
	    return false;
	}
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	}
return money;
})();
