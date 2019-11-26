$('form').submit(function (event) {
    console.log("the click's registering")
//if name is empty
    if ($("#fullname").val() == '') {
        console.log("there's no name")
        $("#nameerrormsg").show();
    } else {
        $("#nameerrormsg").hide();
    }
//if address is empty
    if ($("#streetaddr").val() == '') {
        $("#addrerrormsg").show();
    } else {
        $("#addrerrormsg").hide();
    }
    event.preventDefault();
});
console.log("the script's here")