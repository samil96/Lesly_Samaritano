document.addEventListener('DOMContentLoaded', function() {
    //inicializando navbar
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});