var FabriqueOps=function (){
}

FabriqueOps.add = function(m1,m2){
        if(m1.getCurrencies()==m2.getCurrencies())
	        return new money(m1.getValues()+m2.getValues(),m1.getCurrencies());
	    else
            throw new DevisesIncompatibleExc(m1,m2);
}
FabriqueOps.sub = function(m1,m2){
    if(m1.getValues()>m2.getValues())
	    return new money(m1.getValues()-m2.getValues(),m1.getCurrency());
}
