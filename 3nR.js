function main() {
    ultimo_turno = 0

    turno()

    let ficha1 = ""
    let ficha2 = ""
    let ficha3 = ""
    let ficha4 = ""
    let ficha5 = ""
    let ficha6 = ""
    let ficha7 = ""
    let ficha8 = ""
    let ficha9 = ""




    turno()

    if (ultimo_turno == 1) {
        $("#turnoXO").html("X")
    } else if (ultimo_turno == -1) {
        $("#turnoXO").html("O")
    }

    document.getElementById("box1").addEventListener("click", () => {




        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box1').appendChild(img);
            document.getElementById("box1").style.pointerEvents = "none"

            ficha1 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box1').appendChild(img);
            document.getElementById("box1").style.pointerEvents = "none"

            ficha1 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)
        }

    })

    document.getElementById("box2").addEventListener("click", () => {


        }
    })

    document.getElementById("box2").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box2').appendChild(img);
            document.getElementById("box2").style.pointerEvents = "none"

            ficha2 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)


        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box2').appendChild(img);
            document.getElementById("box2").style.pointerEvents = "none"

            ficha2 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box3").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box3').appendChild(img);
            document.getElementById("box3").style.pointerEvents = "none"

            ficha3 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)


        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box3').appendChild(img);
            document.getElementById("box3").style.pointerEvents = "none"

            ficha3 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)
        }
    })

    document.getElementById("box4").addEventListener("click", () => {


        }
    })
    document.getElementById("box4").addEventListener("click", () => {


        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box4').appendChild(img);
            document.getElementById("box4").style.pointerEvents = "none"

            ficha4 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)


        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box4').appendChild(img);
            document.getElementById("box4").style.pointerEvents = "none"

            ficha4 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box5").addEventListener("click", () => {




        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box5').appendChild(img);
            document.getElementById("box5").style.pointerEvents = "none"

            ficha5 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)


        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box5').appendChild(img);
            document.getElementById("box5").style.pointerEvents = "none"

            ficha5 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box6").addEventListener("click", () => {




        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box6').appendChild(img);
            document.getElementById("box6").style.pointerEvents = "none"

            ficha6 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box6').appendChild(img);
            document.getElementById("box6").style.pointerEvents = "none"

            ficha6 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box7").addEventListener("click", () => {



        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box7').appendChild(img);
            document.getElementById("box7").style.pointerEvents = "none"

            ficha7 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)


        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box7').appendChild(img);
            document.getElementById("box7").style.pointerEvents = "none"

            ficha7 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box8").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box8').appendChild(img);
            document.getElementById("box8").style.pointerEvents = "none"

            ficha8 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box8').appendChild(img);
            document.getElementById("box8").style.pointerEvents = "none"

            ficha8 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        }
    })

    document.getElementById("box9").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box9').appendChild(img);
            document.getElementById("box9").style.pointerEvents = "none"

            ficha9 = "X"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)



        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box9').appendChild(img);
            document.getElementById("box9").style.pointerEvents = "none"

            ficha9 = "O"
            comprobarVictoria(ficha1, ficha2, ficha3, ficha4, ficha5, ficha6, ficha7, ficha8, ficha9)
        }
    })



        }
    })


}
main()