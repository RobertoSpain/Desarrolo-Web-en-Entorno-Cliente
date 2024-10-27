const btn = document.querySelector("button");
const cajaTexto = document.querySelector("textBox");

function saltaAlert(e)
{
    console.log(e);
    alert("Has CLICKADO")
}


btn[0].addEventListener("click",()=>document.body.style.backgroundColor = "red");
btn[0].addEventListener("click",()=>document.body.style.backgroundColor = "white");
btn[0].addEventListener("click",saltaAlert);
btn[1].addEventListener("click",()=> btn[0]).removeEventListener("click",saltaAlert);
cajaTexto.addEventListener("keydown",(e)=>console.log);

//Captura el evento onClick del raton para que cada vez que suceda se ejecute un alert