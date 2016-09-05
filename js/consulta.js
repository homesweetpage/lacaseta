function sendMail() {
    var link = "mailto:tomasgispert@gmail.com"
             + "?cc=consulta@lacasetaplaya.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
