//* Função de Validação CPF *//

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
function validarCPF(cpf){
  if( !_cpf(cpf.value)){
      alert("Ops! Seu CPF não é válido!");
      cpf.value = "";
  }
}

// * Botão de Cadastrar, recebe a mensagem diz que foi cadastrado tudo ok e mostra a página do site Cadastrado com sucesso * //
function cadastrar() {
  location.href="validar.html"
  var nome = document.getElementById("nome");

  if (nome.value != "") {
      alert(nome.value + ',' + ' O seu dados foi enviado e cadastrado com sucesso em nosso sistema!');
  }
}


// * Envio para Webhook.site * //
const cadastro = document.getElementById('register')

cadastro.addEventListener('submit', function(e){
  e.preventDefault()
  let nome = document.getElementById('nome').value;
  let cpf = document.getElementById('cpf').value;
  let rg = document.getElementById('rg').value;
  let sexo = document.getElementById('sexo').value;
  let endereco = document.getElementById('endereco').value;
  let numero = document.getElementById('numero').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;
  let estado = document.getElementById('estado').value;
  let cep = document.getElementById('cep').value;
  let telefonefixo = document.getElementById('telefonefixo').value;
  let telefonecelular = document.getElementById('telefonecelular').value;
  
fetch('https://webhook.site/d4b76146-3475-4f2a-9209-425dbbc2c984', {
  method: 'POST',
  body: JSON.stringify({
      nome: nome,
      cpf: cpf,
      rg: rg,
      sexo: sexo,
      endereco: endereco,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      cep: cep,
      telefonefixo: telefonefixo,
      telefonecelular: telefonecelular,
})
  }).then( response => {
      if (response.status === 200) {
          alert('O seu dados foi enviado e cadastrado com sucesso em nosso sistema!');
      } else {
          alert("ERROR");
      }
  })
})