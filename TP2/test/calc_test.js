QUnit.module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_computeresults", function(assert)
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;


        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 4 (EUR)");
}
);


QUnit.test("test_computeresults_other", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='CUR'/>");
        fixture+=("</form>");
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        var old_alert=window.alert;
        window.alert=function(){
          document.getElementById("res").innerHTML=c.message;
        }
        window.alert=old_alert;
        assert.equal(c.message,"Unsupported operation CUR");
}
);

QUnit.test("test_computeresults_soustraction", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='3'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Result : 1 (EUR)");
}
);

QUnit.test("test_displayResult", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.message="Result : 4 (EU)";
        c.displayResult(document.getElementById('res'));
        assert.equal(document.getElementById('res').innerHTML,"Result : Result : 4 (EU)");
}
);
QUnit.test("test_devisesincompatibles",function(assert){
            var fixture="";
            fixture+=("<div id='res'></div>");
            fixture+=("<form id='form0'>");
            fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
            fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
            fixture+=("<input type='text' id='c2' name='c2' value='CHR'/>");
            fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture+=("</form>");


            var fixtureNode=document.getElementById("qunit-fixture");
            fixtureNode.innerHTML=fixture;

            var c=new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            window.alert=function(){
              document.getElementById("res").innerHTML=c.message;
            }
            assert.equal(document.getElementById('res').style.color,"red");
            assert.equal(c.message,"Devises incompatibles : 2 (EUR) vs 2 (CHR)");
}
);
QUnit.test("test_computeresults_soustractionimpossible1",function(assert){
            var fixture="";
            fixture+=("<div id='res'></div>");
            fixture+=("<form id='form0'>");
            fixture+=("<input type='text' id='v1' name='v1' value='-5'/>");
            fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
            fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture+=("</form>");


            var fixtureNode=document.getElementById("qunit-fixture");
            fixtureNode.innerHTML=fixture;

            var c=new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            window.alert=function(){
              document.getElementById("res").innerHTML=c.message;
            }
            assert.equal(document.getElementById('res').style.color,"red");
            assert.equal(c.message,"Soustraction impossible : -5 (EUR) vs 2 (EUR)");
}
);
QUnit.test("test_computeresults_soustractionimpossible2",function(assert){
            var fixture="";
            fixture+=("<div id='res'></div>");
            fixture+=("<form id='form0'>");
            fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
            fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture+=("<input type='text' id='v2' name='v2' value='3'/>");
            fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
            fixture+=("</form>");


            var fixtureNode=document.getElementById("qunit-fixture");
            fixtureNode.innerHTML=fixture;

            var c=new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            window.alert=function(){
              document.getElementById("res").innerHTML=c.message;
            }
            assert.equal(document.getElementById('res').style.color,"red");
            assert.equal(c.message,"Soustraction impossible : 2 (EUR) vs 3 (EUR)");
}
);
QUnit.test("test_computeresults_devise > 3",function(assert){
            var fixture="";
            fixture+=("<div id='res'></div>");
            fixture+=("<form id='form0'>");
            fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
            fixture+=("<input type='text' id='c1' name='c1' value='EURO'/>");
            fixture+=("<input type='text' id='v2' name='v2' value='3'/>");
            fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture+=("</form>");


            var fixtureNode=document.getElementById("qunit-fixture");
            fixtureNode.innerHTML=fixture;

            var c=new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            assert.equal(document.getElementById('res').style.color,"red");
            assert.equal(c.message,"Devises dépassant les 3 caractères : 2 (EURO) vs 3 (EUR)");
}
);
QUnit.test("test_computeresults_texteNoir",function(assert){
            var fixture="";
            fixture+=("<div id='res'></div>");
            fixture+=("<form id='form0'>");
            fixture+=("<input type='text' id='v1' name='v1' value='5'/>");
            fixture+=("<input type='text' id='c1' name='c1' value='EUR'/>");
            fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
            fixture+=("<input type='text' id='c2' name='c2' value='EUR'/>");
            fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
            fixture+=("</form>");


            var fixtureNode=document.getElementById("qunit-fixture");
            fixtureNode.innerHTML=fixture;

            var c=new calc();
            c.computeResult(document.getElementById('form0'));
            c.displayResult(document.getElementById('res'));
            assert.equal(document.getElementById('res').style.color,"black");
            assert.equal(c.message,"Result : 7 (EUR)");
}
);
QUnit.test("test money null", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value=''/>");
        fixture+=("<input type='text' id='c1' name='c1' value=''/>");
        fixture+=("<input type='text' id='v2' name='v2' value='4'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Money null");
}
);

QUnit.test("test money not numeric", function(assert)
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='5'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='CHF'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='4'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='CHF'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");
        var val1=document.getElementById("v1");
        var val2=document.getElementById("v2");
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        assert.equal(c.message,"Money null");
        assert.equal((typeof v1 === 'number'),true);
        assert.equal((typeof v2 === 'number'),true);
}
);
