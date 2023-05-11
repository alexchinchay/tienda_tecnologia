const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('mins');
const segundos = document.getElementById('secs');

let limite = "Thu Jan 19 2023 09:34:50 GMT-0500";

function cuentaRegresiva(limite) {

    const tiempoLimite = new Date(limite).getTime();

    let countdown = setInterval(() => {

        let ahora = new Date().getTime(),
        tiempoTotal = tiempoLimite - ahora,
        d = ("0" + Math.floor(tiempoTotal / (1000 * 60 * 60 * 24))).slice(-2),
        h = ("0" + Math.floor((tiempoTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
        m = ("0" + Math.floor((tiempoTotal % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
        s = ("0" + Math.floor((tiempoTotal % (1000 * 60)) / (1000))).slice(-2)
        ;

        dias.textContent = d;
        horas.textContent = h;
        minutos.textContent = m;
        segundos.textContent = s;

        if(tiempoTotal <= 1000) {
            clearInterval(countdown);
            dias.textContent = '00';
            horas.textContent = '00';
            minutos.textContent = '00';
            segundos.textContent = '00';
        }

    }, 1000)

}

cuentaRegresiva(limite)