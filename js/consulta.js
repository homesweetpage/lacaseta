$("#submit").click(function(event) {
    event.preventDefault();
    var nombre = $("#InputName").val();
    var tel = $("#InputPhone").val();
    var mail = $("#InputEmail").val();
    var consulta = $("#InputMessage").val();
    var data = {
      "name": nombre,
      "phone": tel,
      "email": mail,
      "message": consulta
    };
    console.log(data);
    $.ajax({
        type: "POST",
        url: "email.php?InputName="+nombre+"&InputPhone="+tel+"&InputEmail="+mail+"&InputMessage="+consulta,
        data: data,
        success: function(){
            document.getElementById('form').reset()
        }
    });
});
