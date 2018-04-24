$(document).ready(function(){
  $('.logToSign').click(function(){
    $('#loginPage').fadeOut(700,function(){
    $('#signPage').fadeIn(700);
    });
  });

  $('.signToLog').click(function(){
    $('#signPage').fadeOut(700,function(){
    $('#loginPage').fadeIn(700);
    });
  });
});
function checkPass(){
  var pass = document.getElementById('userPass').value;
  if(pass.length>16)
    alert("Invalid Password Length!");
}
function checkNum(){
  var num = document.getElementById('mobNum').value;
  if(num.length<10)
    alert("Invalid Number!");
}
