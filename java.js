function reset(){
    const inputs = ["input-nombre", "input-apellido","input-correo","input-cantidad"];
    inputs.forEach(input => document.getElementById(input).value = '');
    document.getElementById("input-categoria").value = "Elige categoria"
}