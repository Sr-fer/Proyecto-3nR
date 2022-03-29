function comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9) {
    //De izquierda a derecha
    if (ficha1 == "X" && ficha2 == "X" && ficha3 == "X") {
        avisoVictoriaX()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box2").innerHTML = ""
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box2").appendChild(ficha_victoria())
        document.getElementById("box3").appendChild(ficha_victoria())
    } else if (ficha1 == "O" && ficha2 == "O" && ficha3 == "O") {
        avisoVictoriaO()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box2").innerHTML = ""
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box2").appendChild(ficha_victoria())
        document.getElementById("box3").appendChild(ficha_victoria())
    }

    if (ficha4 == "X" && ficha5 == "X" && ficha6 == "X") {
        avisoVictoriaX()
        document.getElementById("box4").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box6").innerHTML = ""
        document.getElementById("box4").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box6").appendChild(ficha_victoria())
    } else if (ficha4 == "O" && ficha5 == "O" && ficha6 == "O") {
        avisoVictoriaO()
        document.getElementById("box4").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box6").innerHTML = ""
        document.getElementById("box4").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box6").appendChild(ficha_victoria())
    }

    if (ficha7 == "X" && ficha8 == "X" && ficha9 == "X") {
        avisoVictoriaX()
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box8").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box7").appendChild(ficha_victoria())
        document.getElementById("box8").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    } else if (ficha7 == "O" && ficha8 == "O" && ficha9 == "O") {
        avisoVictoriaO()
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box8").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box7").appendChild(ficha_victoria())
        document.getElementById("box8").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    }


    //De arriba a abajo
    if (ficha1 == "X" && ficha4 == "X" && ficha7 == "X") {
        avisoVictoriaX()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box4").innerHTML = ""
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box4").appendChild(ficha_victoria())
        document.getElementById("box7").appendChild(ficha_victoria())
    } else if (ficha1 == "O" && ficha4 == "O" && ficha7 == "O") {
        avisoVictoriaO()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box4").innerHTML = ""
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box4").appendChild(ficha_victoria())
        document.getElementById("box7").appendChild(ficha_victoria())
    }

    if (ficha2 == "X" && ficha5 == "X" && ficha8 == "X") {
        avisoVictoriaX()
        document.getElementById("box2").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box8").innerHTML = ""
        document.getElementById("box2").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box8").appendChild(ficha_victoria())
    } else if (ficha2 == "O" && ficha5 == "O" && ficha8 == "O") {
        avisoVictoriaO()
        document.getElementById("box2").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box8").innerHTML = ""
        document.getElementById("box2").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box8").appendChild(ficha_victoria())
    }

    if (ficha3 == "X" && ficha6 == "X" && ficha9 == "X") {
        avisoVictoriaX()
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box6").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box3").appendChild(ficha_victoria())
        document.getElementById("box6").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    } else if (ficha3 == "O" && ficha6 == "O" && ficha9 == "O") {
        avisoVictoriaO()
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box6").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box3").appendChild(ficha_victoria())
        document.getElementById("box6").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    }

    //Diagonal
    if (ficha1 == "X" && ficha5 == "X" && ficha9 == "X") {
        avisoVictoriaX()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    } else if (ficha1 == "O" && ficha5 == "O" && ficha9 == "O") {
        avisoVictoriaO()
        document.getElementById("box1").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box9").innerHTML = ""
        document.getElementById("box1").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box9").appendChild(ficha_victoria())
    }

    if (ficha3 == "X" && ficha5 == "X" && ficha7 == "X") {
        avisoVictoriaX()
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box3").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box7").appendChild(ficha_victoria())
    } else if (ficha3 == "O" && ficha5 == "O" && ficha7 == "O") {
        avisoVictoriaO()
        document.getElementById("box3").innerHTML = ""
        document.getElementById("box5").innerHTML = ""
        document.getElementById("box7").innerHTML = ""
        document.getElementById("box3").appendChild(ficha_victoria())
        document.getElementById("box5").appendChild(ficha_victoria())
        document.getElementById("box7").appendChild(ficha_victoria())
    }
}

function avisoVictoriaX() {
    let temporizador = setTimeout(avisoX, 300, "Resultado")
    $("#ganador").html("X")

}

function avisoX() {
    //alert(`Victoria de: X`)
    desactivarJuego()
    banner_victoria.innerHTML = '<svg width="auto"height="100"><text x="0"y="70"style="font:bold 1.2em arial;fill:black;"viewBox="0 0 100 100">Ganaron las X<animate attributeType="XML"attributeName="x"from="-2030"to="1800"dur="7s"begin="0s"repeatCount="indefinite"/></text></svg>';
}

function avisoVictoriaO() {
    let temporizador = setTimeout(avisoO, 300, "Resultado")
    $("#ganador").html("O")
    banner_victoria.innerHTML = '<svg width="auto"height="100"><text x="0"y="70"style="font:bold 1.2em arial;fill:black;"viewBox="0 0 100 100">Ganaron los O<animate attributeType="XML"attributeName="x"from="-2030"to="1800"dur="7s"begin="0s"repeatCount="indefinite"/></text></svg>';
}

function avisoO() {
    //alert(`Victoria de: O`)
    desactivarJuego()
}

function desactivarJuego() {
    document.getElementById("box1").style.pointerEvents = "none"
    document.getElementById("box2").style.pointerEvents = "none"
    document.getElementById("box3").style.pointerEvents = "none"
    document.getElementById("box4").style.pointerEvents = "none"
    document.getElementById("box5").style.pointerEvents = "none"
    document.getElementById("box6").style.pointerEvents = "none"
    document.getElementById("box7").style.pointerEvents = "none"
    document.getElementById("box8").style.pointerEvents = "none"
    document.getElementById("box9").style.pointerEvents = "none"
}
