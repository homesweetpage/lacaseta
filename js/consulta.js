$("#submit").click(function(event) {
    event.preventDefault();
    var data = {
    name: $("#InputName").val(),
    phone: $("#InputPhone").val(),
    email: $("#InputEmail").val(),
    message: $("#InputMessage").val()
    };
    $.ajax({
        type: "POST",
        url: "email.php",
        data: data,
        success: function(){
            alert('success')
        }
    });
});
