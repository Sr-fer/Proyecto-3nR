function turno() {
    numero_aleatorio = Math.floor(Math.random() * (7 - 1) + 1)
    if ((numero_aleatorio % 2) == 0) {
        ultimo_turno = 1 //Empieza las X
    } else {
        ultimo_turno = -1 //Empiezan las O
    }
    return ultimo_turno
}
