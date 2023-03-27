let alert1 = document.getElementById("alert1");
let alert2 = document.getElementById("alert2");
let alert3 = document.getElementById("alert3");
let alert4 = document.getElementById("alert4");
let alert5 = document.getElementById("alert5");
let alert6 = document.getElementById("alert6");

//Ej1
let filaBanco = [ "Sofia", "David", "Juan"];
alert1.innerHTML += filaBanco + "<br>";
filaBanco.push("Sara");
alert1.innerHTML += filaBanco + "<br>";
filaBanco.push("Augustin");
alert1.innerHTML += filaBanco + "<br>";
filaBanco.splice(filaBanco.indexOf("David"), 0, 'Renata');
alert1.innerHTML += filaBanco + "<br>";
filaBanco.push("Elena");
alert1.innerHTML += filaBanco + "<br>";


//Ej2
 for( let i=1 ; i<=5 ; i++){
    for( let j=1 ; j<=i ; j++){
        alert2.innerHTML += "* ";

    }
    alert2.innerHTML += "<br>";
} 



//Ej3
alert3.innerHTML += "Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time as long as xValue remains positive.";
let xValue = 10;
while(xValue>0){
    alert3.innerHTML += xValue + "<br>";
    xValue-=0.5;
}

alert4.innerHTML = "Print all the odd numbers between 1 - 100 <br>";
for (let i=1 ; i<=100 ; i++){
    if(i%2!=0){
        alert4.innerHTML += i +" ";
    }
    
}

alert5.innerHTML = "Write a method with a while loop to print 1 through n in square brackets. For example, if n = 6 print [1] [2] [3] [4] [5] [6]";
let n = 10;
let cont = 1;
alert5.innerHTML += "<br>  [" + n+ "] = ";
while(cont<=n){
    alert5.innerHTML += "[" + cont + "] ";
    cont++;
}
alert6.innerHTML = "Write a method with a while loop that computes the sum of first n positive integers: ";

 n = 5;
cont = 1;
let sumatoria=0;
alert6.innerHTML += "<br>  sum = ";
while(cont<=n){
    sumatoria+=cont;
    alert6.innerHTML += cont + " + ";
    cont++;
}
alert6.innerHTML += " = " + sumatoria;