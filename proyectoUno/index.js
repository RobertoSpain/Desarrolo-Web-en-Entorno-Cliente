window.onload = ()=>
{

    // MAIN
    let btn = document.getElementById("btnCambiar");
    let btnDeOtroModo = document.getElementsByTagName("button")[0];
    btnDeOtroModo.addEventListener("click",cambiarH1);
    let mih1 = document.getElementById("tihi1");
    mih1.addEventListener("click", (event)=>{
        event.target.style.backgroundColor = "yellow"
    })

}

function cambiarH1(e){

    let cajatexto = document.getElementById("texbox");
    let tituloH1 = document.getElementById("titH1");
    document.getElementById("titH1").innerText = cajatexto.value;
    document.getElementById("titH1").value="";
    document.getElementById("titH1").style.backgroundColor= "green";

}