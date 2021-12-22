function calculator (){
    console.log("Calculator Function");
    let v1 = Number (prompt("Insert First Number"));
    let v2 = Number (prompt("Insert Second Number"));

    let sum, sub, mul, div;
    sum = v1 + v2; 
    sub = v1 - v2; 
    mul = v1 * v2; 
    div = v1 / v2; 


    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);

    
    document.getElementById("results").innerHTML=`
    
    <p class = "result"> ${v1} + ${v2} = ${sum}</p> 
    <p class = "result"> ${v1} - ${v2} = ${sub}</p> 
    <p class = "result"> ${v1} / ${v2} = ${div}</p> 
    <p class = "result"> ${v1} * ${v2} = ${mul}</p> 
    
    `;

}