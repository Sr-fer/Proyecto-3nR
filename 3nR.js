function main() {
    ultimo_turno = 0

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

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box1').appendChild(img);
            document.getElementById("box1").style.pointerEvents = "none"

        }
    })

    document.getElementById("box2").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box2').appendChild(img);
            document.getElementById("box2").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box2').appendChild(img);
            document.getElementById("box2").style.pointerEvents = "none"

        }
    })

    document.getElementById("box3").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box3').appendChild(img);
            document.getElementById("box3").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box3').appendChild(img);
            document.getElementById("box3").style.pointerEvents = "none"

        }
    })
    document.getElementById("box4").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box4').appendChild(img);
            document.getElementById("box4").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box4').appendChild(img);
            document.getElementById("box4").style.pointerEvents = "none"

        }
    })

    document.getElementById("box5").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box5').appendChild(img);
            document.getElementById("box5").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box5').appendChild(img);
            document.getElementById("box5").style.pointerEvents = "none"

        }
    })

    document.getElementById("box6").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box6').appendChild(img);
            document.getElementById("box6").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box6').appendChild(img);
            document.getElementById("box6").style.pointerEvents = "none"

        }
    })

    document.getElementById("box7").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box7').appendChild(img);
            document.getElementById("box7").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box7').appendChild(img);
            document.getElementById("box7").style.pointerEvents = "none"

        }
    })

    document.getElementById("box8").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box8').appendChild(img);
            document.getElementById("box8").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box8').appendChild(img);
            document.getElementById("box8").style.pointerEvents = "none"

        }
    })

    document.getElementById("box9").addEventListener("click", () => {

        if (ultimo_turno == 1) {
            img = fichaX()
            document.getElementById('box9').appendChild(img);
            document.getElementById("box9").style.pointerEvents = "none"

        } else if (ultimo_turno == -1) {
            img = fichaO()
            document.getElementById('box9').appendChild(img);
            document.getElementById("box9").style.pointerEvents = "none"

        }
    })


}
main()