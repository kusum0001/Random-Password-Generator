var password = document.getElementById("password");
function genPassword(){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+abcdefghijklmnopqrstuvxxyz[];',./\{}";
    var passwordLength = 10;
    var password ="";

    for(var i = 0 ;  i<=passwordLength ; i++ ){
    var randomNumber = Math.floor(Math.random()*chars.length);
    password += chars.substring(randomNumber,randomNumber +1);

}

document.getElementById("password").value = password;
}

function copyPassword(){
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0,999);
  document.execCommand("copy");
    copyText(div.innerText().then(() => alert (Text Copied));
 
  
} 

