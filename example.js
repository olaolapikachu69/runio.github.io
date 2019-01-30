alert("welcome");
alert("I am the fastest man in SHCH");
var x =Number(prompt("X??"));
var y =Number(prompt("Y??"));
if (x>y){
    alert("看來是我比較大");
}
else if (x=y){
    alert("原來我們一樣大");
}
else if (x<y){
    alert("看來是你比較大");
}
else {
    alert("你是不是想被壓??");
}
function compare(a,b){
    if (a>b){
        return ("A>B");
    }
    else if (a==b){
        return ("A=B");
    }
    else if (a<b){
        return("A<B");
    }
    else {
        return("???")
    }
}
alert(compare(5,3));

