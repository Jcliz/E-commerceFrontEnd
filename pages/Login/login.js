function validarLogin() {
  console.log('chamou a validação')

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  document.getElementById('campoObrigatorio').style.display = 'none';
  document.getElementById('senhaPadrao').style.display = 'none';

  if (!email || !senha) {
      console.log('campos vazios');
      document.getElementById('campoObrigatorio').style.display = 'block';
      return;
  }

  if (senha && (senha.length < 8 || senha.length > 16)) {
      console.log('tamanho da senha inválido');
      document.getElementById('senhaTamanho').style.display = 'block';
      return;
  }    

  console.log('email: ' + email)
  console.log('senha: ' + senha)

} 

function validarPadraoSenha() {
  console.log(event.target.value)
  const value = event.target.value

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

    input.addEventListener('focus', function() {
      input.classList.add('active');
      label.classList.add('active');
    });

    input.addEventListener('blur', function() {
      if (input.value.trim() === '') {
        input.classList.remove('active');
        label.classList.remove('active');
      }
    });

    if (input.value.trim() !== '') {
      input.classList.add('active');
      label.classList.add('active');
    }
  });
});