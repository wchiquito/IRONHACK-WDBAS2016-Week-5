(function($) {
    var jsBtn,
        jsBtnError,
        jsResult;

  $(document).ready(function() {

    jsBtn = $('#js-btn');
    jsBtnError = $('#js-btn-error');
    jsResult = $('#js-result')[0];

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
    printString(JSON.stringify(responseData));
  }

  function handlerError(error) {
    printString(error.statusText);
  }

  function printString(string) {
    jsResult.textContent = string;
  }
})(jQuery);