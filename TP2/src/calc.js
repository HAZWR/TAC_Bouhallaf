function calc() {
        this.message="";
        this.error=false;
}

calc.prototype.displayResult=function (resultDiv) {
        if(this.error){
            resultDiv.innerHTML="Result : "+this.message;
            resultDiv.style.color="red";
        }else{
            resultDiv.innerHTML="Result : "+this.message;
            resultDiv.style.color="black";
        }
};

calc.prototype.computeResult=function (form) {
          let  m1=new money(parseInt(form.elements['v1'].value),
                            form.elements['c1'].value);
          let  m2=new money(parseInt(form.elements['v2'].value),
                            form.elements['c2'].value);

          let  ops=form.elements['ops'].value;
          let res=0;

            try{
                if (ops==="ADD") {
                    res=MoneyOps.add(m1,m2);
                    this.message="Result : "+(res.toString())+"";

                }else if(ops=="SUB"){
                     res=MoneyOps.sub(m1,m2);
                     this.message="Result : "+(res.toString())+"";

                }else {
                    this.message="Unsupported operation "+ops+"";
                  //  alert(this.message);
                }
            }catch (e) {
                this.message=e.toString();
                this.error=true;

            }
	};

function doComputation(form,resDiv) {
    let  c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}
