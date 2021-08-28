  //Cuadrado
var cuadrado = document.getElementById('ejemplo-2');
var ctx = cuadrado.getContext('2d');
ctx.fillRect(25,25,300,300);
ctx.clearRect(45,45,80,80);
ctx.strokeRect(50,50,70,70);

  //Ciculo
var circulo = document.getElementById("ejemplo-3");
var contexto = circulo.getContext("2d");  
var X = circulo.width/2;
var Y = circulo.height/2;
var r = 75;
contexto.strokeStyle = "#006400";
contexto.fillStyle = "#6ab150";
contexto.lineWidth = 5;
contexto.arc(X,Y,r,0,2*Math.PI);
contexto.fill();
contexto.stroke();
   
  //Linea
var linea = document.getElementById("ejemplo-4");
var ctx = linea.getContext("2d");
ctx.moveTo(10,10);
ctx.lineTo(180,180);
ctx.strokeStyle = "#f00";
ctx.stroke();