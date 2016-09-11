/*document.getElementById('mundo')
        .addEventListener('click', function() {
                                        console.log('mundo');
                                    });*/

$('.hello-button').on('click', function () {
    console.log('hello world');
});

$(document).on('ready', function(event) {
    console.log(event.currentTarget);
    $('.hello-button').css('color', 'red');
    console.log('Hola');
});

(function() {
    console.log('IIFE');
})();