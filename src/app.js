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
    
});

function calcTriangleArea(base, height){
    return (base * height) / 2;
}