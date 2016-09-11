(function($) {
    var jsBtn,
        jsBtnError,
        jsResult;

  $(document).ready(function() {

    jsBtn = $('#js-btn');
    jsBtnError = $('#js-btn-error');
    jsResult = $('#js-result');

    jsBtn.on('click',
              { "url": "http://ironhack-characters.herokuapp.com/characters" },
              ajaxRequest
            );

    jsBtnError.on('click',
                  { "url": "http://ironhack-characters.herokuapp.com/characterserror" },
                  ajaxRequest
                );
  });

  function ajaxRequest(event) {
    $.ajax({
      url: event.data.url,
      success: handlerSuccess,
      error: handlerError
    });
  }

  function handlerSuccess(responseData) {
    var names = ['<ul>'];
    for (obj in responseData) {
      names.push('<li>' + responseData[obj].name + '</li>');
    }
    names.push('</ul>');
    printString(names.join(''));
  }

  function handlerError(error) {
    printString(error.statusText);
  }

  function printString(string) {
    jsResult.html(string);
  }
})(jQuery);