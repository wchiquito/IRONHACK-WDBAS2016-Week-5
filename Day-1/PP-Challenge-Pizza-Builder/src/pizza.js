// Write your Pizza Builder JavaScript in this file.

ingredients = {
    'Pepperonni': '.pep',
    'Mushrooms': '.mushroom',
    'Green peppers': '.green-pepper'
};

special = {
    'White sauce': ['.sauce', 'sauce-white', '.btn-sauce'],
    'Gluten-free crust': ['.crust', 'crust-gluten-free', '.btn-crust']
}

function execFunction(querySelector, fn) {
    for (var current = 0, querySelectorLength = querySelector.length; current < querySelectorLength; ++current) {
        fn(querySelector[current]);
    }
}

function numberFromText(text) {
    var numberResult;
    if (typeof text === 'string')
        numberResult = parseInt(text.replace( /^\D+/g, ''), 10);
    return numberResult;
}

function getPanelPrice() {
    return document.getElementsByClassName('panel price')[0];
}

function getItemPrice(itemName) {
    var itemList = getPanelPrice().getElementsByTagName('li'),
        itemText;
    for (var current = 0, itemLength = itemList.length; current < itemLength; ++current) {
        itemText = itemList[current].innerText;
        if (itemText.indexOf(itemName) !== -1) {
            break;
        }
    }
    return itemList[current];
}

function getTotal() {
    return getPanelPrice()
           .getElementsByTagName('strong')[0];
}

function toggleElement(element) {
    var element = element.target,
        elementName = element.innerText,
        specialOption;
    if (isIngredient(elementName)) {
        toggleIngredient(ingredients[elementName]);
    } else {
        specialOption = special[elementName];
        toggleSpecial(specialOption[0], specialOption[1]);
    }
    toggleByClass(element, 'active');
    updateTotal(togglePrice(elementName));
}

function updateTotal(ingredient) {
    var objTotal = getTotal();
    totalText = objTotal.innerText;
    var total = numberFromText(totalText),
        current = ingredient[1];
    if (ingredient[0]) {
        total = subTotal(total, current);
    } else {
        total = addTotal(total, current);
    }
    updateDisplayPrice(objTotal, total);
}

function updateDisplayPrice(objTotal, total) {
    objTotal.innerText = objTotal.innerText.substr(0, 1) + total.toString();
}

function addTotal(total, current) {
    return total + current;
}

function subTotal(total, current) {
    return total - current;
}

function isIngredient(name) {
    return ingredients[name];
}

function manualToggle(item) {
    item.style.display = item.style.display ? '' : 'none';
    return item.style.display;
}

function toggleIngredient(ingredient) {
    execFunction(
        document.querySelectorAll(ingredient),
        function(item) {
            manualToggle(item);
        }
    );
}

function togglePrice(ingredient) {
    item = getItemPrice(ingredient.toLowerCase());
    return [manualToggle(item), numberFromText(item.innerText)];
}

function toggleSpecial(special, toggleSpecial) {
    execFunction(
        document.querySelectorAll(special),
        function(item) {
            toggleByClass(item, toggleSpecial);
        }
    );
}

function toggleSpecialPrice(special) {
    togglePrice(special);
}

function toggleByClass(element, klass) {
    element.classList.toggle(klass);
}

(function(buttonsList) {
    execFunction(
        buttonsList,
        function(item) {
            item.addEventListener('click', toggleElement);
        }
    );

    Object.keys(special).forEach(function(name) {
        execFunction(
            document.querySelectorAll(special[name][2]),
            function(item) {
               item.click();
            }
        );
    });
})(document.querySelectorAll('button'));