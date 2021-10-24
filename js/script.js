/**
 * Função para validar CPF.
 * 
 * @param cpf o valor do CPF a ser validado
 *
 * @author http://www.geradorcpf.com/javascript-validar-cpf.htm 
 * 
 * @return true, caso seja um CPF válido; false, caso seja um CPF inválido
 */

 function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');

    if (cpf == '') return false;
    if (cpf.length !=11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")

        return false;

        add = 0;
        for(i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(9)))
        return false;
        add = 0;
        for (i = 0; i < 10; i++)
        add +=parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if(rev == 10 || rev == 11)
        rev = 0;
        if(rev != parseInt(cpf.charAt(10)))
        return false;
        return true;
}

// * Aqui apresenta que não foi valido o CPF, alerta a mensagem, em seguida e limpa o valor * //
function validar_cpf(cpf){
    if( !_cpf(cpf.value)){
        alert("CPF inválido! Tente novamente.");
        cpf.value = "";
    } else {
        alert("CPF válido. Muito obrigado."); 
        return true;
    }
}



/* Exibir a mensagem com alert*/

function cadastrar() {

    var nome = document.getElementById("nome");
    location.href="validarenvio.html"
    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' o seu cadastro foi enviado com sucesso!');
    }

}

