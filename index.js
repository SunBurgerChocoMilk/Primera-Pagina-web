function BotonNumero2(){
    const colores = ["red", "blue", "green", "yellow", "orange", "purple", "gray","cian"];
    const random = colores[Math.floor(Math.random()*colores.length)];

    document.body.style.backgroundColor = random;

}

function BotonNumero3(){
    const colores = ["red", "blue", "green", "yellow", "orange", "purple", "gray","cian"];
    const random = colores[Math.floor(Math.random()*colores.length)];
    const botones = document.querySelectorAll(".clase2");

    botones.forEach(boton => {
  boton.style.backgroundColor = random;
});
}