(function() {
  loadLocalStore();
  execFunction(document.querySelectorAll('.color-changer'),
               function(item) {
                  item.addEventListener('click', colorChanger)
               });
})();

function execFunction(querySelector, fn) {
  for (var current = 0, querySelectorLength = querySelector.length; current < querySelectorLength; ++current) {
    fn(querySelector[current]);
  }
}

function colorChanger(e) {
  let color = e.target.dataset.color;
  changeBackground(color);
  saveLocalStorage(color);
}

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}

function loadLocalStore() {
  let color = localStorage.getItem('backgroundColor');
  if (color) changeBackground(color);
}

function saveLocalStorage(color) {
  localStorage.setItem('backgroundColor', color);
}

/* BAD PRACTICE
document.querySelectorAll('.color-changer').forEach(function(el) {
  el.addEventListener('click', function() {

  })
})
BAD PRACTICE */