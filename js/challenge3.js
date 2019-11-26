$('form').submit(function () {
    let fruit = $("input[name='fruit']").is(':checked');
    let standing = $("input[name='standing']").is(':checked');
    if (fruit & standing) {
        console.log('everything is fine')
    } else if (!fruit & standing) {
        console.log('pick a fruit, we have standing')
        alert("You must pick a fruit!")
        return false
    } else if (fruit & !standing) {
        console.log('pick a standing, we have fruit')
        alert("You must pick a class standing!")
        return false
    } else {
        console.log('have not picked anything')
        alert("You must pick a fruit and a class standing!")
        return false
    }
})