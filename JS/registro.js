var pacientes = document.querySelectorAll(".paciente");



for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tipo = paciente.querySelector(".tipo-sanguineo");
    var tipoDeSangue = tipo.textContent;


    if(tipoDeSangue != "A+" && tipoDeSangue != "A-" && tipoDeSangue != "B+" && tipoDeSangue != "B-" && tipoDeSangue != "AB+" && tipoDeSangue != "AB-" && tipoDeSangue != "O+" && tipoDeSangue != "O-") {
        console.log("Tipo sanguíneo inválido!");
        tipo.textContent = "Tipo sanguíneo inválido!";
        paciente.style.backgroundColor = "rgba(255, 0, 0, 0.442)";
    };
}
