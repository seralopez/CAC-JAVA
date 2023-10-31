function reset() {
    const inputs = ["input-nombre", "input-apellido", "input-correo", "input-cantidad"];
    inputs.forEach(input => document.getElementById(input).value = '');
    document.getElementById("input-categoria").value = 0;
    document.getElementById("div-pagar").innerText = "Ingrese sus datos";
    document.getElementById("div-pagar").className = "alert alert-info";
}

function calcular() {
    const correo = document.getElementById("input-correo").value;
    const inputs = ["input-nombre", "input-apellido", "input-correo", "input-cantidad"];
    var valido = true;
    let txt = '';
    inputs.forEach(input => {
        if (document.getElementById(input).value.trim() === '' ||
            document.getElementById(input).value.trim() === ' '
        ) {
            valido = false;
            txt += input.replace("input-", "") + ' incorrecto\n'
        }
    });

    if (!correo.includes("@") || !correo.includes(".")) {
        valido = false;
        txt += 'correo incorrecto\n'
    }

    if (valido) {
        const cantidad = document.getElementById("input-cantidad").value;
        const descuento = document.getElementById("input-categoria").value;
        const precio = 200;
        txt = 'Total a pagar: $ ' + cantidad * (precio - (precio * (descuento / 100)));
        document.getElementById("div-pagar").className = "alert alert-info";
    } else {
        document.getElementById("div-pagar").className = "alert alert-danger";
    }
    document.getElementById("div-pagar").innerText = txt;
}

document.getElementById('btn-borrar').addEventListener('click', reset);
document.getElementById('btn-comprar').addEventListener('click', calcular);