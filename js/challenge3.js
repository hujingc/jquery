$('form').submit(function () {

    if ($("input[name='fruit']").is(':checked')) {
        console.log('a fruit is picked')
    } else {
        console.log('pick a fruit')
        alert("You must pick a fruit!")
        return false
    }

})