(function($) {
    var jsBtn,
        jsBtnError,
        jsResult,
        jsData,
        URL = 'http://ironhack-characters.herokuapp.com/characters';

  $(document).ready(function() {

    jsBtn = $('#js-btn');
    jsBtnError = $('#js-btn-error');
    jsResult = $('#js-characters-list');
    jsBtn.on('click', ajaxRequest);
    ajaxGetRequest();
  });


  function ajaxGetRequest() {
    $.ajax({
      url: URL,
      success: handlerSuccess,
      error: handlerError
    });
  };

  function ajaxRequest() {
    jsData = $('#js-new-character').val();
    $.ajax({
      url: URL,
      method: 'POST',
      data: JSON.parse(jsData),
      success: ajaxGetRequest,
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
