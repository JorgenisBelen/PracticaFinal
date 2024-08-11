// index.test.js
const fs = require('fs');

test('deberia contener "¡Hola Mundo!"', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toContain('¡Hola Mundo!');
});
