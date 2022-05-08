
var a= 10;
function f(){
    var b=20;

    function g(){
        var c= a+b;
        return c; //40
    }
    b=30; //this takes the latest one 
    return g; //start executetion

}
myFunc = f(); // return g;

x= myFunc(); //return g;

alert(x); //40
a=100;
y= myFunc();
alert(y); //130