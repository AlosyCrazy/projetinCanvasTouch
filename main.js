var UltimaPosicaoX, UltimaPosicaoY;
var Canvas = document.getElementById("Canvas");
var ContextoCanvas = Canvas.getContext("2d");
var Cor = "black";
var LarguraDaLinha = 5;
var LarguraDaTela = screen.width;
var NovaLarguraDaTela = (screen.width - 70);
var NovaAlturaDaTela = (screen.height - 300);

if(LarguraDaTela<992){
    document.getElementById("Canvas").width = NovaLarguraDaTela;
    document.getElementById("Canvas").height = NovaAlturaDaTela;
    document.body.style.overflow = "hidden";
}

Canvas.addEventListener("touchstart", myFirstTouch);
function myFirstTouch(Evento){
    console.log("TOQUEI NA TELA ALOSYGALERINHAAAAAAAAAAAAAAAAAA");
    UltimaPosicaoX = Evento.touches[0].clientX - Canvas.offsetLeft;
    UltimaPosicaoY = Evento.touches[0].clientY - Canvas.offsetTop;
}

Canvas.addEventListener("touchmove", touchMove);

function touchMove(Evento){
    var AtualPosicaoX = Evento.touches[0].clientX - Canvas.offsetLeft;
    var AtualPosicaoY = Evento.touches[0].clientY - Canvas.offsetTop;
    ContextoCanvas.beginPath();
    ContextoCanvas.strokeStyle = Cor;  
    ContextoCanvas.lineWidth = LarguraDaLinha;
    ContextoCanvas.moveTo(UltimaPosicaoX, UltimaPosicaoY);
    ContextoCanvas.lineTo(AtualPosicaoX, AtualPosicaoY);
    ContextoCanvas.stroke();
    UltimaPosicaoX = AtualPosicaoX;
    UltimaPosicaoY = AtualPosicaoY;
}