function reset() {
    const inputs = ["input-nombre", "input-apellido","input-correo","input-cantidad"];
    inputs.forEach(input => document.getElementById(input).value = '');
    document.getElementById("input-categoria").value = 0;
    document.getElementById("div-pagar").innerText = "Total a pagar: $";
}

function calcular() {
    const correo = document.getElementById("input-correo").value;
    let txt = '';
    if (correo.includes("@")) {
        const cantidad = document.getElementById("input-cantidad").value;
        const descuento = document.getElementById("input-categoria").value;
        const precio = 200;
        txt = 'Total a pagar: $ ' + cantidad * (precio - (precio * (descuento/100)));
        
    }else{
        txt = 'Correo no valido';
    }
    document.getElementById("div-pagar").innerText = txt;

}

document.getElementById('btn-borrar').addEventListener('click', reset);
document.getElementById('btn-comprar').addEventListener('click', calcular);
