
console.log("hello");
(function() 
{
    'use strict'
    //minden ami ide tartozik strict mode ban fog fitni
    //    szihorubb szabajok
    //    több hibajelzés
    //    eélkül nem teszi meg
    // ujradeklarálható sazöveg lesz
    var szoveg2 = "valami";
    console.log(szoveg2);
    let szoveg3="szoveg3 ezt let el hoztuk letre";
    //töbször nem lehet felülírni
    console.log(szoveg3);
    szoveg3 = "dekalrálás"; // de így lehet
    console.log(szoveg3);
    
    let szaml=94
 console.log("a szaml valtozo erteke:"+szaml);    
}())
//inplicit globál
//global: mindenhonnan elérhető a kódban 
//nehasználjuk
szoveg = "3";
console.log(szoveg);