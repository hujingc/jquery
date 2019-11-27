$(document).ready(function () {
    $('.preview').focus(function () {
        $('#image').css("background-image", 'url(' + $(this).attr('src') + ')')
        $('#image').html($(this).attr('alt'))
    })

    $('.preview').blur(function () {
        $('#image').css("background-image", '')
        $('#image').html("Hover over an image below.")
    })

    $('.preview').hover(function () {
        $('#image').css("background-image", 'url(' + $(this).attr('src') + ')')
        $('#image').html($(this).attr('alt'))
    }, function () {
        $('#image').css("background-image", '')
        $('#image').html("Hover over an image below.")
    })
    
})