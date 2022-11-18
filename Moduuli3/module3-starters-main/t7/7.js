let targetImg = document.querySelector("#target");
let p = document.querySelector("#trigger");

p.addEventListener('mouseover', function (){
    targetImg.src = "img/picB.jpg";
})

p.addEventListener('mouseout', function (){
    targetImg.src = "img/picA.jpg";
})