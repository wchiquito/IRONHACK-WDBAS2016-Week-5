// Write your Pizza Builder JavaScript in this file.

ingredientClass = {
    'Pepperonni': 'pep',
    'Mushrooms': 'mushroom',
    'Green peppers': 'green-pepper'
};

$('.panel.controls > ul > li:lt(3) > button').on('click', toggleIngredients);

function toggleIngredients(ingredient) {
    btn = $(ingredient.currentTarget);
    $('#pizza > section[class~="' + ingredientClass[btn.text().trim()] + '"]').toggle();
    btn.toggleClass('active');
}
