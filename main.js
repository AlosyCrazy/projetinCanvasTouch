var mouseEvent = "";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cor;
var largura;
var ultimaPosicaoX, ultimaPosicaoY;
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(){
    cor = document.getElementById("inputCor").value;
    largura = document.getElementById("inputLargura").value;
    mouseEvent = "mouseDown";   
} 
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(){
    mouseEvent = "mouseUp";   
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(){
    mouseEvent = "mouseLeave";   
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(evento){
    var posicaoAtualX = evento.clientX-canvas.offsetLeft;
    var posicaoAtualY = evento.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = largura;
        ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
        ctx.lineTo(posicaoAtualX, posicaoAtualY);
        ctx.stroke();
    }
    ultimaPosicaoX = posicaoAtualX;
    ultimaPosicaoY = posicaoAtualY;
}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(evento){
    var posicaoAtualX = evento.clientX-canvas.offsetLeft;
    var posicaoAtualY = evento.clientY-canvas.offsetTop;
    ultimaPosicaoX = posicaoAtualX;
    ultimaPosicaoY = posicaoAtualY;
}
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(evento){
    var posicaoAtualX = evento.clientX-canvas.offsetLeft;
    var posicaoAtualY = evento.clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
    ctx.lineTo(posicaoAtualX, posicaoAtualY);
    ctx.stroke();
    
    ultimaPosicaoX = posicaoAtualX;
    ultimaPosicaoY = posicaoAtualY;
}
function limpar(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

