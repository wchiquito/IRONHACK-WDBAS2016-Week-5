function renderTemplate(template, data) {
  let string,
      options = 'gm';

  for (let key in data) {
    template = template.replace(new RegExp('\\{\\{' + key + '\\}\\}', options), data[key]);
  }
  return template;
}

let template = document
               .getElementById('entry-template')
               .innerText,
    data = {
      name: 'Pokemon',
      description: 'Super Pokemon'
    };

let pokemon = renderTemplate(template, data);
console.log(pokemon);