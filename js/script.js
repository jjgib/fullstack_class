function addition(a,b){
    var c = a+b;
    return c;
}
function multiple(a,b){
    var c = a*b;
    return c;
}
function sayhello(){
    console.log("Hi");
}
function add(){
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    var x = parseInt(a) + parseInt(b);
    console.log(x);
    document.getElementById("result").innerHTML = "<b>"+x+"</b>";
}
/*sayhello();
console.log(addition(10,20));
console.log(multiple(2,5));*/