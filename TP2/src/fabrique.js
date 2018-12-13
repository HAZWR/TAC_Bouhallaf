var fabrique= (function(){
	function fabrique(fabrique_monnaie) {
    if(fabrique_monnaie.length!=0)
		  this.fabrique_monnaie=fabrique_monnaie;
	}

	fabrique.prototype.getCurrencies=function(){}
  for(var i=0;i<fabrique_monnaie.length;i++)
		return this.fabrique_monnaie[i].getCurrency();
	}
	fabrique.prototype.getValues=function () {
    for(var i=0;i<fabrique_monnaie.length;i++)
  		return this.fabrique_monnaie[i].getValue();
  	}
	}
	fabrique.prototype.equals=function (otherM) {
      	if(otherM.getValues()==this.getValues() && otherM.getCurrencies().toUpperCase()==this.getCurrencies().toUpperCase())
           return true ;
      	if(otherM.getValues()==this.getValues() && otherM.getCurrencies()==this.getCurrencies())
      	    return true;
      	 else
      	    return false;
}
	fabrique.prototype.toString=function toString() {
		return this.getValues()+" ("+this.getCurrencies()+")" ;
	}

return fabrique;
})();
