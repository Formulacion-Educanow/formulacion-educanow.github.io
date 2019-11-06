function gem(obj) {
    return document.getElementsByClassName(obj);
}

function vis(obj) {
    for (var i = 0; i < obj.length; i++) {
        obj[i].className += ' visible';
    }
}
var univ = gem('univ');


setTimeout(function() {vis(univ);}, 100);

