function enviar(){
    let time = document.querySelector("#time").value
    let msg = document.querySelector("#resultado")
    if (time == 0 || time.length > 3){
        window.alert("Algo está errado,reescreva os segundos e tente novamente!")
    }
    else{
        tempo()
        document.querySelector("#btn").style.display = "none"
    }
    function tempo(){
        if (time > 0){
            time--;
            msg.innerHTML = time;
            setTimeout(tempo, 1000);
        } 
        else{
            msg.innerHTML = "Tempo esgotado!";
            document.querySelector("#btn").style.display = "inline-block"
        }
    }
}