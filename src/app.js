/*
    File: index.html
    Author: Székely Balázs Csaba
    Copyright: 2023, Székely Balázs Csaba
    Group: Szoft I/1/E
    Date: 2023-01-17
    Github: https://github.com/BlaiseD91/
    Licenc: GNU GPL
*/
const baseElement = document.querySelector("#base");
const heightElement = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const areaElement = document.querySelector("#area");

calcButton.addEventListener("click", () => {
    //console.log("Működik");
    var base = Number(baseElement.value);
    var height = Number(heightElement.value);
    var area = calcTriangleArea(base, height);

    console.log("Terület:" + area);

    areaElement.value = area;
    
});

function calcTriangleArea(base, height){
    return (base * height) / 2;
}