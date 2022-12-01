var pacientes = document.querySelectorAll(".paciente");




for (var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tipo = paciente.querySelector(".tipo-sanguineo");
    var tSangue = tipo.textContent;


    var tipoDeSangueValido = validaSangue(tSangue); // true ou false

    if(!tipoDeSangueValido){

        tipoDeSangueValido = false;
        tipo.textContent = "Tipo sanguíneo inválido!";
        paciente.style.backgroundColor = "rgba(255, 0, 0, 0.442)";
    }
}

function validaSangue(tSangue){
    if(tSangue === "A+" || tSangue === "A-" || tSangue === "B+" || tSangue === "B-" || tSangue === "AB+" || tSangue === "AB-" || tSangue === "O+" || tSangue === "O-"){
        return true;
    }else{
        return false;
    }
}
