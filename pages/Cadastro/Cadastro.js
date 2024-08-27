function validarEmail() {
    console.log('chamou a validação')

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senhaConfirm = document.getElementById('senhaConfirm').value;

    if (!email || !senha || !senhaConfirm) {
        console.log('campos vazios');
        alert("Campos vazios");
        return;
    }

    if (senha && (senha.length < 8 || senha.length > 16)) {
        console.log('tamanho da senha inválido');
        alert("A senha precisa ter entre 8 a 16 dígitos");
        return;
    }    

    if (senhaConfirm !== senha) {
        console.log('Senha diferente');
        alert("A senha está diferente na confirmação");
        return;
    }
}

function validarPadraoSenha(event) {
    console.log(event.target.value);
    const value = event.target.value;

    document.getElementById('senhaPadrao').style.display = 'none';

    if (!value.match(/[^A-Z]/)) {
        document.getElementById('senhaPadrao').style.display = 'block';
    }

    if (!value.match(/[^A-Za-z 0-9]/g)) {
        document.getElementById('senhaPadrao').style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.form-control');
  
    inputs.forEach(function(input) {
      var label = input.previousElementSibling;
  
      // Adiciona a classe 'active' quando o campo ganha foco ou quando o valor é preenchido
      input.addEventListener('focus', function() {
        input.classList.add('active');
        label.classList.add('active');
      });
  
      // Remove a classe 'active' quando o campo perde o foco e está vazio
      input.addEventListener('blur', function() {
        if (input.value.trim() === '') {
          input.classList.remove('active');
          label.classList.remove('active');
        }
      });
  
      // Adiciona a classe 'active' se o campo já tiver um valor quando a página carregar
      if (input.value.trim() !== '') {
        input.classList.add('active');
        label.classList.add('active');
      }
    });
  });
  