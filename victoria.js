function comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9) {
    //De izquierda a derecha
    if (ficha1 == "X" && ficha2 == "X" && ficha3 == "X") {
        avisoVictoriaX()
    } else if (ficha1 == "O" && ficha2 == "O" && ficha3 == "O") {
        avisoVictoriaO()
    }

    if (ficha4 == "X" && ficha5 == "X" && ficha6 == "X") {
        avisoVictoriaX()
    } else if (ficha4 == "O" && ficha5 == "O" && ficha6 == "O") {
        avisoVictoriaO()
    }

    if (ficha7 == "X" && ficha8 == "X" && ficha9 == "X") {
        avisoVictoriaX()
    } else if (ficha7 == "O" && ficha8 == "O" && ficha9 == "O") {
        avisoVictoriaO()
    }


    //De arriba a abajo
    if (ficha1 == "X" && ficha4 == "X" && ficha7 == "X") {
        avisoVictoriaX()
    } else if (ficha1 == "O" && ficha4 == "O" && ficha7 == "O") {
        avisoVictoriaO()
    }

    if (ficha2 == "X" && ficha5 == "X" && ficha8 == "X") {
        avisoVictoriaX()
    } else if (ficha2 == "O" && ficha5 == "O" && ficha8 == "O") {
        avisoVictoriaO()
    }

    if (ficha3 == "X" && ficha6 == "X" && ficha9 == "X") {
        avisoVictoriaX()
    } else if (ficha3 == "O" && ficha6 == "O" && ficha9 == "O") {
        avisoVictoriaO()
    }

    //Diagonal
    if (ficha1 == "X" && ficha5 == "X" && ficha9 == "X") {
        avisoVictoriaX()
    } else if (ficha1 == "O" && ficha5 == "O" && ficha9 == "O") {
        avisoVictoriaO()
    }

    if (ficha3 == "X" && ficha5 == "X" && ficha7 == "X") {
        avisoVictoriaX()
    } else if (ficha3 == "O" && ficha5 == "O" && ficha7 == "O") {
        avisoVictoriaO()
    }
}

function avisoVictoriaX() {
    let temporizador = setTimeout(avisoX, 300, "Resultado")
}

function avisoX() {
    //alert(`Victoria de: X`)
    desactivarJuego()
}

function avisoVictoriaO() {
    let temporizador = setTimeout(avisoO, 300, "Resultado")
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
