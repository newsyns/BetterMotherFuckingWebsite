function popUp() {
    reponse = prompt("Vient sur ce site trop cool !");
        if (reponse == "oui") {
            window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        } else if(reponse == "non"){
            console.log("L'utilisateur a choisit "+reponse);
        }
        else {
            alert("Rentre oui ou non !");
            popUp();
        }
}

setTimeout(popUp, 10000);


document.querySelector('button').addEventListener('click', function() {
    
    document.body.style.backgroundColor = "magenta";
    p = document.getElementsByTagName("p");

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "blue";
        p[i].style.fontFamily = "papyrus";
        
    }
    
    head = document.getElementsByClassName("head");
    
    for (let i = 0; i < head.length; i++) {
        head[i].style.color = "green";
        head[i].style.fontFamily = "Comic Sans MS";
        
    }
});