function match(){
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var reg = /^[a-zA-Z0-9àáâãäåçèéêëìíîïðòóôõöùúûüýÿœ.]+$/;
  if(reg.test(password) && reg.test(confirmPassword))
  {
    if(password == confirmPassword){
      colorBorder('green')
    } else {
      colorBorder('red')
    }
  } else {
    alert('mot de passe incorrecte');
  }
}

function colorBorder(color)
{
  password.style.borderColor = color;
  confirmPassword.style.borderColor = color;
}
