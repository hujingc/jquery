$('form').submit(function (event) {
    console.log("the click's registering")
//if name is empty
    if ($("#fullname").val() == '') {
        console.log("there's no name")
        $("#nameerrormsg").show();
        event.preventDefault();
    } else {
        $("#nameerrormsg").hide();
    }
//if address is empty
    if ($("#streetaddr").val() == '') {
        $("#addrerrormsg").show();
        event.preventDefault();
    } else {
        $("#addrerrormsg").hide();
    }
});