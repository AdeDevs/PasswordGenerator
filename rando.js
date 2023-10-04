var password = document.getElementById("password");
    function genPassword() {
        var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = "";
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * characters.length);
            password += characters.substring(randomNumber, randomNumber +1);
        }
        document.getElementById("password").value = password;

    }
    function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  Document.execCommand("copy");
  
}