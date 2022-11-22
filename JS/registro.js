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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var sangue = form.sangue.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var tipoSangueTd = document.createElement("td");

    nomeTd.textContent = nome;
    tipoSangueTd.textContent = sangue;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(tipoSangueTd);

    var tabela = document.querySelector("#tabela-paciente");

    tabela.appendChild(pacienteTr);

}
)