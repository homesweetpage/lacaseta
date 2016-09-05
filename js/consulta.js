function sendMail() {
    var link = "mailto:tomasgispert@gmail.com"
             + "?cc=consulta@lacasetaplaya.com"
             + "&subject=" + escape("Consulta web")
             + "&nombre=" + escape(document.getElementById('InputName').value)
             + "&telefono=" + escape(document.getElementById('InputPhone').value)
             + "&email=" + escape(document.getElementById('InputEmail').value)
             + "&consulta=" + escape(document.getElementById('InputMessage').value)
    ;

    window.location.href = link;
}
